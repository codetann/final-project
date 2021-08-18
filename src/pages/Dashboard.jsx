import React from "react";
import { VStack } from "@chakra-ui/layout";
import { Button } from "../components/Elements/Button";
import { FadeTransition } from "../components/Animations/FadeTransition";
import { useHistory } from "react-router-dom";

export function Dashboard() {
  const history = useHistory();

  return (
    <FadeTransition>
      <VStack w="100%" maxW="md">
        <Button
          text="Create Room"
          isFull
          onClick={() => history.push("/create")}
        />
        <Button
          text="Join Friends"
          isFull
          onClick={() => history.push("/join")}
        />
      </VStack>
    </FadeTransition>
  );
}
