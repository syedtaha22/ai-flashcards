"use client";

import { useState } from "react";
import { Box, Button, Card, CardContent, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { doc, collection, getDoc, writeBatch } from "firebase/firestore"; // Import Firebase functions
import { firestore } from '@/firebase';

// Responsive background
const Background = styled(Box)(({ theme }) => ({
  backgroundColor: "#F0F4FF",
  color: "#1F2023",
  minHeight: "100vh", // Adjust to minHeight to prevent the white background issue on scroll
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  [theme.breakpoints.down('sm')]: {
    padding: "10px",
  },
}));

const Flashcard = styled(Card)(({ theme }) => ({
  perspective: "1000px",
  cursor: "pointer",
  '& .MuiCardContent-root': {
    transition: "transform 0.5s",
    transformStyle: "preserve-3d",
    position: "relative",
    height: "150px",
    width: "200px",
    [theme.breakpoints.down('sm')]: {
      height: "120px", // Adjust for smaller screens
      width: "150px",
    },
  },
  '&.flipped .MuiCardContent-root': {
    transform: "rotateY(180deg)",
  },
  '& .front, & .back': {
    backfaceVisibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.shape.borderRadius,
    padding: "10px",
    textAlign: "center",
  },
  '& .front': {
    backgroundColor: "#121212",
    color: "#FFFFFF",

  },
  '& .back': {
    backgroundColor: "#FFFFFF",
    color: "#121212",
    transform: "rotateY(180deg)",
    fontSize: "0.875rem",
  },
}));

export default function Page() {
  const [text, setText] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [setName, setSetName] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter some text to generate flashcards.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: text,
      });

      if (!response.ok) {
        throw new Error("Failed to generate flashcards");
      }

      const data = await response.json();
      setFlashcards(data);
    } catch (error) {
      console.error("Error generating flashcards:", error);
      alert("An error occurred while generating flashcards. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (index) => {
    setFlashcards((prev) =>
      prev.map((card, i) =>
        i === index ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  const handleSaveClick = () => {
    setSaveDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSaveDialogOpen(false);
  };

  const saveFlashcards = async () => {
    if (!setName.trim()) {
      alert('Please enter a name for your flashcard set.');
      return;
    }

    try {
      const userDocRef = doc(collection(firestore, 'users'), "user_id"); // Replace "user_id" with the actual user ID
      const userDocSnap = await getDoc(userDocRef);

      const batch = writeBatch(firestore);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const collectionExists = userData.flashcardSets?.some(set => set.name === setName);

        if (collectionExists) {
          alert('A flashcard collection with this name already exists. Please choose a different name.');
          return;
        }

        const updatedSets = [...(userData.flashcardSets || []), { name: setName }];
        batch.update(userDocRef, { flashcardSets: updatedSets });
      } else {
        batch.set(userDocRef, { flashcardSets: [{ name: setName }] });
      }

      const setDocRef = doc(collection(userDocRef, 'flashcardSets'), setName);
      batch.set(setDocRef, { flashcards });

      console.log('Flashcards saved:', flashcards);

      await batch.commit();

      alert('Flashcards saved successfully!');
      handleCloseDialog();
      setSetName('');
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('An error occurred while saving flashcards. Please try again.');
    }
  };

  return (
    <Background>
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold", color: "#1F2023" }}>
        Create Your First FlashCard Collection
      </Typography>
      <Box maxWidth="sm" width="100%">
        <Box mb={4} display="flex">
          <TextField
            fullWidth
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a prompt or question"
            InputProps={{
              style: {
                backgroundColor: "#F0F4FF",
                color: "#1F2023",
                borderRadius: "50px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: "2px solid #1A1A1A",
                  margin: "-2px",
                  borderRadius: "50px",
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#1A1A1A",
              color: "#FAFAFA",
              marginLeft: "10px",
              borderRadius: "50px",
              textTransform: "none",
              '&:hover': {
                backgroundColor: "#1A1A1A",
              },
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#FAFAFA" }} /> : "Create"}
          </Button>
        </Box>
      </Box>

      {flashcards.length > 0 && (
        <>
          <Box mt={4}>
            <Grid container spacing={2} justifyContent="center">
              {flashcards.map((card, index) => (
                <Grid item key={index}>
                  <Flashcard
                    className={card.flipped ? "flipped" : ""}
                    onClick={() => handleCardClick(index)}
                  >
                    <CardContent>
                      <Box className="front">
                        <Typography variant="body2">{card.front}</Typography>
                      </Box>
                      <Box className="back">
                        <Typography variant="body2">{card.back}</Typography>
                      </Box>
                    </CardContent>
                  </Flashcard>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              onClick={handleSaveClick}
              sx={{
                backgroundColor: "#FAFAFA",
                color: "#121212",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: "#FAFAFA",
                },
              }}
            >
              Save
            </Button>
          </Box>

          <Dialog open={saveDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Save Flashcard Collection</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your flashcard collection.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                label="Collection Name"
                type="text"
                fullWidth
                value={setName}
                onChange={(e) => setSetName(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseDialog}
                sx={{
                  color: "#1A1A1A",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={saveFlashcards}
                sx={{
                  backgroundColor: "#1A1A1A",
                  color: "#FAFAFA",
                  textTransform: "none",
                  '&:hover': {
                    backgroundColor: "#1A1A1A",
                  },
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Background>
  );
}
