import React, { useEffect } from "react";
import { VStack, Heading, Spinner } from "@chakra-ui/react";
import { FadeTransition } from "../../../components/Animations";
import { Business } from "../../../components/Business";
import { IconButton } from "../../../components/Elements";
import { LayoutButtons } from "../components/LayoutButtons";
import { CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { useGame } from "../hooks/useGame";
import { useHistory } from "react-router-dom";
import { useSockets } from "../../../lib/sockets";

export function Game() {
  const { answers, onYes, onNo, business, isFinished, businesses } = useGame();
  const history = useHistory();
  const { on, emit, room } = useSockets();

  // runs when user has answered all questions
  useEffect(() => {
    if (isFinished) {
      // send answers to server
      emit("end-room", { details: businesses, room, answers });
      // runs when every member has submitted their answers
      on("new:end-room", (data) => {
        history.push({
          pathname: "/finish",
          state: {
            results: data.results,
          },
        });
      });
    }
  }, [isFinished]);

  return (
    <FadeTransition>
      {!isFinished && (
        <>
          <Business business={business} />
          <LayoutButtons>
            <IconButton
              size="lg"
              colorScheme="red"
              icon={<CloseIcon />}
              onClick={onNo}
            />
            <IconButton
              size="lg"
              colorScheme="green"
              icon={<CheckIcon />}
              onClick={onYes}
            />
          </LayoutButtons>
        </>
      )}

      {/* mounts when user is finished and waiting for all other players */}
      {isFinished && (
        <FadeTransition>
          <VStack w="100%" spacing="2rem">
            <Heading textAlign="center">
              Waiting for other players to finish
            </Heading>
            <Spinner color="purple.400" speed="1s" size="md" />
          </VStack>
        </FadeTransition>
      )}
    </FadeTransition>
  );
}
