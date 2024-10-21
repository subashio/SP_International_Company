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
import { useToast } from "@/components/ui/use-toast";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { sendContactForm } from "@/lib/api";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Logos from "@/components/ui/Logo";
import { Textarea } from "@/components/ui/textarea";

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
        title: "Message Received",
        description:
          "Thank you for reaching out! We’ll get back to you shortly",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message Not Sent",
        description: "We couldn't send your message. Please try again later.",
      });
    }
  }
  return (
    <div
      className="relative py-14"
      style={{ backgroundImage: `url(/pictures/background/contactBg.png)` }}
    >
      <MaxWidthWrapper className="grid-col max-w-8xl grid justify-around lg:grid-cols-2">
        <div className="rounded-lg bg-white px-6 pb-20 pt-24 lg:px-8">
          <div className="mx-auto max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to reach out to us for any inquiries or assistance.
              We're here to help!
            </p>
            <div className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <Card className="group flex cursor-pointer items-center gap-x-4 border-none p-6 transition-all duration-500 hover:bg-sky-100">
                <Logos
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                  className="h-14 w-14 bg-sky-200 p-2 text-gray-900 transition-all duration-500 group-hover:scale-110"
                />
                <CardContent className="flex flex-col justify-center pt-4">
                  <h1 className="text-xl font-semibold">Contact</h1>
                  <p> Mobile: +1 (123) 456-7890</p>
                  <p> Mail: tailnext@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="group flex cursor-pointer items-center gap-x-4 border-none p-6 transition-all duration-500 hover:bg-sky-100">
                <Logos
                  xmlns="http://www.w3.org/2000/svg"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-14 w-14 bg-sky-200 p-2 text-gray-900 transition-all duration-500 group-hover:scale-110"
                />
                <CardContent className="flex flex-col justify-center pt-4">
                  <h1 className="text-xl font-semibold">Address</h1>
                  <p>1230 Maecenas Street Donec Road New York, EEUU</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg bg-white px-6 pb-24 pt-8 sm:pb-32 lg:px-8 lg:py-32"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-2xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="6] h-12"
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
                      <FormLabel className="">Phone</FormLabel>
                      <FormControl>
                        <Input
                          className="h-12"
                          placeholder="Enter Phone Number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12"
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
                    <FormLabel className="">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
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
                className="bg-sky-450 hover:border-sky-450 group my-8 inline-flex h-12 w-full cursor-pointer place-content-center justify-center gap-2 rounded-lg border-2 border-transparent px-5 py-3 text-center text-sm font-medium text-white shadow-xl transition duration-500 hover:bg-white hover:text-black sm:w-auto"
              >
                Send Message
                {form.formState.isSubmitting && (
                  <Loader className="ml-2 h-6 w-6 animate-spin" />
                )}
              </Button>
            </div>
          </form>
        </Form>
      </MaxWidthWrapper>
    </div>
  );
}
