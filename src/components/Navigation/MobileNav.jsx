import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  IconButton,
  HStack,
  VStack,
  useDisclosure,
  Button,
  Spacer,
  Collapse,
  Divider,
  Avatar,
  Heading,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Logo } from "../Elements/Logo";
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { NavLink } from "./NavLink";
import { useAuth } from "../../lib/auth";

// there is a bug when applying spacing to the (VStack) when the collapse transition fires

const Links = [
  { id: 1, text: "Home ", path: "/dashboard" },
  { id: 2, text: "Nearby", path: "/nearby" },
  { id: 3, text: "Favorites", path: "/favorites" },
];

export default function MobileNav() {
  const { user, logout } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("white", "#171C27");

  return (
    <VStack
      zIndex="10"
      overflow="hidden"
      shadow="md"
      pos="fixed"
      top="0"
      bg={bg}
      w="100%"
      padding="0 1rem 1rem 1rem"
      spacing="0"
    >
      {/* Nav Bar */}
      <HStack w="100%" paddingTop="1rem" zIndex="10">
        <Logo />
        <Spacer />
        {isOpen && (
          <IconButton
            onClick={onToggle}
            fontSize="20px"
            bg="none"
            icon={<SmallCloseIcon />}
          />
        )}
        {!isOpen && (
          <IconButton
            onClick={onToggle}
            fontSize="20px"
            bg="none"
            icon={<HamburgerIcon />}
          />
        )}
      </HStack>

      {/* Nav Links */}
      <Collapse in={isOpen} zIndex="10">
        <VStack
          w="100vw"
          padding="1rem"
          spacing="1rem"
          zIndex="10"
          borderRadius="2rem"
        >
          <VStack w="100%" zIndex="10">
            {Links.map((link) => (
              <NavLink
                key={link.id}
                link={link}
                location={location}
                history={history}
              />
            ))}
          </VStack>

          <Divider />

          {/* Profile Info */}
          <VStack w="100%" zIndex="10">
            <HStack width="100%" justify="left" spacing="1rem">
              <Avatar size="sm" src={user.photo} />
              <VStack align="left" spacing=".2rem">
                <Heading size="sm">{user.name}</Heading>
                <Text fontSize="12px">{user.email}</Text>
              </VStack>
            </HStack>

            <Button
              variant="ghost"
              display="flex"
              w="100%"
              alignItems="center"
              justifyContent="flex-start"
            >
              Profile
            </Button>
            <Button
              variant="ghost"
              display="flex"
              w="100%"
              alignItems="center"
              justifyContent="flex-start"
            >
              Settings
            </Button>
            <Button
              display="flex"
              w="100%"
              variant="ghost"
              colorScheme="red"
              alignItems="center"
              justifyContent="flex-start"
              onClick={logout}
            >
              Sign Out
            </Button>
          </VStack>
        </VStack>
        <Box
          h="100vh"
          w="100vw"
          position="fixed"
          bg="blackAlpha.800"
          backdropFilter="blur(2px)"
        ></Box>
      </Collapse>
    </VStack>
  );
}
