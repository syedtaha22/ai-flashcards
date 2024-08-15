'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Link, Card, CardContent, Avatar } from '@mui/material';
import { CommitSharp } from '@mui/icons-material';
import Image from 'next/image';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SvgIcon from '@mui/material/SvgIcon'
import DoneIcon from '@mui/icons-material/Done';


// Bolt Icon for Feature section
const BoltIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
      />
    </SvgIcon>
  );
};


// Sparkle Icon for feature section
const SparkleIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 122.88 122.88">
      <path
        d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 
        c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 
        c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z"
        stroke="currentColor"
        fill="none"
        strokeWidth="12"
      />
    </SvgIcon>
  );
};

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


///////////////////////// Main Component /////////////////////////////////////
const LandingPage = () => {

  return (
    <Box
    >


{/* /////////////////////////////////////////// Header Section /////////////////////////////////////////////////////////////////// */}


      <AppBar position="static"
        sx={{
          backgroundImage: `url('/hbg.jpg')`,  // header glassy Background Image 
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}>

          {/* Logo + FlashAI Text */}
          <Link href="page.js" sx={{ color: 'black', textDecoration: 'none' }}>
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
            <Button
              color='inherit'
              sx={{
                color: 'black',
                '&:hover': { backgroundColor: '#121212', color: 'white' },
                textTransform: 'none',
                fontSize: { xs: '13px', lg: '15px' }  // Responsive font size
              }}
              href=""      /////////////////// Link SignIn page here ///////////////////
            >
              Sign In
            </Button>

            <Button
              color='inherit'
              variant='outlined'
              sx={{
                color: '#fff',
                mr: { xs: '-9px', lg: '20px' },  // Responsive margin
                textTransform: 'none',
                backgroundColor: '#121212',
                fontSize: { xs: '13px', lg: '15px' }, // Responsive font size
                '&:hover': { backgroundColor: '#fff', color: 'black' },
              }}
              href=""  /////////////////// Link SignUp page here ///////////////////
            >
              Sign Up
            </Button>
          </Box>

        </Toolbar>
      </AppBar>


{/* ///////////////////////////////////////////////// Hero Section //////////////////////////////////////////////////////////////*/}

      <Box sx={{
        display: 'flex',
        backgroundImage: `url('https://cdn.document360.io/eeea9cac-8c8e-412a-abaf-aa61ad022a38/Images/Documentation/Slide-1.png')`,  // Background Image 
        backgroundSize: 'cover', // Ensure the image covers the entire box
        backgroundPosition: 'center', // Center the image
        width: '100%%', // Ensure the box takes full width
        height: '90vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        {/* /////////// Hero Section description //////////*/}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <Box sx={{
              mt: { xs: '70px' },
              ml: '10px',
              flex: 1,
              color: 'black',
              display: 'flex',
              minHeight: { xs: '30vh', lg: '70vh' }  //Responsive height
            }}>
              <Container maxWidth="md">
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: { xs: '30px', lg: '49px' }  // Responsive font size
                  }} >
                  Effortless Learning with AI-Powered Flashcards
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    mt: { xs: '30px', lg: '10px' },  // Responsive margin
                    fontSize: { xs: '20px', lg: '19px' }  // Responsive font size
                  }}
                >
                  Revolutionize your study routine with our AI-generated flashcards.
                  Boost your retention and ace your exams.
                </Typography>
                <Button sx={{
                  mt: '25px',
                  border: '1px solid white',
                  borderRadius: '8px',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'blue'
                  }
                }}>
                  Get Started         {/* ///////////////////// Link Here signUp page here ////////////*/}
                </Button>
              </Container>
            </Box>

            {/* /////////// Hero Section Image //////////*/}
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box sx={{
              mt: { xs: '5 0px', lg: '80px' },
              width: { xs: '100%', lg: '560px' }
            }}>
              <Image
                src="/bg.jpg" // Path to your image in the public directory
                alt="Example Image"
                layout="responsive"  //it makes img responsive 
                width={460} // Default width to avoid the error
                height={300} // Specify the height of the image
              />
            </Box>

          </Grid>

        </Grid>

      </Box>


