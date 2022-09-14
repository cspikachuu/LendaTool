import * as React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
  Square,
  Container
} from "@chakra-ui/react";
import { useSelector } from 'react-redux'


export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const userInfo = useSelector((state) => state.markets.userInfo);
  const navigate = useNavigate();

  async function login(){
      // const data = await fetch('/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username: username, password: password })
      // }).then(resp => resp.json())
      //   .catch(err => console.log('error in /auth/login'))

      // if (data === null) {
      //   //tell user that login credentials were wrong
      //   console.log('invalid credentials')
      // } else {

      //   GetUserInfo(data);//updates our global state
      //   navigate("/profile", { replace: true }) //navigates to profile if login was successful
      // }
       console.log(userInfo)

  }



  return (
    <Container id="login-container">
      <div style={{ margin: "25px 0px", padding: "auto" }}> Login </div>
      <FormControl isRequired color="black">
        <FormLabel>Username</FormLabel>
        <Input id="username" type="text" onChange={e => { setUsername(e.target.value) }} />
        <FormLabel>Password</FormLabel>
        <Input id="password" type="text" onChange={e => { setPassword(e.target.value) }} />
      </FormControl>
      <Button
        style={{ margin: "25px 0px", padding: "auto" }}
        colorScheme="orange"
        onClick={(e) => login()}
      >
        Login
      </Button>
    </Container>
  );
}
