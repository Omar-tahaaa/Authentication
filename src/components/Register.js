import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../pages/UserSlice";
import { useNavigate } from "react-router-dom";
import {Container , Button , TextField , Typography , Box } from "@mui/material";

export default function Register() {
  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const {loading , errorRegister} = useSelector(state => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()

    let userCreditionals = {
      username , email , password 
    }

      dispatch(registerUser(userCreditionals)).then((result) =>{
        if (result.payload) {
          navigate('/login')
        }}
      )
  }

  return (
    <Container component="main" maxWidth="xs">
    <Box
      sx={{  
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="Username"
          autoComplete="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? 'loading...' : 'Register'}
        </Button>
        <Typography component="h1" variant="h5" align="center">
        {errorRegister != null && errorRegister}
      </Typography>
      </Box>
    </Box>
  </Container>
  );
}