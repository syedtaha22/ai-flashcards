"use client";
import { useState } from "react";
import { collection, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "@/firebase";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from '@mui/system';
import validator from 'validator';
import { useRouter } from "next/navigation";

// Styled Button with Gradient and Rounded Corners
const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #8a2387, #e94057, #f27121)",  // Vibrant dark gradient
  color: "white",
  padding: "10px 20px",
  borderRadius: "50px",
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  transition: "transform 0.2s ease-in-out",
  marginTop: "20px",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

// Styled TextField with Rounded Corners
const RoundedTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    color: '#ffffff',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // White border on active/focus
    },
  },
  '& .MuiInputLabel-root': {
    color: '#e0e0e0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
});

// Styled container with Glassmorphism
const GlassContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(15px)',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
  maxWidth: '500px',
  margin: '50px auto',
  textAlign: 'center',
  zIndex: 2,
});

// Background container with layered black and gradient
const BackgroundLayer = styled(Box)({
  background: "black",  // Black root layer
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
});

const GradientLayer = styled(Box)({
  background: "linear-gradient(135deg, #1a2a6c, #b21f1f)", // Vibrant dark gradient
  opacity: 0.5,
  filter: 'blur(100px)',
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0.75,
  zIndex: 1,
});

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleJoinWaitlist = async () => {
    setMessage(""); // Clear any previous messages

    // Validate name and email
    if (!name.trim()) {
      setMessage("Name cannot be empty.");
      return;
    }
    if (!validator.isEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const docRef = doc(firestore, "waitlist-flash-ai", "waitlist-entries");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        contacts: arrayUnion({ name, email })
      });
    } else {
      await setDoc(docRef, { contacts: [{ name, email }] });
    }

    setMessage("You have successfully joined the waitlist!");
    setName("");
    setEmail("");
    // Wait 3 seconds before redirecting to the home page
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <BackgroundLayer />
      <GradientLayer />
      <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <GlassContainer>
          <RoundedTextField
            label="Enter your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ width: '100%', marginBottom: '20px' }}
          />
          <RoundedTextField
            label="Enter your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: '100%' }}
          />
          <GradientButton onClick={handleJoinWaitlist}>
            Join Waitlist
          </GradientButton>
          {message && (
            <Typography sx={{ marginTop: '20px', color: message.includes('successfully') ? '#00e676' : '#ff1744' }}>
              {message}
            </Typography>
          )}
        </GlassContainer>
      </Box>
    </Box>
  );
}
