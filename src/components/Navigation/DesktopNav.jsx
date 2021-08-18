import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  HStack,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { useAuth } from "../../lib/auth";
import { Logo } from "../Elements/Logo";

const Links = [
  { id: 1, text: "Home ", path: "/dashboard" },
  { id: 2, text: "Nearby", path: "/nearby" },
  { id: 3, text: "Favorites", path: "/favorites" },
];

export default function DesktopNav() {
  const history = useHistory();
  const location = useLocation();
  const { user, logout } = useAuth();
  const bg = useColorModeValue("white", "blackAlpha.100");

  return (
    <HStack
      w="100%"
      spacing="2rem"
      shadow="md"
      position="fixed"
      top="0"
      p="1rem"
      bg={bg}
    >
      <Logo />
      {/* Nav Links */}
      <HStack>
        {Links.map((link) => (
          <NavLink
            key={link.id}
            link={link}
            location={location}
            history={history}
          />
        ))}
      </HStack>
      <Spacer />
      {/* Profile */}
      <Menu>
        <MenuButton>
          <Avatar size="sm" src={user.photo} />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem color="red.400" fontWeight="bold" onClick={logout}>
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
