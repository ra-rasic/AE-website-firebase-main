
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { requestAutoId } from "@/lib/actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  policyType: z.enum(["personal", "commercial"], {
    required_error: "You need to select a policy type.",
  }),
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  businessName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  deliveryMethod: z.enum(["email", "mail"], {
    required_error: "You need to select a delivery method.",
  }),
  streetAddress: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
}).refine(data => {
    if (data.policyType === 'commercial') {
        return !!data.businessName && data.businessName.length > 0;
    }
    return true;
}, {
    message: "Name of business is required for commercial policies.",
    path: ["businessName"],
}).refine(data => {
    if (data.deliveryMethod === 'mail') {
        return !!data.streetAddress && !!data.city && !!data.state && !!data.zipCode;
    }
    return true;
}, {
    message: "A complete address is required for mail delivery.",
    path: ["streetAddress"],
});


type FormData = z.infer<typeof formSchema>;

export default function RequestAutoIdPage() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      policyNumber: "",
      policyholderName: "",
      businessName: "",
      email: "",
      streetAddress: "",
      addressLine2: "",
      city: "",
      state: "FL",
      zipCode: "",
      deliveryMethod: "email",
    },
  });

  const policyType = form.watch("policyType");
  const deliveryMethod = form.watch("deliveryMethod");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const result = await requestAutoId(data);
    if (result.success) {
        toast({
            title: "Request Submitted!",
            description: "Your auto ID card request has been received. We will process it shortly.",
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                          control={form.control}
                          name="policyType"
                          render={({ field }) => (
                              <FormItem>
                              <FormLabel>Policy Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                  <SelectTrigger>
                                      <SelectValue placeholder="Select a policy type" />
                                  </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                  <SelectItem value="personal">Personal</SelectItem>
                                  <SelectItem value="commercial">Commercial</SelectItem>
                                  </SelectContent>
                              </Select>
                              <FormMessage />
                              </FormItem>
                          )}
                      />
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
                    </div>
                     <FormField
                      control={form.control}
                      name="policyholderName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {policyType === 'commercial' ? 'Contact Full Name *' : 'Policyholder Full Name *'}
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={policyType === 'commercial' ? "Full name of the person making the request" : "Full name as it appears on your policy"} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {policyType === 'commercial' && (
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name of Business *</FormLabel>
                            <FormControl>
                              <Input placeholder="Name of business as listed on the policy" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Your contact email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                        control={form.control}
                        name="deliveryMethod"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel>How would you like to receive your ID cards? *</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="email" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Email</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="mail" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Mail</FormLabel>
                                </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                    {deliveryMethod === 'mail' && (
                        <>
                            <FormField
                            control={form.control}
                            name="streetAddress"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Mailing Address *</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., 123 Main St" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="addressLine2"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Address Line 2 (Optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Apt, Suite, Bldg" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>City *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Naples" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>State *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., FL" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="zipCode"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>ZIP Code *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., 34102" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                        </>
                    )}
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
