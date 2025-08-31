// src/ai/flows/generate-seo-content.ts
'use server';

/**
 * @fileOverview Generates SEO-optimized content for insurance types and Florida locations.
 *
 * - generateSeoContent - A function that generates SEO content.
 * - GenerateSeoContentInput - The input type for the generateSeoContent function.
 * - GenerateSeoContentOutput - The return type for the generateSeoContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoContentInputSchema = z.object({
  insuranceType: z.string().describe('Type of insurance (e.g., auto, home, business).'),
  location: z.string().describe('Florida location (city or region).'),
});
export type GenerateSeoContentInput = z.infer<typeof GenerateSeoContentInputSchema>;

const GenerateSeoContentOutputSchema = z.object({
  title: z.string().describe('SEO-optimized title for the content.'),
  metaDescription: z.string().describe('SEO-optimized meta description.'),
  content: z.string().describe('SEO-optimized content for the insurance type and location.'),
});
export type GenerateSeoContentOutput = z.infer<typeof GenerateSeoContentOutputSchema>;

export async function generateSeoContent(input: GenerateSeoContentInput): Promise<GenerateSeoContentOutput> {
  return generateSeoContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoContentPrompt',
  input: {schema: GenerateSeoContentInputSchema},
  output: {schema: GenerateSeoContentOutputSchema},
  prompt: `You are an SEO specialist tasked with generating SEO-optimized content for an insurance agency website.

  Generate a title, meta description, and content for the given insurance type and Florida location.

  Insurance Type: {{{insuranceType}}}
  Location: {{{location}}}

  The content should:
  - Be informative and engaging for local Florida residents.
  - Include relevant keywords for the insurance type and location.
  - Address common questions and concerns related to the insurance type in that location.
  - Follow SEO best practices to improve search engine rankings.

  Title:
  Meta Description:
  Content:
  `,
});

const generateSeoContentFlow = ai.defineFlow(
  {
    name: 'generateSeoContentFlow',
    inputSchema: GenerateSeoContentInputSchema,
    outputSchema: GenerateSeoContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
