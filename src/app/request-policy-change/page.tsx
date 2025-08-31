
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Send, FileEdit } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { requestPolicyChange } from "@/lib/actions";

const formSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  effectiveDate: z.date({
    required_error: "An effective date is required.",
  }),
  changeDescription: z.string().min(10, "Please describe the change in at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestPolicyChangePage() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      policyNumber: "",
      policyholderName: "",
      email: "",
      phone: "",
      changeDescription: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const result = await requestPolicyChange(data);
    if (result.success) {
        toast({
            title: "Request Submitted!",
            description: "Your policy change request has been received. An agent will contact you to confirm the details.",
        });
        form.reset();
    } else {
        toast({
            title: "Submission Failed",
            description: result.error || "An unknown error occurred. Please try again.",
            variant: "destructive",
        });
    }
  };

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Service Center' },
        { label: 'Request Policy Change' }
      ]} />
       <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileEdit className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Request a Policy Change</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Need to make a change to your policy? Please fill out the form below. Note that coverage is not bound or changed until you receive confirmation from an agent.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
           <Card className="shadow-lg">
             <CardHeader>
                <CardTitle>Policy Change Request Form</CardTitle>
                <CardDescription>All changes must be confirmed by a licensed agent.</CardDescription>
             </CardHeader>
             <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="policyNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Policy Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="The policy number you wish to change" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="policyholderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Policyholder Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name as it appears on your policy" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Your contact email" {...field} />
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
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="Your contact phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                     </div>
                     <FormField
                      control={form.control}
                      name="effectiveDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Requested Effective Date *</FormLabel>
                           <DatePicker field={field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="changeDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description of Change Request *</FormLabel>
                          <FormControl>
                            <Textarea rows={6} placeholder="Please describe the change in detail (e.g., adding a vehicle, changing address, increasing coverage)." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                       <Send className="mr-2 h-4 w-4" /> {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </Form>
             </CardContent>
           </Card>
        </div>
      </section>
    </>
  );
}
