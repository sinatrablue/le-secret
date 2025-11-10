import GlitchText from "@/components/GlitchText";
import { Drawer } from "vaul";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <Drawer.Root>
        <Drawer.Trigger>
          test
          {/*<img
            src="le-secret/question-mark-icon.png"
            className="h-8 w-8 absolute top-2 right-2"
          />*/}
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="stack-sans-text bg-black h-fit fixed bottom-0 left-0 right-0 outline-none p-8 pb-10 flex flex-col gap-8 rounded-t-2xl">
            <Drawer.Title className="text-xl md:mx-auto md:text-3xl">
              𝕃𝕖 𝕊𝕖𝕔𝕣𝕖𝕥
            </Drawer.Title>
            <Drawer.Description className="max-sm:text-sm tracking-wider md:mx-auto">
              Nous pourrions être tout ce qu'on veut.
              <br />
              Nous pourrions avoir tout ce qu'on veut.
              <br />
              Mais cela n'aurait aucun sens
              <br />
              Sans vous.
            </Drawer.Description>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <main className="flex flex-col max-sm:gap-16 md:gap-32 grow max-sm:px-8 md:max-w-3xl md:mx-auto md:my-10 max-sm:py-4">
        <h1 className="stack-sans-notch-h1 text-6xl">
          Bonjour{" "}
          <GlitchText speed={1} enableShadows={true}>
            [ non reconnu ]
          </GlitchText>
        </h1>

        <section className="max-sm:text-lg md:text-2xl">
          Aucune information n'est disponible pour le moment. Mais cela pourrait
          venir à changer !
        </section>
      </main>

      <footer className="h-10 font-mono flex max-sm:px-2 md:px-6 items-center text-xs shrink-0 bg-gray-950 shadow-2xl">
        © 2025 Simoboul Corp — 𝕃𝕖 𝕊𝕖𝕔𝕣𝕖𝕥
      </footer>
    </div>
  );
}

export default App;
