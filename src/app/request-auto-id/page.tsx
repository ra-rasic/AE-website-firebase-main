
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Send, FileText } from "lucide-react";

const formSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  email: z.string().email("Invalid email address"),
  vehicleInfo: z.string().min(1, "Vehicle information is required (Year, Make, Model, VIN)"),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestAutoIdPage() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      policyNumber: "",
      policyholderName: "",
      email: "",
      vehicleInfo: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Auto ID Card Request:", data);
    toast({
      title: "Request Submitted!",
      description: "Your auto ID card request has been received. We will process it shortly.",
    });
    form.reset();
  };

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Service Center' },
        { label: 'Request Auto ID Card' }
      ]} />
       <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Request Auto ID Card</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Need a copy of your auto insurance ID card? Fill out the form below, and we'll send it to you promptly.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
           <Card className="shadow-lg">
             <CardHeader>
                <CardTitle>Auto ID Card Request Form</CardTitle>
                <CardDescription>Please provide your policy details to receive your ID card.</CardDescription>
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
                            <Input placeholder="Your auto policy number" {...field} />
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
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Where should we send the ID card?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="vehicleInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Information *</FormLabel>
                          <FormControl>
                            <Input placeholder="Year, Make, Model, and VIN of the vehicle" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full">
                       <Send className="mr-2 h-4 w-4" /> Submit Request
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
