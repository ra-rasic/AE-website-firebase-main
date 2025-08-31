
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
import { Send, Award } from "lucide-react";
import { requestCertificate } from "@/lib/actions";

const formSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  policyholderEmail: z.string().email("Invalid email address for policyholder"),
  requesterEmail: z.string().email("Invalid email address for requester").optional().or(z.literal('')),
  certificateHolderName: z.string().min(1, "Certificate holder name is required"),
  certificateHolderAddress: z.string().min(1, "Certificate holder address is required"),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestCertificatePage() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      policyNumber: "",
      policyholderName: "",
      policyholderEmail: "",
      requesterEmail: "",
      certificateHolderName: "",
      certificateHolderAddress: "",
      additionalInfo: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const result = await requestCertificate(data);
    if (result.success) {
        toast({
            title: "Request Submitted!",
            description: "Your Certificate of Insurance request has been received. We will process it shortly.",
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
        { label: 'Request a Certificate' }
      ]} />
       <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Request a Certificate of Insurance</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Need proof of insurance for a third party? Complete the form below to request a Certificate of Insurance (COI).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
           <Card className="shadow-lg">
             <CardHeader>
                <CardTitle>Certificate of Insurance Request Form</CardTitle>
                <CardDescription>Please provide all necessary details for the certificate holder.</CardDescription>
             </CardHeader>
             <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="policyNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Policy Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your business or personal policy number" {...field} />
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
                          <FormLabel>Your Full Name or Business Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Name as it appears on your policy" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="policyholderEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Policyholder's Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Policyholder's primary contact email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="requesterEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Requester's Email Address (Optional)</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Email a copy to the person requesting the certificate" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="certificateHolderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Certificate Holder Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name of the person or entity requesting the certificate" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="certificateHolderAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Certificate Holder Full Address *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Complete mailing address of the certificate holder" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Include any specific requirements, contract numbers, or notes." {...field} />
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
