// src/ai/flows/recommend-coverage.ts
'use server';
/**
 * @fileOverview A flow that recommends personalized insurance coverage options based on user profiles and local risks.
 *
 * - recommendCoverage - A function that recommends insurance coverage options.
 * - RecommendCoverageInput - The input type for the recommendCoverage function.
 * - RecommendCoverageOutput - The return type for the recommendCoverage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendCoverageInputSchema = z.object({
  location: z.string().describe('The city and county of the user, e.g. Bonita Springs, Collier County.'),
  age: z.number().describe('The age of the user.'),
  familySize: z.number().describe('The number of people in the user family.'),
  occupation: z.string().describe('The occupation of the user.'),
  homeowner: z.boolean().describe('Whether the user owns a home.'),
  autoOwner: z.boolean().describe('Whether the user owns a car.'),
});
export type RecommendCoverageInput = z.infer<typeof RecommendCoverageInputSchema>;

const RecommendCoverageOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      coverageType: z.string().describe('The type of insurance coverage recommended.'),
      reason: z.string().describe('The reason for recommending this coverage.'),
    })
  ).describe('A list of recommended insurance coverage options.'),
});
export type RecommendCoverageOutput = z.infer<typeof RecommendCoverageOutputSchema>;

export async function recommendCoverage(input: RecommendCoverageInput): Promise<RecommendCoverageOutput> {
  return recommendCoverageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendCoveragePrompt',
  input: {schema: RecommendCoverageInputSchema},
  output: {schema: RecommendCoverageOutputSchema},
  prompt: `You are an AI insurance expert specializing in Florida resident insurance needs.

  Based on the user's profile and their location in Florida, recommend the most important insurance coverage options for them.  Explain why each coverage option is recommended, taking into account Florida-specific risks and regulations.

  User Profile:
  Location: {{location}}
  Age: {{age}}
  Family Size: {{familySize}}
  Occupation: {{occupation}}
  Homeowner: {{homeowner}}
  Auto Owner: {{autoOwner}}

  Format your response as a JSON object with a "recommendations" field. This field should be an array of objects, where each object has a "coverageType" and a "reason" field.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const recommendCoverageFlow = ai.defineFlow(
  {
    name: 'recommendCoverageFlow',
    inputSchema: RecommendCoverageInputSchema,
    outputSchema: RecommendCoverageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
