import * as React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, ButtonGroup, Container } from "@chakra-ui/react";

export default function Welcome(){
    return (
      <Container id="welcome-container">
        <h1>Welcome!</h1>
        <Link to="/login">
          {" "}
          <Button
            style={{ margin: "15px 0px", padding: "auto" }}
            colorScheme="orange"
          >
            Login
          </Button>
        </Link>

        <Link to="/signup">
          {" "}
          <Button colorScheme="orange">Signup</Button>
        </Link>
      </Container>
    );
}