"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateSeo } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Generating..." : "Generate Content"}
    </Button>
  );
}

export function SeoGenerator() {
  const initialState = { errors: {}, data: null, error: null };
  const [state, dispatch] = useFormState(generateSeo, initialState);

  return (
    <Card className="shadow-lg">
      <form action={dispatch}>
        <CardHeader>
          <CardTitle>Local SEO Content Generator</CardTitle>
          <CardDescription>
            Generate SEO-optimized articles for different insurance types and Florida locations. (For internal/demo use)
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="seo-insuranceType">Insurance Type</Label>
            <Input id="seo-insuranceType" name="insuranceType" placeholder="e.g., Commercial Auto Insurance" required />
            {state?.errors?.insuranceType && <p className="text-sm font-medium text-destructive">{state.errors.insuranceType[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="seo-location">Florida Location</Label>
            <Input id="seo-location" name="location" placeholder="e.g., Miami, Dade County" required />
            {state?.errors?.location && <p className="text-sm font-medium text-destructive">{state.errors.location[0]}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">AI-Powered SEO</p>
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

      {state?.data && (
        <div className="p-6 border-t space-y-4">
          <ScrollArea className="h-72">
            <div className="pr-4 space-y-4">
              <div>
                <Label className="text-base font-semibold">Generated Title</Label>
                <Input readOnly value={state.data.title} className="mt-1" />
              </div>
              <div>
                <Label className="text-base font-semibold">Meta Description</Label>
                <Textarea readOnly value={state.data.metaDescription} className="mt-1" />
              </div>
              <div>
                <Label className="text-base font-semibold">Content</Label>
                <Textarea readOnly value={state.data.content} rows={15} className="mt-1" />
              </div>
            </div>
          </ScrollArea>
        </div>
      )}
    </Card>
  );
}
