import React from "react";
import { Button, useBreakpointValue } from "@chakra-ui/react";

export const NavLink = ({ link, location, history, onClick }) => {
  const active = link.path === location.pathname;
  const type = useBreakpointValue({ base: "mobile", md: "desktop" });
  const handleClick = () => {
    onClick();
    history.push(link.path);
  };

  return (
    <>
      {type === "mobile" && (
        <Button
          variant={active ? "solid" : "ghost"}
          colorScheme="purple"
          display="flex"
          w={type === "mobile" ? "100%" : "auto"}
          alignItems="center"
          justifyContent="flex-start"
          id={link.path}
          onClick={handleClick}
        >
          {link.text}
        </Button>
      )}

      {type === "desktop" && (
        <Button
          variant={active ? "solid" : "ghost"}
          colorScheme="purple"
          id={link.path}
          onClick={handleClick}
        >
          {link.text}
        </Button>
      )}
    </>
  );
};
