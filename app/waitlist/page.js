"use client";
import { useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import { TextField, Button, Box, Typography } from "@mui/material";
import { styled } from '@mui/system';

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
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleJoinWaitlist = async () => {
    setError(""); // Clear any previous errors

    if (!/^[\w.-]+@gmail\.com$/.test(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }

    const docRef = doc(firestore, "waitlist-flash-ai", "gmails");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const updatedEmails = [...data.gmails, email];
      await setDoc(docRef, { gmails: updatedEmails });
    } else {
      await setDoc(docRef, { gmails: [email] });
    }

    setError("You have successfully joined the waitlist!");
    setEmail("");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <RoundedTextField
          label="Enter your Gmail"
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