{/*/////////////////////////////////////////////  Features section  /////////////////////////////////////////////////////////////////////////////////////*/}

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'hsl(240, 4.8%, 95.9%)',
        pt: '1px',
        pb: '70px'
      }}>
        <Container maxWidth="lg">

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center'
          }}>
            <Typography
              variant='h4'
              sx={{
                color: '#121212',
                fontWeight: 'bold',
                mt: '100px'
              }}
            >
              Powerful Features
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#121212',
                mt: { xs: '30px', lg: '10px' },  // Responsive margin
                fontSize: { xs: '20px', lg: '19px' }  // Responsive font size
              }}
            >
              Our AI-powered flashcard generator offers a range of features <br />
              to help you study more effectively.
            </Typography>
          </Box>

          <Grid container spacing={4}>

            {/* /////////////////////////Feature 1 //////////// */}
            <Grid item xm={12} sm={6} md={4} lg={4}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                width: '100%', // Take full width of the grid item
                height: { xs: '33vh', md: '25vh', lg: '30vh' },
                color: 'black',
              }}>
                <BoltIcon sx={{
                  color: '#121212',
                  fontWeight: 'bold',
                  fontSize: { xs: '30px', md: '30px', lg: '30px' }  // Responsive icon size
                }} />
                <Typography
                  variant='h6'
                  sx={{
                    mt: '15px',
                    fontWeight: 'bold',
                    fontSize: { xs: '25px', md: '20px', lg: '20px' },  // Responsive font size
                    mb: { xs: '10px', md: '15px', lg: '20px' }  // Responsive margin-bottom
                  }}
                >
                  Instant Flashcard Generation
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '17px', md: '10px', lg: '15px' },  // Responsive font size
                  }}
                >
                  Our AI algorithm generates high-quality flashcards in seconds, saving you valuable time.
                </Typography>
              </Box>
            </Grid>

            {/* /////////////////////////Feature 2 ///////////////// */}

            <Grid item xm={12} sm={6} md={4} lg={4}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                width: '100%', // Take full width of the grid item
                height: { xs: '33vh', md: '25vh', lg: '30vh' },  //responsivenesss
                color: 'black',
              }}>
                <SettingsOutlinedIcon sx={{
                  color: '#121212',
                  fontWeight: 'bold',
                  fontSize: { xs: '30px', md: '30px', lg: '30px' }  // Responsive icon size
                }} />
                <Typography
                  variant='h6'
                  sx={{
                    mt: '15px',
                    fontWeight: 'bold',
                    fontSize: { xs: '25px', md: '20px', lg: '20px' },  // Responsive font size
                    mb: { xs: '10px', md: '15px', lg: '20px' }  // Responsive margin-bottom
                  }}
                >
                  Customizable Decks
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '17px', md: '10px', lg: '15px' },  // Responsive font size
                  }}
                >
                  Personalize your flashcard decks with custom tags, categories, and difficulty levels.
                </Typography>
              </Box>
            </Grid>

            {/* /////////////////////////Feature 3  //////////// */}
            <Grid item xm={12} sm={6} md={4} lg={4}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                width: '100%', // Take full width of the grid item
                height: { xs: '33vh', md: '25vh', lg: '30vh' },
                color: 'black',
              }}>
                <SparkleIcon sx={{
                  color: '#121212',
                  fontWeight: 'bold',
                  fontSize: { xs: '30px', md: '30px', lg: '30px' }  // Responsive icon size
                }} />
                <Typography
                  variant='h6'
                  sx={{
                    mt: '15px',
                    fontWeight: 'bold',
                    fontSize: { xs: '25px', md: '20px', lg: '20px' },  // Responsive font size
                    mb: { xs: '10px', md: '15px', lg: '20px' }  // Responsive margin-bottom
                  }}
                >
                  Spaced Repetition
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '17px', md: '10px', lg: '15px' },  // Responsive font size
                  }}
                >
                  Our intelligent algorithm ensures you review content at the optimal intervals
                  for long-term retention.
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>


