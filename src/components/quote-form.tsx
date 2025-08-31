"use client";

import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface QuoteFormProps {
  title?: string;
  serviceType?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  title = "Get Your Free Quote", 
  serviceType = "",
  className = ""
}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceType,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    toast({
      title: "Request Sent!",
      description: "Thank you! We'll contact you within 24 hours with your personalized quote.",
    })
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className={cn('bg-card rounded-lg shadow-xl p-8', className)}>
      <h3 className="text-2xl font-bold text-card-foreground mb-6">{title}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-black">Full Name *</Label>
            <Input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="placeholder:text-black/70 text-black"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">Email Address *</Label>
            <Input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="placeholder:text-black/70 text-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-black">Phone Number *</Label>
            <Input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="placeholder:text-black/70 text-black"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service" className="text-black">Insurance Type</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
              <SelectTrigger id="service" className="text-black">
                <SelectValue placeholder="Select Insurance Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto Insurance</SelectItem>
                <SelectItem value="homeowners">Homeowners Insurance</SelectItem>
                <SelectItem value="business">Business Insurance</SelectItem>
                <SelectItem value="flood">Flood Insurance</SelectItem>
                <SelectItem value="umbrella">Umbrella Insurance</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-black">Additional Details</Label>
          <Textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            placeholder="Tell us about your insurance needs..."
            className="placeholder:text-black/70 text-black"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            <Send className="w-4 h-4 mr-2" />
            <span>Get Free Quote</span>
          </Button>
          <Button
            asChild
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="lg"
            variant="secondary"
          >
            <a href="tel:239-591-1225">
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Now</span>
            </a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground text-center pt-2">
          By submitting this form, you agree to be contacted by A & E Insurance Group.
        </p>
      </form>
    </div>
  );
};
