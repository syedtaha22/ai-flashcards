'use client';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Link, Card, CardContent, Avatar } from '@mui/material';
import { Bolt, CommitSharp, Done, Replay } from '@mui/icons-material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase';

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

const GradientLayer = styled('div')(({ color1 = 'rgba(255,0,150,0.5)', color2 = 'rgba(0,205,255,0.5)' }) => ({
    position: 'absolute',
    width: '100%', // Ensure the box takes full width
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    background: `radial-gradient(circle at top left, ${color1}, transparent), radial-gradient(circle at bottom right, ${color2}, transparent)`,
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
    zIndex: 0,
});


/* ============================== Landing Page ==============================*/
const LandingPage = () => {
    const router = useRouter();
    const [totalUsers, setTotalUsers] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleJoinWaitlist = () => {
        router.push("/waitlist");
    };


    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const waitlists = collection(firestore, 'waitlist-flash-ai');
                const querySnapshot = await getDocs(waitlists);
                let userCount = 0;

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    console.log(data);
                    if (data.contacts) {
                        userCount += data.contacts.length;
                    }
                });

                setTotalUsers(userCount);
            } catch (error) {
                console.error('Error fetching review count:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserCount();
    }, []);



    return (
        <Box color='white'>
            {/* ============================== Header Section ============================== */}
            <AppBar position="sticky" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                    {/* ============================ Logo + FlashAI Text ============================ */}
                    <Link href="/" sx={{ textDecoration: 'none' }}>
                        <Box sx={{ color: 'white', ml: '1px', display: 'flex', gap: 1 }}>
                            <FlashIcon /> {/* FlashAI Icon */}
                            <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '18px', lg: '20px' } }}>
                                FlashAI
                            </Typography>
                        </Box>
                    </Link>
                    {/* ============================================================================= */}
                    <Box sx={{ display: 'flex', gap: { xs: 0.1, lg: 2 } }}>

                        {/* =========================== Join the Waitlist =========================== */}
                        <Button onClick={handleJoinWaitlist}  // --------------------> Link Waitlist here
                            color='inherit'
                            variant='outlined'

                            sx={{
                                borderRadius: '8px',
                                borderColor: 'rgba(255, 255, 255, 0.5)',
                                mr: { xs: '-9px', lg: '20px' },  // Responsive margin
                                textTransform: 'none',
                                backgroundColor: 'transparent',
                                fontSize: { xs: '13px', lg: '15px' }, // Responsive font size
                                '&:hover': { backgroundColor: '#fff', color: 'black' },
                            }}
                        >
                            Join the Waitlist
                        </Button>
                        {/* =========================================================================== */}

                    </Box>
                </Toolbar>
            </AppBar>
            {/* ================================================================================= */}


            {/* ================================== Hero Section ================================= */}
            <Box sx={{
                display: 'flex',
                width: '100%%', // Ensure the box takes full width
                height: '91vh',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'black',
            }}>


                {/* ================================== Gradient ================================== */}
                <BackgroundLayer /> {/* Background overlay */}
                <GradientLayer /> {/* Gradient overlay */}
                {/* ============================================================================== */}

                {/* ========================= Hero Section description ========================== */}
                <Grid container spacing={2} zIndex={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} lg={6}          >
                        <Box sx={{ ml: '10px', flex: 1, display: 'flex', minHeight: { xs: '30vh', lg: '70vh' } }}>
                            <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '30px', lg: '49px' } }}>
                                    AI-Powered Flashcards
                                </Typography>
                                <Typography variant="h6" sx={{ mt: { xs: '30px', lg: '10px' }, fontSize: { xs: '20px', lg: '19px' } }}                >
                                    Revolutionize your study routine with our AI-generated flashcards.
                                    Boost your retention and ace your exams.
                                </Typography>
                                <Button variant="outlined" onClick={handleJoinWaitlist}
                                    sx={{ mt: '25px', borderColor: 'white', borderRadius: '8px', color: 'inherit', '&:hover': { borderColor: 'rgba(255,255,255,0.5)' } }}>
                                    Join the waitlist
                                </Button>
                                <Typography
                                    fontSize={10}
                                    sx={{
                                        marginTop: '15px',
                                        color: 'rgba(255,255,255,0.6)',
                                    }}
                                >
                                    {isLoading ? 'Calculating...' : `${totalUsers} People Have Joined the Waitlist`}
                                </Typography>
                            </Container>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* ============================================================================== */}

            {/* ============================= Features section ============================== */}
            <Box sx={{ background: 'black' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    pb: '40px',
                    position: 'relative',
                    background: 'radial-gradient(circle at bottom left, rgba(255,0,150,0.5), transparent), radial-gradient(circle at top right, rgba(0,205,255,0.5), transparent)',
                    backdropFilter: 'blur(100px)',
                }}>
                    <Container maxWidth="lg" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <Typography variant='h4' sx={{ fontWeight: 'bold', mt: '100px' }}>
                                Powerful Features
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px', mt: { xs: '30px', lg: '10px' }, fontSize: { xs: '20px', lg: '19px' } }}>
                                Our AI-powered flashcard generator offers a range of features <br />
                                to help you study more effectively.
                            </Typography>
                        </Box>
                        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            {/* ================================= Feature 1 ================================== */}
                            <Grid item xm={12} sm={6} md={4} lg={4}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    border: 'none',
                                    width: '100%', // Take full width of the grid item
                                    height: { xs: '33vh', md: '25vh', lg: '30vh' },
                                }}>
                                    <Bolt sx={{ fontWeight: 'bold', fontSize: { xs: '30px', md: '30px', lg: '30px' } }} />
                                    <Typography variant='h6'
                                        sx={{
                                            mt: '15px',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '25px', md: '20px', lg: '20px' },  // Responsive font size
                                            mb: { xs: '10px', md: '15px', lg: '20px' }  // Responsive margin-bottom
                                        }}
                                    >
                                        Instant Flashcard Generation
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '17px', md: '10px', lg: '15px' } }}>
                                        Our AI algorithm generates high-quality flashcards in seconds, saving you valuable time.
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* ============================================================================== */}

                            {/* ================================= Feature 2 ================================== */}
                            <Grid item xm={12} sm={6} md={4} lg={4}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    border: 'none',
                                    width: '100%', // Take full width of the grid item
                                    height: { xs: '33vh', md: '25vh', lg: '30vh' },  //responsivenesss
                                }}>
                                    <SettingsOutlinedIcon sx={{ fontWeight: 'bold', fontSize: { xs: '30px', md: '30px', lg: '30px' } }} />
                                    <Typography variant='h6'
                                        sx={{
                                            mt: '15px',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '25px', md: '20px', lg: '20px' },  // Responsive font size
                                            mb: { xs: '10px', md: '15px', lg: '20px' }  // Responsive margin-bottom
                                        }}
                                    >
                                        Customizable Decks
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontSize: { xs: '17px', md: '10px', lg: '15px' } }}>
                                        Personalize your flashcard decks with custom tags, categories, and difficulty levels.
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* ============================================================================== */}

                            {/* ================================= Feature 3  ================================= */}
                            <Grid item xm={12} sm={6} md={4} lg={4}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    border: 'none',
                                    width: '100%', // Take full width of the grid item
                                    height: { xs: '33vh', md: '25vh', lg: '30vh' },
                                }}>
                                    <Replay sx={{ fontWeight: 'bold', fontSize: { xs: '30px', md: '30px', lg: '30px' } }} />
                                    <Typography variant='h6'
                                        sx={{
                                            mt: '15px',
                                            fontWeight: 'bold',
                                            fontSize: { xs: '25px', md: '20px', lg: '20px' },  // Responsive font size
                                            mb: { xs: '10px', md: '15px', lg: '20px' }  // Responsive margin-bottom
                                        }}
                                    >
                                        Spaced Repetition
                                    </Typography>

                                    <Typography variant='body1' sx={{ fontSize: { xs: '17px', md: '10px', lg: '15px' } }}>
                                        Our intelligent algorithm ensures you review content at the optimal intervals
                                        for long-term retention.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* ============================================================================== */}

                    </Container>
                </Box >
            </Box>
            {/* ============================================================================== */}


            {/* =============================== Pricing Section ============================== */}
            <Box sx={{ background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                {/* =================================== Header ================================= */}
                <Box sx={{
                    background: 'radial-gradient(circle at top left, rgba(255,0,150,0.5), transparent), radial-gradient(circle at bottom right, rgba(0,205,255,0.5), transparent)',
                    py: { xs: 4, md: 6 }, // Reduce the padding of the section
                }}>
                    <Box sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', mb: { xs: 4, md: 6 }, px: { xs: 2, sm: 4, md: 6 }, }} >
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Pricing</Typography>
                        <Typography variant="h6"
                            sx={{
                                mt: { xs: '8px', lg: '12px' }, // Adjust the margin-top for better spacing
                                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                                maxWidth: { xs: '100%', sm: '80%', md: '60%' },
                                mx: 'auto',
                            }}
                        >
                            Choose the plan that best fits your needs and start studying more effectively today.
                        </Typography>
                    </Box>
                    {/* ============================================================================== */}

                    {/* ================================ Pricing Cards =============================== */}
                    <Box sx={{
                        mx: 'auto',
                        maxWidth: { xs: '80%', sm: '80%', md: '60%' },
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on larger screens
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4, // Spacing between cards
                    }}>

                        {/* ================================ Free Plan ================================ */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                padding: { xs: '16px', md: '24px' }, // Reduce padding inside the cards
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                textAlign: 'center',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                width: '100%',
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Free</Typography>
                            <Typography variant="h6" sx={{ mt: 1.5 }}>Unlock Basic features.</Typography>

                            {/* ==== Features ==== */}
                            <Box sx={{ mt: 2, width: '100%', textAlign: 'left' }}>
                                <li style={{ display: 'flex', alignItems: 'left', marginBottom: '8px' }}>
                                    <Done style={{ marginRight: '8px' }} />
                                    <Typography >Upto 50 flashcards</Typography>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <Done style={{ marginRight: '8px' }} />
                                    <Typography>Basic customization</Typography>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <Done style={{ marginRight: '8px' }} />
                                    <Typography>Basic support</Typography>
                                </li>
                            </Box>
                            {/* ================== */}
                        </Box>
                        {/* ============================================================================== */}

                        {/* ================================ Pro Plan ================================ */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                padding: { xs: '16px', md: '24px' }, // Reduce padding inside the cards
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                textAlign: 'center',
                                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                width: '100%',
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Pro</Typography>
                            <Typography variant="h6" sx={{ mt: 1.5 }}>Unlock advanced features.</Typography>

                            {/* ==== Features ==== */}
                            <Box sx={{ mt: 2, width: '100%', textAlign: 'left' }}>
                                <li style={{ display: 'flex', alignItems: 'left', marginBottom: '8px' }}>
                                    <Done style={{ marginRight: '8px' }} />
                                    <Typography >Unlimited flashcards</Typography>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <Done style={{ marginRight: '8px' }} />
                                    <Typography>Advanced customization</Typography>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                    <Done style={{ marginRight: '8px' }} />
                                    <Typography>Priority support and much more</Typography>
                                </li>
                            </Box>
                            {/* ================== */}
                        </Box>
                    </Box>
                    {/* ============================================================================== */}
                </Box>
                {/* ================================================================================ */}



                {/** =============================== Foooter Section =============================== */}
                < Box component="footer"
                    sx={{
                        mt: '0px',
                        display: 'flex',
                        flexDirection: 'row', // Stack vertically on small screens, horizontally on larger screens
                        gap: 2, // Spacing between items
                        py: 3, // Padding on the top and bottom
                        px: { xs: 4, md: 6 }, // Padding on the left and right, responsive
                        width: '100%', // Full width
                        alignItems: 'center', // Center align items vertically
                        justifyContent: 'space-between', // Spread items out between left and right
                        background: 'radial-gradient(circle at top left, rgba(255,0,150,0.5), transparent), radial-gradient(circle at bottom right, rgba(0,205,255,0.5), transparent)',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    {/* =============================== Copyright Section =============================== */}
                    < Typography variant="body2" sx={{ fontSize: '0.75rem' }}> {/* Equivalent to text-xs */}&copy; 2024 FlashAI. All rights reserved.</Typography >
                    {/* ============================================================================== */}

                    {/* ============================== Navigation Links ============================= /*/}
                    < Box component="nav" sx={{ display: 'flex', gap: { xs: 2, sm: 4 } }}>
                        {/* ========================= Terms of Service  Link ===========-=============== */}
                        < Link href="#" sx={{ fontSize: '0.75rem', textDecoration: 'none' }}>Terms of Service</Link >
                        {/* ============================================================================ */}

                        {/* =============================== Privacy  Link ============================== */}
                        < Link href="#" sx={{ fontSize: '0.75rem', textDecoration: 'none' }}>Privacy </Link >
                        {/* ============================================================================ */}

                        {/* =============================== Contact Link =============================== */}
                        < Link href="#" sx={{ fontSize: '0.75rem', textDecoration: 'none' }}>Contact</Link >
                        {/* ============================================================================ */}
                    </Box >
                    {/* ============================================================================ */}
                </Box >
                {/* ================================================================================ */}
            </Box >

        </Box >
    );
}

export default LandingPage;
