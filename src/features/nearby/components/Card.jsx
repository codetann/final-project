import React, { useState } from "react";
import { SimpleGrid, VStack, HStack, SlideFade } from "@chakra-ui/react";
import { Button, IconButton } from "../../../components/Elements";
import { FaHeart, FaRegHeart, FaPhone } from "react-icons/fa";
import { Business } from "../../../components/Business";
import { useFavorites } from "../../favorites/hooks/useFavorites";

export function Card({ business }) {
  const { favorites, onFavorite } = useFavorites();
  const onToggle = () => {
    onFavorite(isFavorite, business);
  };

  const isFavorite = favorites?.find((f) => f.yelp_id === business.yelp_id);

  const Favorite = () => {
    return (
      <>
        <SlideFade in={!isFavorite} unmountOnExit>
          <FaRegHeart />
        </SlideFade>
        <SlideFade in={isFavorite} unmountOnExit>
          <FaHeart />
        </SlideFade>
      </>
    );
  };

  return (
    <VStack spacing="2rem" p={["2rem 0", "2rem"]} zIndex="1">
      <Business business={business} />
      <HStack w="100%">
        <Button isFull text="Directions" />
        <IconButton icon={<FaPhone />} color="blue.400" />

        <IconButton icon={<Favorite />} color="red.400" onClick={onToggle} />
      </HStack>
    </VStack>
  );
}
