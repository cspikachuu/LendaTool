import * as React from "react"
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button
} from '@chakra-ui/react'

export default function SignUp() {
  return (
    <>
      <div id="signup-container">
        <h1> Signup </h1>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input id="first-name" type="text"/>
          <FormLabel>Last Name</FormLabel>
          <Input id="last-name" type="text"/>
          <FormLabel>Email</FormLabel>
          <Input id="email" type="email"/>
          <FormLabel>Username</FormLabel>
          <Input id="username" type="text"/>
          <FormLabel>Password</FormLabel>
          <Input id="password" type="text"/>
        </FormControl>
        <Button style={{margin: '25px 0px', padding: 'auto'}} colorScheme="orange">Submit</Button>
      </div>
    </>
  )
}