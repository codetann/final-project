import { Layout } from "./Layout";
import React, { useEffect } from "react";
import { useInput, useForm, useToggle } from "../../../hooks";
import { useAuth } from "../../../lib/auth";
import { Logo } from "../../../components/Elements";
import { Button, Switch } from "../../../components/Elements";
import { Form, FormInput, FormRow } from "../../../components/Form";
import { Heading, Text, HStack, VStack } from "@chakra-ui/react";

export default function RegisterForm() {
  const [first, updateFirst] = useInput("");
  const [last, updateLast] = useInput("");
  const [email, updateEmail] = useInput("");
  const [password, updatePassword] = useInput("");
  const [confirm, updateConfirm] = useInput("");
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) return;
    register({ name: `${first} ${last}`, email, password });
  };

  return (
    <Layout>
      <Logo />
      <VStack>
        <Heading textAlign="center">Sign up for a free account</Heading>
        <HStack spacing=".4rem">
          <Text>already have an account?</Text>
          <Text cursor="pointer" color="purple.600">
            Login
          </Text>
        </HStack>
      </VStack>

      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FormInput
            type="text"
            label="First"
            isRequired
            onChange={updateFirst}
          />
          <FormInput
            type="text"
            label="Last"
            isRequired
            onChange={updateLast}
          />
        </FormRow>
        <FormInput
          type="email"
          label="Email"
          isRequired
          onChange={updateEmail}
        />
        <FormInput
          type="password"
          label="Password"
          isRequired
          onChange={updatePassword}
        />
        <FormInput
          type="password"
          label="Confirm Password"
          isRequired
          onChange={updateConfirm}
        />
        <HStack w="100%" spacing="1rem">
          <Switch isRequired colorScheme="purple" />
          <Text size="xs">
            By Selecting this, you agree to the Privacy Policy and Cookie Policy
          </Text>
        </HStack>

        <Button type="submit" isFull text="Signup" />
      </Form>
    </Layout>
  );
}
