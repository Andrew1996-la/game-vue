import { Action } from "@/store";

export interface Expression {
  startValue: number;
  actions: string[];
  numbers: number[];
}

export interface Data {
  complexity: number;
  time: number;
  actions: Action[];
  userAnswers: {
    rightAnswers: number;
    wrongAnswers: number;
  };
}
