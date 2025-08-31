'use server';

/**
 * @fileOverview An AI agent for answering common Florida insurance questions.
 *
 * - answerInsuranceQuestion - A function that answers a user's insurance question.
 * - AnswerInsuranceQuestionInput - The input type for the answerInsuranceQuestion function.
 * - AnswerInsuranceQuestionOutput - The return type for the answerInsuranceQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerInsuranceQuestionInputSchema = z.object({
  question: z.string().describe('The insurance question asked by the user.'),
});
export type AnswerInsuranceQuestionInput = z.infer<typeof AnswerInsuranceQuestionInputSchema>;

const AnswerInsuranceQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the insurance question.'),
});
export type AnswerInsuranceQuestionOutput = z.infer<typeof AnswerInsuranceQuestionOutputSchema>;

export async function answerInsuranceQuestion(input: AnswerInsuranceQuestionInput): Promise<AnswerInsuranceQuestionOutput> {
  return answerInsuranceQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerInsuranceQuestionPrompt',
  input: {schema: AnswerInsuranceQuestionInputSchema},
  output: {schema: AnswerInsuranceQuestionOutputSchema},
  prompt: `You are an AI chatbot specializing in Florida insurance. Answer the following question:

Question: {{{question}}}

Answer:`, config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const answerInsuranceQuestionFlow = ai.defineFlow(
  {
    name: 'answerInsuranceQuestionFlow',
    inputSchema: AnswerInsuranceQuestionInputSchema,
    outputSchema: AnswerInsuranceQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
