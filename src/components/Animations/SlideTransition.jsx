import React, { useEffect, useState } from "react";
import { Fade } from "@chakra-ui/transition";

export function SlideTransition({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <Fade
      in={mounted}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Fade>
  );
}
