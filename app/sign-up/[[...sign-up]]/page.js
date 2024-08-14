import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import {SignedIn, SignedOut, SignIn, UserButton, SignUp} from '@clerk/nextjs'

export default function SignUpPage(){
    return(
        <Container maxWidth='100vw'>
            <AppBar position="static" sx={{backgroundColor: "#3f51b5"}}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>Flashcard SaaS</Typography>
                    <Button color="inherit">
                        <Link href="/login" passHref>Login</Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-in" passHref>Sign In</Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h4">
                    Sign Up
                </Typography>
                <SignUp />
            </Box>
        </Container>
    )
}