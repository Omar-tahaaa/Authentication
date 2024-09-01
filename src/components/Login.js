import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../pages/UserSlice";
import { useNavigate } from "react-router-dom";
import {Container , Button , TextField , Typography , Box } from "@mui/material";

export default function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const {loading , errorLogin} = useSelector(state => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()

    let userCreditionals = {
      email , password
    }

      dispatch(loginUser(userCreditionals)).then((result) =>{
        if (result.payload) {
          navigate('/')
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
        Log In
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          {loading ? 'loading...' : 'Log In'}
        </Button>
        <Typography component="h1" variant="h5" align="center">
        {errorLogin != null && errorLogin}
      </Typography>
      </Box>
    </Box>
  </Container>
  );
}
