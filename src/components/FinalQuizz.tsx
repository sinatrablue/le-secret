import Stepper, { Step } from "@/components/Stepper";
import YearMetForm from "@/components/YearMetForm";
import { useState, type FC } from "react";

type FinalQuizzProps = {
  setIsQuizzCompleted(complete: boolean): void;
};

export const FinalQuizz: FC<FinalQuizzProps> = ({ setIsQuizzCompleted }) => {
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  return (
    <Stepper
      className="min-h-fit"
      contentClassName="min-h-[200px]"
      backButtonText="Précédent"
      nextButtonText="Suivant"
      onFinalStepCompleted={() => setIsQuizzCompleted(true)}
      nextButtonProps={{ disabled: isNextDisabled }}
      onStepChange={() => setIsNextDisabled(true)}
    >
      <Step>
        <YearMetForm setIsNextDisabled={setIsNextDisabled} />
      </Step>
      <Step>step2</Step>
    </Stepper>
  );
};
