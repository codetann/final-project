import React from "react";
import { Heading, VStack, HStack, Tag } from "@chakra-ui/react";
import { Button } from "../../../components/Elements";
import { Members } from "./Members";
import { useSockets } from "../../../lib/sockets";
import { useHistory } from "react-router-dom";

export function AdminView({ members }) {
  const { emit, on, quitRoom, socketId, room, details, startGame } =
    useSockets();
  const history = useHistory();

  const handleQuit = (e) => {
    e.preventDefault();

    emit("quit-room", { socket_id: socketId, room });
    on("success:quit-room", () => {
      quitRoom();
      history.push("/dashboard");
    });
  };

  const handleStart = (e) => {
    e.preventDefault();

    emit("start-room", { details, room });
    on("new:start-room", (data) => {
      startGame(data);
      history.push("/game");
    });
  };
  return (
    <VStack maxW="xl" width="100%" spacing="2rem">
      {/* room info */}
      <HStack>
        <Heading size="md">Invite Code:</Heading>
        <Tag size="lg" variant="solid" colorScheme="purple">
          {room}
        </Tag>
      </HStack>

      <Heading textAlign="center">Waiting for members to join</Heading>

      {/* members */}
      <Members members={members} />

      {/* buttons */}
      <HStack w="100%" maxW="md">
        <Button
          colorScheme="red"
          variant="ghost"
          isFull
          text="Quit"
          onClick={handleQuit}
        />
        <Button variant="solid" isFull text="Start" onClick={handleStart} />
      </HStack>
    </VStack>
  );
}
