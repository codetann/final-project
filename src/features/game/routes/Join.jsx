import React from "react";
import { FadeTransition } from "../../../components/Animations/FadeTransition";
import { PinInput, Button } from "../../../components/Elements";
import { Heading, VStack } from "@chakra-ui/react";
import { useInput, useNotification } from "../../../hooks";
import { Form } from "../../../components/Form/Form";
import { useSockets } from "../../../lib/sockets";
import { useAuth } from "../../../lib/auth";
import { useHistory } from "react-router-dom";

export function Join() {
  const [pin, updatePin] = useInput("");
  const { user } = useAuth();
  const { notify } = useNotification();
  const history = useHistory();
  const { emit, on, joinRoom, updateRoom } = useSockets();

  const handleSubmit = (e) => {
    e.preventDefault();

    emit("join-room", { room: pin, name: user.name });
    on("success:join-room", (data) => {
      joinRoom(data);
      history.push("/waiting");
    });
  };

  return (
    <FadeTransition>
      <Heading mb="2rem">Enter a room number</Heading>
      <Form onSubmit={handleSubmit}>
        <PinInput onChange={updatePin} />
        <Button type="submit" text="Join" isFull onSubmit={handleSubmit} />
      </Form>
    </FadeTransition>
  );
}
