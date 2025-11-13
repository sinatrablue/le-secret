import Stepper, { Step } from "@/components/Stepper";
import { FavoriteBaeForm } from "@/components/forms/FavoriteBaeForm";
import { MomsForm } from "@/components/forms/MomsForm";
import { TotalTatoosForm } from "@/components/forms/TotalTatoosForm";
import { YearMetForm } from "@/components/forms/YearMetForm";
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
      <Step>
        <FavoriteBaeForm setIsNextDisabled={setIsNextDisabled} />
      </Step>
      <Step>
        <TotalTatoosForm setIsNextDisabled={setIsNextDisabled} />
      </Step>
      <Step>
        <MomsForm setIsNextDisabled={setIsNextDisabled} />
      </Step>
    </Stepper>
  );
};
