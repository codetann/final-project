import React from "react";
import { Heading } from "@chakra-ui/react";
import { FadeTransition } from "../../../components/Animations/FadeTransition";
import { Form } from "../../../components/Form";
import {
  NumberInput,
  SliderInput,
  PriceInput,
  Button,
} from "../../../components/Elements";
import { useInput } from "../../../hooks";
import { useSockets } from "../../../lib/sockets";
import { useAuth } from "../../../lib/auth";
import { useHistory } from "react-router-dom";

export function Create() {
  const [limit, updateLimit] = useInput("");
  const [distance, updateDistance] = useInput("");
  const [price, updatePrice] = useInput([1, 2, 3, 4]); // special input. Needs initial [1234] value
  const { user } = useAuth();
  const { emit, on, createRoom, updateRoom } = useSockets();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // emit and send user info to create room
    emit("create-room", { name: user.name });
    // set admin info for game
    on("success:create-room", (data) => {
      createRoom({
        details: { limit, distance, price },
        room: data.room,
        members: data.members,
      });
      history.push("/waiting");
    });
  };

  return (
    <FadeTransition>
      <Heading mb="2rem">Customize Settings</Heading>
      <Form onSubmit={handleSubmit}>
        <NumberInput
          label="Number of results"
          isFull
          onChange={updateLimit}
          max="20"
        />
        <SliderInput label="Max distance (miles)" onChange={updateDistance} />
        <PriceInput
          label="Filter by price"
          onChange={updatePrice}
          value={price}
        />
        <Button type="submit" isFull text="Create" />
      </Form>
    </FadeTransition>
  );
}
