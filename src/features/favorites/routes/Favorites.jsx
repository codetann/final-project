import React from "react";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import { FadeTransition } from "../../../components/Animations";
import { Card } from "../components/Card";
import { useFavorites } from "../hooks/useFavorites";

export function Favorites() {
  const { favorites } = useFavorites();

  return (
    <FadeTransition>
      <Heading pb="2rem">Favorites</Heading>
      {(!favorites || favorites?.length < 1) && <div>No favorites found</div>}
      {favorites && (
        <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={"2rem"}>
          {favorites.map((b, i) => (
            <Card key={i} business={b} />
          ))}
        </SimpleGrid>
      )}
    </FadeTransition>
  );
}
