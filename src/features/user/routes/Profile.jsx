import React, { useEffect } from "react";
import { Form, FormInput } from "../../../components/Form";
import { useInput } from "../../../hooks";
import { useAuth } from "../../../lib/auth";
import { FadeTransition } from "../../../components/Animations/FadeTransition";
import { useForm } from "../hooks/useForm";
import { PhotoInput } from "../components/PhotoInput";
import { Button } from "../../../components/Elements";
import { useUpdate } from "../../../lib/update";

export function Profile() {
  const { user } = useAuth();
  const { isDisabled, submit, validateValues } = useForm();
  const [name, updateName] = useInput(user.name);
  const [email, updateEmail] = useInput(user.email);
  const [photo, updatePhoto] = useInput(user.photo);

  useEffect(() => {
    validateValues(name, email, photo, user);
  }, [name, email, photo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({ name, email, photo }, user);
  };

  return (
    <FadeTransition>
      <Form onSubmit={handleSubmit}>
        <FormInput label="Name" onChange={updateName} value={name} />
        <FormInput label="Email" onChange={updateEmail} value={email} />
        <PhotoInput photo={photo} onChange={updatePhoto} />
        <Button type="submit" isFull isDisabled={isDisabled} text="Save" />
      </Form>
    </FadeTransition>
  );
}
