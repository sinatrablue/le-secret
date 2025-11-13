import { Drawer } from "vaul";

export const SecretDrawer = () => (
  <Drawer.Root>
    <Drawer.Trigger>
      <img
        src="/le-secret/question-mark-icon.png"
        className="h-8 w-8 absolute top-2 right-2"
      />
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
);