{/*//////////////////////////////////// Pricing Section ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <Box sx={{
        width: '100%',
        py: { xs: 4, md: 8 } ///* Responsive padding */}
      }}>

        {/*////////// Pricing Header /////// */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          mb: { xs: 6, md: 10 }, // Adjust bottom margin for spacing
          px: { xs: 2, sm: 4, md: 6 } // Padding for text container on mobile
        }}>
          <Typography
            variant='h4'
            sx={{
              color: '#121212',
              fontWeight: 'bold',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
              mt: '20px',
            }}
          >
            Pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#121212',
              mt: { xs: '10px', lg: '15px' },  // Responsive margin
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },  // Responsive font size
              maxWidth: { xs: '100%', sm: '80%', md: '60%' } // Control width on different screens
            }}
          >
            Choose the plan that best fits your needs and start studying more effectively today.
          </Typography>
        </Box>

        {/* //////////////////// Pricing Cards /////////////*/}

        <Box sx={{
           mx: 'auto',
           maxWidth: '1200px',
            }}> {/* Centralize content with max-width */}
          <Grid container spacing={1} > {/* Adjust spacing between cards */}

            {/* ////////////////////Card 1 /////////////*/}
            <Grid item xs={12} md={6}>
              <Box sx={{
                ml:{lg:'120px'},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '8px', // Rounded corners
                backgroundColor: '#f9f9f9',
                padding: { xs: '20px', md: '30px' }, // Responsive padding
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width:{xs:'100%',lg:'70%'}
              }}>
                {/* //////Card Content/////// */}
                <Box sx={{
                  backgroundColor: 'hsl(240, 4.8%, 95.9%)',
                  padding: '20px',
                  borderRadius: '8px',
                  width: '100%',
                  mb: 2
                }}>
                  <Typography
                    variant='h4'
                    sx={{
                      color: '#121212',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}>
                    Free
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: '#121212',
                      mt: 2,
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}>
                    Get started with our free plan.
                  </Typography>
                </Box>

                {/*///////// Features List /////////// */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: 2,
                  gap: 2,
                  width: '100%'
                }}>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%'
                  }}>
                    <DoneIcon sx={{ color: '#121212' }} />
                    <Typography sx={{
                      flexGrow: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      Up to 50 flashcards
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%'
                  }}>
                    <DoneIcon sx={{ color: '#121212' }} />
                    <Typography sx={{
                      flexGrow: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      Basic customization
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%'
                  }}>
                    <DoneIcon sx={{ color: '#121212' }} />
                    <Typography sx={{
                      flexGrow: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      Spaced repetition
                    </Typography>
                  </Box>
                </Box>

                {/* ////// Button //////*/}
                <Button sx={{
                  backgroundColor: 'black',
                  mt: 3,
                  border: '1px solid white',
                  borderRadius: '8px',
                  color: 'white',
                  width: '100%',
                  padding: { xs: '10px 15px', md: '10px 20px' }, // Responsive padding
                  fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive font size
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                    borderColor: 'white'
                  }
                }}>
                  Get Started for Free   {/*////////////////// Link sign up Page Here  */}
                </Button>
              </Box>
            </Grid>

            {/* ///////////////////Card 2 //////////*/}
            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '8px', // Rounded corners
                backgroundColor: '#f9f9f9',
                padding: { xs: '20px', md: '30px' }, // Responsive padding
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                width:{xs:'100%',lg:'70%'}
              }}>

                {/*///////// Card Content ///////////////*/}
                <Box sx={{
                  backgroundColor: 'hsl(240, 4.8%, 95.9%)',
                  padding: '20px',
                  borderRadius: '8px',
                  width: '100%',
                  mb: 2
                }}>
                  <Typography
                    variant='h4'
                    sx={{
                      color: '#121212',
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', md: '2rem' }
                    }}>
                    Pro
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#121212',
                      mt: 2,
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}>
                    Unlock advanced features.
                  </Typography>
                </Box>

                {/* ///////Features List //////////*/}
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: 2,
                  gap: 2,
                  width: '100%'
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%'
                  }}>
                    <DoneIcon sx={{ color: '#121212' }} />
                    <Typography sx={{
                      flexGrow: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      Unlimited flashcards
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%'
                  }}>
                    <DoneIcon sx={{ color: '#121212' }} />
                    <Typography sx={{
                      flexGrow: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      Advanced customization
                    </Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: '100%'
                  }}>
                    <DoneIcon sx={{ color: '#121212' }} />
                    <Typography sx={{
                      flexGrow: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      Priority support And Much More
                    </Typography>
                  </Box>
                </Box>

                {/* //////////Button///////// */}
                <Button sx={{
                  backgroundColor: 'black',
                  mt: 3,
                  border: '1px solid white',
                  borderRadius: '8px',
                  color: 'white',
                  width: '100%',
                  padding: { xs: '10px 15px', md: '10px 20px' }, // Responsive padding
                  fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive font size
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'white',
                    borderColor: 'white'
                  }
                }}>
                  Upgrade to Pro                  {/*/// Link Payment Gateway Here /*/}
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Box>




{/** ////////////////////////////////////////////////////////Foooter Section //////////////////////////////////////////////////////////////// */}
      <Box
        component="footer"
        sx={{
          mt: '100px',
          display: 'flex',
          flexDirection: 'row', // Stack vertically on small screens, horizontally on larger screens
          gap: 2, // Spacing between items
          py: 3, // Padding on the top and bottom
          px: { xs: 4, md: 6 }, // Padding on the left and right, responsive
          width: '100%', // Full width
          borderTop: '1px solid #e0e0e0', // Top border
          alignItems: 'center', // Center align items vertically
          justifyContent: 'space-between', // Spread items out between left and right
        }}
      >
        {/*//////////Copyright Section ///////////*/}
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}> {/* Equivalent to text-xs */}
          &copy; 2024 FlashAI. All rights reserved.
        </Typography>

        {/* ////////////////////Navigation Links /////////////////////*/}
        <Box
          component="nav"
          sx={{
            display: 'flex',
            gap: { xs: 2, sm: 4 }, // Gap between links, responsive
          }}
        >

          {/** //////////////Terms of Service  Link//////////// */}
          <Link href="#" sx={{ fontSize: '0.75rem', color: '#121212', textDecoration: 'none' }}> {/* Hover underline, small text */}
            Terms of Service
          </Link>

          {/** //////////////Privacy  Link//////////// */}
          <Link href="#" sx={{ fontSize: '0.75rem', color: '#121212', textDecoration: 'none' }}>
            Privacy
          </Link>

          {/** //////////////Contact Link//////////// */}
          <Link href="#" sx={{ fontSize: '0.75rem', color: '#121212', textDecoration: 'none' }}>
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
