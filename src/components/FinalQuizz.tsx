import Stepper, { Step } from "@/components/Stepper";
import type { FC } from "react";

type FinalQuizzProps = {
  setIsQuizzCompleted(complete: boolean): void;
};

export const FinalQuizz: FC<FinalQuizzProps> = ({ setIsQuizzCompleted }) => {
  return (
    <Stepper
      className="min-h-full"
      backButtonText="Précédent"
      nextButtonText="Suivant"
      onFinalStepCompleted={() => setIsQuizzCompleted(true)}
    >
      <Step>step 1</Step>
      <Step>step2</Step>
    </Stepper>
  );
};
