"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { getInstantQuote } from "@/lib/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Analyzing..." : "Get Instant Quote"}
    </Button>
  );
}

export function InstantQuote() {
  const initialState = { errors: {}, data: null, error: null };
  const [state, dispatch] = useActionState(getInstantQuote, initialState);

  return (
    <Card className="shadow-lg">
      <form action={dispatch}>
        <CardHeader>
          <CardTitle>Instant Quote</CardTitle>
          <CardDescription>
            Describe your insurance needs in your own words, and our AI will generate a quote for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            name="userInput"
            placeholder="e.g., 'I need homeowners insurance for my new house in Naples, FL. It's a 3-bedroom, 2-bath with a pool. I also have a 2023 Honda CR-V I need to insure.'"
            rows={5}
            required
            aria-describedby="userInput-error"
          />
          {state?.errors?.userInput && (
            <p id="userInput-error" className="text-sm font-medium text-destructive mt-2">{state.errors.userInput[0]}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">Powered by AI</p>
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
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold mb-2">Your AI-Generated Quote</h3>
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Estimated Quote: {state.data.quote}</AlertTitle>
            <AlertDescription>
              <h4 className="font-semibold mt-4 mb-2">Coverage Details:</h4>
              <p className="whitespace-pre-wrap">{state.data.coverageDetails}</p>
            </AlertDescription>
          </Alert>
           <div className="mt-4 pt-4 border-t">
              <h4 className="font-medium mb-2">Have a question about your quote?</h4>
              <div className="flex w-full items-center space-x-2">
                <Input
                  placeholder="Ask for adjustments or clarifications..."
                  aria-label="Follow-up question"
                />
                <Button type="submit" size="icon" aria-label="Send follow-up">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
        </div>
      )}
    </Card>
  );
}
