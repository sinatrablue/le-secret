import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type FC } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

interface SizesFormProps {
  setIsNextDisabled(isDisabled: boolean): void;
}
const FormSchema = z.object({
  height: z.string().nonempty({ message: "Non mais à la louche quoi !" }),
  shoes: z.string().nonempty({ message: "Allez, on fait la même !" }),
});

export const SizesForm: FC<SizesFormProps> = ({ setIsNextDisabled }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      height: "",
      shoes: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const h = parseInt(data.height);
    const s = parseInt(data.shoes);
    if (h === 170 && s === 39) {
      setSuccess(true);
      setIsNextDisabled(false);
      return;
    }
    if (h > 175) {
      form.setError("height", {
        message: "Non mais, tu nous a vu en vrai ?",
        type: "value",
      });
    } else if (h < 165) {
      form.setError("height", {
        message: "On habite dans un trou de hobbit même ?",
        type: "value",
      });
    } else {
      form.setError("height", {
        message: "Presque, encore !",
        type: "value",
      });
    }
    if (s > 42) {
      form.setError("shoes", {
        message: "On est des clowns en fait",
        type: "value",
      });
    } else if (h < 37) {
      form.setError("shoes", {
        message: "On a terminé notre croissance, si jamais",
        type: "value",
      });
    } else {
      form.setError("shoes", {
        message: "Nooon...",
        type: "value",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10 min-h-fit"
      >
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quelle taille fait-on en cm ? (la même)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shoes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Quelle pointure fait-on ? (oui, aussi la même)
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-3">
          <Button
            className="w-fit"
            type="submit"
            variant="secondary"
            size="sm"
            disabled={success}
          >
            Vérifier
          </Button>
          {success && (
            <span className="text-green-600 text-sm">
              Mais non ? Vous avez été au bout ?
            </span>
          )}
        </div>
      </form>
    </Form>
  );
};
