"use client";

import React from "react";
import { AppBar, Box, Button, Grid, Link, Paper, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import App from "next/app";
import { UserProfile } from "@clerk/nextjs";


//Flash icon for Header section 
const FlashIcon = (props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
            <path d="m13 12-3 5h4l-3 5" />
        </svg>
    )
}



// Glassmorphism styled component
const GlassCard = styled(Paper)(({ theme }) => ({
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(15px)",
    borderRadius: "15px",
    padding: theme.spacing(3),
    boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    color: "#fff",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
        transform: "scale(1.05)",
    },
}));

const GradientLayer = styled('div')(({ color1 = 'rgba(255,0,150,0.5)', color2 = 'rgba(0,205,255,0.5)' }) => ({
    position: 'absolute',
    width: '100%', // Ensure the box takes full width
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 0,
    // background: `radial-gradient(circle at top left, ${color1}, transparent), radial-gradient(circle at bottom right, ${color2}, transparent)`,
    // background: `radial-gradient(circle at top left, #d5133a, transparent), radial-gradient(circle at bottom right, #72a6ca, transparent)`,
    background: `linear-gradient(135deg, #03001e, #7303c0, #ec38bc)`,
    opacity: 0.6,
    filter: 'blur(50px)',
}));

const BackgroundLayer = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Ensure the box takes full width
    height: '100%',
    backgroundColor: 'black',
    zIndex: -1,
});


// Main dashboard component
const Dashboard = () => {
    // Sample data for flashcard collections
    const flashcardCollections = [
        { id: 1, title: "JavaScript Basics" },
        { id: 2, title: "React Concepts" },
        { id: 3, title: "Data Structures" },
        { id: 4, title: "Machine Learning" },
        { id: 5, title: "CSS Flexbox" },
    ];

    // Function to handle card clicks
    const handleCardClick = (collectionId) => {
        console.log('Clicked card with id:', collectionId);
        // Add your desired functionality here
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >

            <AppBar position="sticky"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'none',
                    color: 'white',
                    mb: '100px',  // Margin bottom
                }}
            >
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                }}>

                    {/* Logo + FlashAI Text */}
                    <Link href="page.js" sx={{ color: 'white', textDecoration: 'none' }}>
                        <Box sx={{
                            ml: '1px',
                            display: 'flex',
                            gap: 1,
                        }}>
                            <FlashIcon />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '18px', lg: '20px' }  // Responsive font size
                                }}>
                                FlashAI
                            </Typography>
                        </Box>
                    </Link>

                    {/* SignIn and SignUp Buttons */}
                    <Box sx={{
                        color: '#121212',
                        display: 'flex',
                        gap: { xs: 0.1, lg: 2 }  // Responsive gap between buttons
                    }}>

                        {/* <UserProfile /> */}
                    </Box>

                </Toolbar>
            </AppBar>



            <BackgroundLayer />
            <GradientLayer />


            <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                sx={{
                    mb: 4,
                    padding: "10px 20px",
                    background: "linear-gradient(135deg, #ff4081, #f50057)",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 4px 15px rgba(255, 64, 129, 0.2)",
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderRadius: "30px",
                    "&:hover": {
                        background: "linear-gradient(135deg, #f50057, #ff4081)",
                    },
                }}
            >
                Create New Collection
            </Button>
            <Grid container spacing={4} justifyContent="center" padding={5}>
                {flashcardCollections.map((collection) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={collection.id}>
                        <GlassCard
                            elevation={6}
                            onClick={() => handleCardClick(collection.id)} // Handle the click event
                        >
                            <Typography variant="h6" align="center" gutterBottom>
                                {collection.title}
                            </Typography>
                        </GlassCard>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Dashboard;
