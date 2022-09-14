import * as React from "react";
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

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      >
        Login
      </Button>
    </Container>
  );
}
