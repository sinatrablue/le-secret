import AuthAlertDialog from "@/components/AuthAlertDialog";
import { FinalQuizz } from "@/components/FinalQuizz";
import { FinalResult } from "@/components/FinalResult";
import { SecretDrawer } from "@/components/SecretDrawer";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isQuizzCompleted, setIsQuizzCompleted] = useState(false);

  return (
    <>
      <AuthAlertDialog isAuth={isAuth} setIsAuth={setIsAuth} />

      {
        <div className="flex flex-col h-dvh">
          <SecretDrawer />

          {isAuth && (
            <main className="flex flex-col max-sm:gap-8 md:gap-10 grow max-sm:px-8 md:max-w-3xl md:mx-auto md:my-40 max-sm:py-12 text-lg">
              {isQuizzCompleted ? (
                <FinalResult />
              ) : (
                <>
                  <span className="text-sm max-sm:pr-3">
                    Nous avons besoin de nous assurer de votre identité.
                    Veuillez compléter ce formulaire de sécurité en plusieurs
                    étapes.
                  </span>
                  <FinalQuizz setIsQuizzCompleted={setIsQuizzCompleted} />
                </>
              )}
            </main>
          )}

          <footer className="h-10 font-mono flex max-sm:px-2 md:px-6 items-center text-xs shrink-0 bg-gray-950 shadow-2xl">
            © 2025 Simoboul Corp — 𝕃𝕖 𝕊𝕖𝕔𝕣𝕖𝕥
          </footer>
        </div>
      }
    </>
  );
}

export default App;
