"use client";
import { useState } from "react";
import { collection, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "@/firebase";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from '@mui/system';
import validator from 'validator';

// Styled Button with Gradient and Rounded Corners
const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "50px",
  marginLeft: "10px",
});

// Styled TextField with Rounded Corners
const RoundedTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
  },
});

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleJoinWaitlist = async () => {
    setError(""); // Clear any previous errors

    // Validate name and email
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }
    if (!validator.isEmail(email)) {
      setError("Please enter a valid email address.");
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

    setError("You have successfully joined the waitlist!");
    setName("");
    setEmail("");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>
        <RoundedTextField
          label="Enter your Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: '300px', marginRight: '10px' }}
        />
        <RoundedTextField
          label="Enter your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: '300px' }}
        />
        <GradientButton onClick={handleJoinWaitlist}>
          Join Waitlist
        </GradientButton>
      </Box>
      {error && (
        <Typography color="error" sx={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
