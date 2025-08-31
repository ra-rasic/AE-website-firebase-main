"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getCoverageRecommendations } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Analyzing..." : "Get Recommendations"}
    </Button>
  );
}

export function CoverageRecommender() {
  const initialState = { errors: {}, data: null, error: null };
  const [state, dispatch] = useActionState(getCoverageRecommendations, initialState);

  return (
    <Card className="shadow-lg">
      <form action={dispatch}>
        <CardHeader>
          <CardTitle>Personalized Coverage Recommendations</CardTitle>
          <CardDescription>
            Tell us a bit about yourself, and our AI will suggest the best coverage options for your situation in Florida.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location (City, County)</Label>
            <Input id="location" name="location" placeholder="e.g., Bonita Springs, Lee County" required />
            {state?.errors?.location && <p className="text-sm font-medium text-destructive">{state.errors.location[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" name="age" type="number" placeholder="e.g., 35" required />
            {state?.errors?.age && <p className="text-sm font-medium text-destructive">{state.errors.age[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="familySize">Family Size</Label>
            <Input id="familySize" name="familySize" type="number" placeholder="e.g., 4" defaultValue="1" required />
            {state?.errors?.familySize && <p className="text-sm font-medium text-destructive">{state.errors.familySize[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="occupation">Occupation</Label>
            <Input id="occupation" name="occupation" placeholder="e.g., Software Engineer" required />
            {state?.errors?.occupation && <p className="text-sm font-medium text-destructive">{state.errors.occupation[0]}</p>}
          </div>
          <div className="flex items-center space-x-2 pt-4">
            <Switch id="homeowner" name="homeowner" />
            <Label htmlFor="homeowner">Are you a homeowner?</Label>
          </div>
          <div className="flex items-center space-x-2 pt-4">
            <Switch id="autoOwner" name="autoOwner" />
            <Label htmlFor="autoOwner">Do you own a car?</Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">AI-Powered Advice</p>
          <SubmitButton />
        </CardFooter>
      </form>
      
      {state?.error && (
        <div className="p-6 pt-0">
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        </div>
      )}

      {state?.data?.recommendations && (
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold mb-2">Your Recommended Coverages</h3>
          <Accordion type="single" collapsible className="w-full">
            {state.data.recommendations.map((rec, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{rec.coverageType}</AccordionTrigger>
                <AccordionContent>{rec.reason}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </Card>
  );
}
