import React from "react";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import { FadeTransition } from "../../../components/Animations";
import { useNearby } from "../hooks/useNearby";
import { Card } from "../components/Card";

export function Nearby() {
  const { nearby } = useNearby();

  return (
    <FadeTransition>
      <Heading>Nearby</Heading>
      {nearby && (
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={"2rem"}>
          {nearby.map((b, i) => (
            <Card key={i} business={b} />
          ))}
        </SimpleGrid>
      )}
    </FadeTransition>
  );
}
