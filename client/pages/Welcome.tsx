import React, { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, ButtonGroup, Container } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import * as actions from "../actions/actions"

export default function Welcome(){
  const navigate = useNavigate();
  async function getPublicListings() {
    try{
      // const publicListings = await fetch('/tools');
      // const parsedPublicListings = await publicListings.json();
      // const dispatch = useDispatch();
      // dispatch(actions.GetPublicListing(parsedPublicListings));

      const sessionStatus = await fetch('/hasCookie');
      const parsedSessionStatus = await sessionStatus.json();
      if (parsedSessionStatus) navigate('/market')
      else console.log('not authed yet')
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {getPublicListings()},[]);

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