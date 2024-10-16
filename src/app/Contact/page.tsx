"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Loader, MailPlus } from "lucide-react";

import { sendContactForm } from "@/lib/api";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z
    .string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),

  message: z.string().min(10, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await sendContactForm(data);
      form.reset();
      toast({
        variant: "default",
        title: "Project Uploaded",
        description: "Now everyone can view your Project",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "your file could not be uploaded , try again later",
      });
    }
  }
  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat py-20 bg-blend-soft-light"
      style={{ backgroundImage: "url(/pictures/contactBg1.png)" }}
    >
      <h1 className="my-8 flex w-full justify-center gap-3 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
        Get In touch <MailPlus />
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 lg:w-1/2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-xl shadow-xl shadow-[#00000036]"
                    placeholder="Enter Name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-white">Phone</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-xl shadow-xl shadow-[#00000036]"
                    placeholder="Enter Phone Number"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    className="h-12 rounded-xl shadow-xl shadow-[#00000036]"
                    placeholder="Enter Email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none rounded-xl shadow-xl shadow-[#00000036]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="my-8 h-12 w-full place-content-center bg-[#23A0DA] text-xl hover:bg-[#3ec2ff]"
          >
            Submit
            {form.formState.isSubmitting && (
              <Loader className="ml-2 h-4 w-4 animate-spin" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
