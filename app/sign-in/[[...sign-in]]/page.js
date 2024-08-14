"use client";
import { AppBar, Box, Button, Container, Toolbar, Typography, styled } from "@mui/material"
import Link from "next/link"
import {SignedIn, SignedOut, SignIn, UserButton} from '@clerk/nextjs'

const Background = styled(Box)(({ theme }) => ({
    backgroundColor: "#F0F4FF",
    color: "#1F2023",
    minHeight: "100vh", // Adjust to minHeight to prevent the white background issue on scroll
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    [theme.breakpoints.down('sm')]: {padding: "10px",},
}));

export default function SignInPage(){
    return(
        <Background>
            <Container maxWidth='100vw'>
                <AppBar position="static" sx={{mt: -8}}>
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>Flashcard SaaS</Typography>
                        <Button color="inherit" variant="contained" sx={{mr: 1}}>
                            <Link href="/login" passHref>Login</Link>
                        </Button>
                        <Button color="inherit" variant="contained">
                            <Link href="/sign-up" passHref>Sign Up</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{gap: 2, padding: 2}}>
                    <Typography variant="h4">
                        Sign In
                    </Typography>
                    <SignIn />
                </Box>
            </Container>
        </Background>
    )
}