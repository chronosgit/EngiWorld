import SearchIcon from '@mui/icons-material/Search';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Box, Typography, Link, Grid } from '@mui/material';

import NavigationLink from '../NavigationLink/NavigationLink';
import SocialLink from '../SocialLink/SocialLink';

function Header() {
    return (
        <Grid
            container
            component="header" 
            justifyContent="space-between"
            alignItems="center"
            sx={{
                p: "1rem 2rem",
                borderBottom: "1px black solid",
                borderColor: "gray",
            }}
        >
            <Grid item component="nav" xs={10} sm={8} md={6}>
                <Box 
                    component="nav" 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box 
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.5rem",
                        }}
                    >
                        <img 
                            src="/images/logo-40x40.png" 
                            alt="logo" 
                            style={{
                                width: "2rem",
                                height: "2rem",
                            }}  
                        />

                        <Typography
                            paragraph
                            sx={{
                                m: 0,
                                fontSize: "1.2rem",
                                fontWeight: "900",
                                letterSpacing: 3,
                                textTransform: "uppercase",
                            }}
                        >
                            Engi<span className="yellow">World</span>
                        </Typography>
                    </Box>

                    <NavigationLink content="Home" hasLine destination="/" />        

                    <NavigationLink content="About" hasLine destination="/about" />

                    <NavigationLink content="Contact" hasLine destination="/contact" />

                    <NavigationLink content="NotFound(Temporary)" destination="/fsaass" />
                </Box>
            </Grid>

            <Grid item xs={2} sm={4} md={6}>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "2rem",
                    }}
                >
                    <SearchIcon 
                        sx={{
                            opacity: 0.8,
                            cursor: "pointer",
                            "&:hover": {
                                opacity: 1,
                            }
                        }}
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "0.8rem",
                        }}
                    >
                        <SocialLink destination="https://www.facebook.com/" icon={<FacebookRoundedIcon />} />
                        
                        <SocialLink destination="https://twitter.com/" icon={<TwitterIcon />} />
                        
                        <SocialLink destination="https://www.instagram.com/" icon={<InstagramIcon />} />
                        
                        <SocialLink destination="mailto:dummymailunreal@example.com" icon={<EmailRoundedIcon />} />
                    </Box>

                    <Link 
                        href="/"
                        underline="none"
                        sx={{
                            position: "relative",
                            fontSize: "0.8rem",
                            color: "var(--mainColor)",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            cursor: "pointer",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: 0,
                                height: "4px",
                                textAlign: "center",
                                margin: "0 auto",
                                backgroundColor: "red",
                                transition: "all 0.3s ease",
                            },
                            "&:hover": {
                                "&::before": {
                                    width: 1
                                },
                            }
                        }}
                    >
                        Sign In
                    </Link>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Header;