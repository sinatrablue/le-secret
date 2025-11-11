import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SECRET_ACCESS_CODE = "1005178";

const FormSchema = z.object({
  pin: z.string().min(7, {
    message: "Votre code d'accès doit contenir 7 caractères",
  }),
});

type AuthAlertDialogProps = {
  isAuth: boolean;
  setIsAuth(isAuth: boolean): void;
};

export const AuthAlertDialog: FC<AuthAlertDialogProps> = ({
  isAuth,
  setIsAuth,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.pin === SECRET_ACCESS_CODE) {
      setIsAuth(true);
      return;
    }
    form.setError("pin", {
      message: "Le code que vous avez renseigné est invalide",
      type: "value",
    });
  }
  return (
    <AlertDialog open={!isAuth}>
      <AlertDialogContent className="bg-gray-900/85">
        <AlertDialogHeader>
          <AlertDialogTitle>Code d'accès requis</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-6">
            L'application contient désormais des informations trop précieuses
            pour être divulgées publiquement.
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code d'accès</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={7} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} className="w-8 h-8" />
                            <InputOTPSlot index={1} className="w-8 h-8" />
                            <InputOTPSlot index={2} className="w-8 h-8" />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} className="w-8 h-8" />
                            <InputOTPSlot index={4} className="w-8 h-8" />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={5} className="w-8 h-8" />
                            <InputOTPSlot index={6} className="w-8 h-8" />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormDescription>
                        Veuillez saisir le code d'accès.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full justify-center">
                  <Button type="submit" variant="secondary">
                    Accéder
                  </Button>
                </div>
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AuthAlertDialog;
