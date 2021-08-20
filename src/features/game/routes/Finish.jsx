import React from "react";
import { ResultsTable } from "../components/ResultsTable";
import { useLocation } from "react-router-dom";
import { FadeTransition } from "../../../components/Animations";

export function Finish() {
  const location = useLocation();

  return (
    <FadeTransition>
      <ResultsTable results={location.state.results} />
    </FadeTransition>
  );
}
