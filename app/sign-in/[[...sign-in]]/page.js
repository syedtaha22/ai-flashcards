import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import {SignedIn, SignedOut, SignIn, UserButton} from '@clerk/nextjs'

export default function SignInPage(){
    return(
        <Container maxWidth='100vw'>
            <AppBar position="static" sx={{backgroundColor: "#3f51b5"}}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>Flashcard SaaS</Typography>
                    <Button color="inherit">
                        <Link href="/login" passHref>Login</Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-up" passHref>Sign Up</Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h4">
                    Sign In
                </Typography>
                <SignIn />
            </Box>
        </Container>
    )
}