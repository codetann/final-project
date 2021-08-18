import React from "react";
import { Heading } from "@chakra-ui/react";
import { FadeTransition } from "../../../components/Animations/FadeTransition";
import { Form } from "../../../components/Form";
import {
  NumberInput,
  SliderInput,
  PriceInput,
  Button,
} from "../../../components/Elements";
import { useInput } from "../../../hooks";

export function Create() {
  const [limit, updateLimit] = useInput("");
  const [distance, updateDistance] = useInput("");
  const [price, updatePrice] = useInput(1234); // special input. Needs initial 1234 value

  return (
    <FadeTransition>
      <Heading mb="2rem">Customize Settings</Heading>
      <Form>
        <NumberInput label="Number of results" isFull onChange={updateLimit} />
        <SliderInput label="Max distance (miles)" onChange={updateDistance} />
        <PriceInput
          label="Filter by price"
          onChange={updatePrice}
          value={price}
        />
        <Button type="submit" isFull text="Create" />
      </Form>
    </FadeTransition>
  );
}
