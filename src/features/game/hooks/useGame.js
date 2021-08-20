import { useState } from "react";
import { useAppContext } from "../../../context/ContextProvider";

export function useGame() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const { businesses } = useAppContext();

  const onYes = () => {
    setAnswers((prevState) => [...prevState, true]);
    setIndex((prevState) => (prevState += 1));
  };

  const onNo = () => {
    setAnswers((prevState) => [...prevState, false]);
    setIndex((prevState) => (prevState += 1));
  };

  const business = businesses[index];
  const isFinished = index >= businesses.length;

  return { answers, onYes, onNo, business, businesses, isFinished };
}
