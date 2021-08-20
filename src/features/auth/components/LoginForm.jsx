import { Layout } from "./Layout";
import React, { useEffect } from "react";
import { useInput } from "../../../hooks";
import { useAuth } from "../../../lib/auth";
import useButton from "../../../hooks/useButton";
import { Logo } from "../../../components/Elements";
import { Button } from "../../../components/Elements";
import { Form, FormInput } from "../../../components/Form";
import { Heading, Text, HStack, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../hooks";
import { FadeTransition } from "../../../components/Animations";

export default function LoginForm() {
  const { login } = useAuth();
  const history = useHistory();
  const [email, updateEmail] = useInput("");
  const [password, updatePassword] = useInput("");
  const { isDisabled, validateValues } = useForm(false);

  useEffect(() => {
    validateValues({ email, password });
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Layout>
      <FadeTransition>
        <Logo />
        <VStack mb="2rem">
          <Heading>Login to your account</Heading>
          <HStack spacing=".4rem">
            <Text>or</Text>
            <Text
              color="purple.300"
              cursor="pointer"
              onClick={() => history.push("/register")}
            >
              create an account
            </Text>
          </HStack>
        </VStack>

        <Form onSubmit={handleSubmit}>
          <FormInput type="email" label="Email" onChange={updateEmail} />
          <FormInput
            type="password"
            label="Password"
            onChange={updatePassword}
          />
          <Button text="Login" type="submit" isFull isDisabled={isDisabled} />
        </Form>
      </FadeTransition>
    </Layout>
  );
}
