import React from "react";
import { Heading, VStack, HStack, Tag } from "@chakra-ui/react";
import { Button } from "../../../components/Elements";
import { Members } from "./Members";
import { useSockets } from "../../../lib/sockets";
import { useAuth } from "../../../lib/auth";
import { useHistory } from "react-router-dom";

export function MemberView({ members }) {
  const { emit, socketId, on, leaveRoom, room } = useSockets();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!socketId) return history.push("/dashboard");

    emit("leave-room", { socket_id: socketId, room });
    on("success:leave-room", () => {
      leaveRoom();
      history.push("/dashboard");
    });
  };

  return (
    <VStack maxW="xl" width="100%" spacing="2rem">
      <Heading textAlign="center">Waiting for members to join</Heading>

      {/* members */}
      <Members members={members} />

      {/* buttons */}
      <HStack w="100%" maxW="md">
        <Button
          colorScheme="red"
          variant="ghost"
          isFull
          text="Leave"
          onClick={handleSubmit}
        />
      </HStack>
    </VStack>
  );
}
