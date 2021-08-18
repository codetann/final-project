import React from "react";
import { FadeTransition } from "../../../components/Animations/FadeTransition";
import { PinInput, Button } from "../../../components/Elements";
import { Heading, VStack } from "@chakra-ui/react";
import { useInput } from "../../../hooks";
import { Form } from "../../../components/Form/Form";
import { useSockets } from "../../../lib/sockets";
import { useAuth } from "../../../lib/auth";

export function Join() {
  const [pin, updatePin] = useInput("");
  const { user } = useAuth();
  const { emit } = useSockets();

  const handleSubmit = (e) => {
    e.preventDefault();

    emit("join-room", { room: pin, name: user.name });
  };

  return (
    <FadeTransition>
      <Heading mb="2rem">Enter a room number</Heading>
      <Form>
        <PinInput onChange={updatePin} />
        <Button type="submit" text="Join" isFull onSubmit={handleSubmit} />
      </Form>
    </FadeTransition>
  );
}
