"use server";

import { z } from "zod";
import { answerInsuranceQuestion } from "@/ai/flows/answer-insurance-questions";
import { instantQuoteFromUserInput } from "@/ai/flows/instant-quote-from-user-input";
import { recommendCoverage } from "@/ai/flows/recommend-coverage";
import { generateSeoContent } from "@/ai/flows/generate-seo-content";

// Instant Quote Action
const quoteSchema = z.object({
  userInput: z.string().min(10, { message: "Please describe your needs in more detail." }),
});
export async function getInstantQuote(prevState: any, formData: FormData) {
  const validatedFields = quoteSchema.safeParse({
    userInput: formData.get('userInput'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const result = await instantQuoteFromUserInput({ userInput: validatedFields.data.userInput });
    return { data: result };
  } catch (error) {
    return { error: "Failed to get a quote. Please try again." };
  }
}

// Coverage Recommendation Action
const recommendationSchema = z.object({
  location: z.string().min(1, { message: "Location is required." }),
  age: z.coerce.number().min(16, { message: "Age must be 16 or older." }).max(120),
  familySize: z.coerce.number().min(1, { message: "Family size must be at least 1." }),
  occupation: z.string().min(1, { message: "Occupation is required." }),
  homeowner: z.boolean(),
  autoOwner: z.boolean(),
});
export async function getCoverageRecommendations(prevState: any, formData: FormData) {
  const data = {
    location: formData.get('location'),
    age: formData.get('age'),
    familySize: formData.get('familySize'),
    occupation: formData.get('occupation'),
    homeowner: formData.get('homeowner') === 'on',
    autoOwner: formData.get('autoOwner') === 'on',
  }
  
  const validatedFields = recommendationSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await recommendCoverage(validatedFields.data);
    return { data: result };
  } catch (error) {
    return { error: "Failed to get recommendations. Please try again." };
  }
}

// FAQ Chatbot Action
export async function getFaqAnswer(question: string) {
  if (!question) {
    return { error: "Question cannot be empty." };
  }
  try {
    const result = await answerInsuranceQuestion({ question });
    return { data: result };
  } catch (error) {
    return { error: "I couldn't find an answer. Please try rephrasing." };
  }
}

// SEO Content Generator Action
const seoSchema = z.object({
  insuranceType: z.string().min(1, { message: "Insurance type is required." }),
  location: z.string().min(1, { message: "Location is required." }),
});

export async function generateSeo(prevState: any, formData: FormData) {
  const validatedFields = seoSchema.safeParse({
    insuranceType: formData.get('insuranceType'),
    location: formData.get('location'),
  });
  
  if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const result = await generateSeoContent(validatedFields.data);
    return { data: result };
  } catch (error) {
    return { error: "Failed to generate SEO content." };
  }
}
