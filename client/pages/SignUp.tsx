import * as React from "react"
import { useParams, useNavigate } from 'react-router-dom';

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button
} from '@chakra-ui/react'

export default function SignUp() {
  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function signup(){
    //add route '/user'
    const data = await fetch("/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, firstname, lastname }),
    })
      .then((resp) => resp.json())
      .catch((err) => console.log("error in /auth/login"));
    if(data) navigate("/login", { replace: true })
    else console.log('signup failed, try again')
  }



  return (
    <>
      <div id="signup-container">
        <h1> Signup </h1>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input id="first-name" type="text" onChange={e => { setFirstName(e.target.value) }}/>
          <FormLabel>Last Name</FormLabel>
          <Input id="last-name" type="text" onChange={e => { setLastName(e.target.value) }}/>
          <FormLabel>Username</FormLabel>
          <Input id="username" type="text" onChange={e => { setUsername(e.target.value) }}/>
          <FormLabel>Password</FormLabel>
          <Input id="password" type="text" onChange={e => { setPassword(e.target.value) }}/>
        </FormControl>
        <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange" onClick={(event)=> signup()}>Submit</Button>
      </div>
    </>
  )
}