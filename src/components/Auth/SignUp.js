import {Link,Container,Typography,IconButton,Button,
    FormControl,InputAdornment,InputLabel,OutlinedInput} from '@mui/material';
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { red } from '@mui/material/colors';

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowCPassword = () => setShowCPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,30}$/;
    const EMAIL_REGEX = /^[A-z]([A-z0-9-_])*\@[A-z]([A-z0-9-_])*\.[A-z]([A-z0-9-_])*$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}$/;

    const [email,setEmail] = useState('');
    const [validEmail,setValidEmail] = useState(false);

    const [uName,setUName] = useState('');
    const [validUName,setValidUName] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd,setValidPwd] = useState(false);

    const [mPwd,setMPwd] = useState('');
    const [validMPwd,setValidMPwd] = useState(false);

    /*const CSSFormControl = styled(FormControl)`
        & label.Mui-focused {
            color: red;
        }
        & .MuiOutlinedInput-root {
            &.Mui-focused fieldset {
            border-color: red;
            }
        }
        `;*/

    useEffect(() => {
        const result = USER_REGEX.test(uName);
        setValidUName(result);
    }, [uName])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test([pwd]);
        setValidPwd(result);
        const match = pwd === mPwd;
        setValidMPwd(match);
    }, [pwd,mPwd]);
    return(
        <Container 
            maxWidth="md" 
            sx={{
                my: "6rem",
                textAlign: "center",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Typography 
                align="center"
                component="h1"
                sx={{
                    m: "2rem",
                    fontSize: "2rem",
                    fontWeight: "600"
                }}
            >
                Sign Up
            </Typography>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" className={validEmail?"Input":"InvalidInput"}>
                <InputLabel htmlFor="outlined-email">Email</InputLabel>
                <OutlinedInput
                    id="outlined-email"
                    type="text"
                    label="Email"
                    required
                    inputProps={{maxLength:30}}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <Typography 
                    align="center"
                    component="h4"
                    sx={{
                        color: 'red',
                        fontWeight: "600"
                    }}
                >
                    {!validEmail&&email?"Provided address is not in the proper email format.":""}
                </Typography>
            </FormControl>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" className={validUName?"Input":"InvalidInput"}>
                <InputLabel htmlFor="outlined-uname">Username</InputLabel>
                <OutlinedInput
                    id="outlined-uname"
                    type="text"
                    label="Username"
                    inputProps={{maxLength:30}}
                    onChange={(e)=>{setUName(e.target.value)}}
                    required
                />
                <Typography 
                    align="center"
                    component="h4"
                    sx={{
                        color: 'red',
                        fontWeight: "600"
                    }}
                >
                    {!validUName&&uName?"Your username must start with a letter and consist of 3 to 30 symbols":""}
                </Typography>
            </FormControl>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" className={validPwd?"Input":"InvalidInput"}>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    inputProps={{maxLength:30}}
                    onChange={(e)=>{setPwd(e.target.value)}}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                <Typography 
                    align="center"
                    component="h4"
                    sx={{
                        color: 'red',
                        fontWeight: "600"
                    }}
                >
                    {!validPwd&&pwd?"Your password must contain at least 8 symbols, including lowercase and uppercase letters, numbers and special symbols.":""}
                </Typography>
            </FormControl>
            <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined" className={validMPwd?"Input":"InvalidInput"}>
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showCPassword ? 'text' : 'password'}
                    required
                    inputProps={{maxLength:30}}
                    onChange={(e)=>{setMPwd(e.target.value)}}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        onClick={handleClickShowCPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showCPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Confirm Password"
                />
                <Typography 
                    align="center"
                    component="h4"
                    sx={{
                        color: 'red',
                        fontWeight: "600"
                    }}
                >
                    {!validMPwd&&mPwd?"Passwords don't match.":""}
                </Typography>
            </FormControl>
            <FormControl sx={{
                m: 1,
                width: '30ch',
                backgroundColor: "var(--secondaryColor)",
                color: "var(--mainColor)",
                borderRadius: 0,
                transition: 'all 50ms cubic-bezier(0.4, 0, 0.2, 1) 50ms',
                "&:hover": {
                    backgroundColor: "var(--mainColor)",
                    color: "var(--secondaryColor)",
                    opacity: "0.9",
                }}}>
                <Button sx={{color:'inherit'}}>
                    Sign up
                </Button>
            </FormControl>
            <span>Already have an account? <Link href="/signin">Log in here</Link></span>
        </Container>
    );
}

export default SignUp;