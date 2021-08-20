import React, { useState } from "react";
import { SimpleGrid, VStack, HStack, SlideFade } from "@chakra-ui/react";
import { Button, IconButton } from "../../../components/Elements";
import { FaHeart, FaRegHeart, FaPhone } from "react-icons/fa";
import { Business } from "../../../components/Business";
import { useFavorites } from "../hooks/useFavorites";

export function Card({ business }) {
  const { onFavorite } = useFavorites();
  const onToggle = () => {
    onFavorite(true, business);
  };

  // const Favorite = () => {
  //   return (
  //     <>
  //       {/* <SlideFade in={!isToggle} unmountOnExit>
  //         <FaRegHeart />
  //       </SlideFade> */}
  //       <SlideFade in={true} unmountOnExit>
  //         <FaHeart />
  //       </SlideFade>
  //     </>
  //   );
  // };

  return (
    <VStack spacing="2rem" p={["2rem 0", "2rem"]}>
      <Business business={business} />
      <HStack w="100%">
        <Button isFull text="Directions" />
        <IconButton icon={<FaPhone />} color="blue.400" />

        <IconButton icon={<FaHeart />} color="red.400" onClick={onToggle} />
      </HStack>
    </VStack>
  );
}
