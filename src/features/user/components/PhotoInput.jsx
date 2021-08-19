import React, { useRef, useState } from "react";
import { Button } from "../../../components/Elements";
import { HStack, Avatar } from "@chakra-ui/react";

export function PhotoInput({ onChange, photo }) {
  // hooks
  const inputRef = useRef(null);
  const [placeholder, setPlaceholder] = useState("");

  // input is not visible to user but will fire when button is clicked
  const handleInputClick = () => inputRef.current.click();

  // fires when user selects a new profile photo
  const handleChange = (e) => {
    const file = e.target.files[0];
    // set placeholder to local file
    setPlaceholder(URL.createObjectURL(file));
    // set file on change
    onChange(file);
  };

  return (
    <HStack w="100%">
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <Avatar src={placeholder || photo} />
      <Button onClick={handleInputClick} text="Change" />
    </HStack>
  );
}
