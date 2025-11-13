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

interface MomsFormProps {
  setIsNextDisabled(isDisabled: boolean): void;
}
const FormSchema = z.object({
  angege: z.enum(["angelique", "angélique", "Angélique", "Angelique"], {
    message: "Nope, pas la bonne daronne !",
  }),
  bribri: z.enum(["brigitte", "Brigitte", "bribri", "Bribri"], {
    message: "Non, c'est celle à quelqu'un d'autre",
  }),
});

export const MomsForm: FC<MomsFormProps> = ({ setIsNextDisabled }) => {
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit() {
    setSuccess(true);
    setIsNextDisabled(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-10 min-h-fit"
      >
        <FormField
          control={form.control}
          name="angege"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quel est le prénom de la daronne d'Assia ?</FormLabel>
              <FormControl>
                <Input placeholder="Mireille ?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bribri"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quel est le prénom de la daronne de Robin ?</FormLabel>
              <FormControl>
                <Input placeholder="Catherine ?" {...field} />
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
              Bien vu ! Tu peux continuer !
            </span>
          )}
        </div>
      </form>
    </Form>
  );
};
