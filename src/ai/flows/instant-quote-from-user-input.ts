'use server';
/**
 * @fileOverview A flow that takes user input describing insurance needs and returns a real-time quote.
 *
 * - instantQuoteFromUserInput - A function that handles the process of generating a real-time insurance quote from user input.
 * - InstantQuoteFromUserInputInput - The input type for the instantQuoteFromUserInput function.
 * - InstantQuoteFromUserInputOutput - The return type for the instantQuoteFromUserInput function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InstantQuoteFromUserInputInputSchema = z.object({
  userInput: z
    .string()
    .describe('A description of the user insurance needs in their own words.'),
});
export type InstantQuoteFromUserInputInput = z.infer<typeof InstantQuoteFromUserInputInputSchema>;

const InstantQuoteFromUserInputOutputSchema = z.object({
  quote: z.string().describe('The real-time insurance quote based on the user input.'),
  coverageDetails: z.string().describe('A detailed breakdown of the coverage included in the quote.'),
});
export type InstantQuoteFromUserInputOutput = z.infer<typeof InstantQuoteFromUserInputOutputSchema>;

export async function instantQuoteFromUserInput(input: InstantQuoteFromUserInputInput): Promise<InstantQuoteFromUserInputOutput> {
  return instantQuoteFromUserInputFlow(input);
}

const prompt = ai.definePrompt({
  name: 'instantQuoteFromUserInputPrompt',
  input: {schema: InstantQuoteFromUserInputInputSchema},
  output: {schema: InstantQuoteFromUserInputOutputSchema},
  prompt: `You are an expert insurance agent specializing in providing real-time quotes based on user-provided descriptions of their insurance needs. Your goal is to provide an accurate quote and detailed coverage information.

  Based on the following user input:
  {{userInput}}
  
  Provide a real-time insurance quote and a detailed breakdown of the coverage included in the quote.`, 
});

const instantQuoteFromUserInputFlow = ai.defineFlow(
  {
    name: 'instantQuoteFromUserInputFlow',
    inputSchema: InstantQuoteFromUserInputInputSchema,
    outputSchema: InstantQuoteFromUserInputOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
