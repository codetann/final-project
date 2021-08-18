import React from "react";
import { FormLayout } from "./FormLayout";
import { FieldLayout } from "./FieldLayout";

export function Form({ children, onSubmit }) {
  return (
    <FormLayout>
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <FieldLayout>{children}</FieldLayout>
      </form>
    </FormLayout>
  );
}
