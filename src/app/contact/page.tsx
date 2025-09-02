
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you within one business day.",
    });
    form.reset();
  };

  return (
    <>
    <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Contact A & E Insurance Group</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Get in touch with Southwest Florida's trusted insurance experts. We're here to help with quotes, claims, policy questions, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="tel:239-591-1225" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 239-591-1225
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-white text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <a href="mailto:Contact@aeinsurancegroup.net" className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to protect what matters most? Contact us today for a personalized insurance quote or to discuss your coverage needs.
                </p>
              </div>

              {/* Office Information */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Office Address</h3>
                        <div className="text-muted-foreground">
                          <p>28441 S Tamiami Trail, Suite 109</p>
                          <p>Bonita Springs, FL 34134</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <a href="tel:239-591-1225" className="text-primary hover:text-primary/80">
                          (239) 591-1225
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a href="mailto:Contact@aeinsurancegroup.net" className="text-primary hover:text-primary/80">
                          Contact@aeinsurancegroup.net
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Office Hours (EST)</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Thursday: 9:00 AM - 3:00 PM</p>
                          <p>Friday: 9:00 AM - 12:00 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* After Hours Claims */}
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    After-Hours Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need to report a claim outside business hours? Contact your insurance carrier directly:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Auto Claims:</strong> Call the number on your insurance card</p>
                    <p><strong>Home Claims:</strong> Call the number on your policy documents</p>
                    <p><strong>Emergency:</strong> Call 911 first, then report your claim</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within one business day.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="firstName">First Name *</Label>
                            <FormControl>
                              <Input id="firstName" placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <FormControl>
                              <Input id="lastName" placeholder="Doe" {...field} />
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
                          <Label htmlFor="email">Email Address *</Label>
                          <FormControl>
                            <Input id="email" type="email" placeholder="john@example.com" {...field} />
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
                          <Label htmlFor="phone">Phone Number *</Label>
                          <FormControl>
                            <Input id="phone" type="tel" placeholder="(239) 555-0123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="subject">Subject</Label>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger id="subject">
                                <SelectValue placeholder="What can we help you with?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="quote">Request a Quote</SelectItem>
                              <SelectItem value="policy">Policy Question</SelectItem>
                              <SelectItem value="claim">Claim Assistance</SelectItem>
                              <SelectItem value="billing">Billing Question</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="message">Message *</Label>
                          <FormControl>
                            <Textarea
                              id="message"
                              placeholder="Please provide details about your insurance needs or questions..."
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-4">
                      <p className="text-xs text-muted-foreground">
                        * Required fields. By submitting this form, you consent to receive communications from A & E Insurance Group.
                      </p>
                      <Button type="submit" className="w-full text-lg py-6" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Find Our Office</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.5898822558!2d-81.7820050849669!3d26.33989928337774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db410c5a8e09e1%3A0x6d5e1a1278144b2!2s28441%20S%20Tamiami%20Trail%20%23109%2C%20Bonita%20Springs%2C%20FL%2034134%2C%20USA!5e0!3m2!1sen!2s!4v1689876543210!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="A & E Insurance Group Office Location"
                    ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Driving Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Driving Directions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">From Naples</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Take US-41 North. We're located in the Bernwood Marketplace plaza on the left, just past Coconut Road.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">From Fort Myers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Take US-41 South (Tamiami Trail). We're in the Bernwood Marketplace on the right, just before Coconut Road.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">From Estero</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Head south on US-41. Pass Coconut Point Mall and continue to the Bernwood Marketplace plaza on the right side.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Parking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Free parking is available directly in front of our office. Handicap accessible spaces are available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

    
