
"use server";

import { z } from "zod";
import { answerInsuranceQuestion } from "@/ai/flows/answer-insurance-questions";
import { instantQuoteFromUserInput } from "@/ai/flows/instant-quote-from-user-input";
import { recommendCoverage } from "@/ai/flows/recommend-coverage";
import { generateSeoContent } from "@/ai/flows/generate-seo-content";
import { sendMail } from "./mail";

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

// Auto ID Card Request Action
const autoIdSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  email: z.string().email("Invalid email address"),
  streetAddress: z.string().min(1, "Street address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "A valid ZIP code is required"),
  deliveryMethod: z.enum(["email", "mail"], {
    required_error: "You need to select a delivery method.",
  }),
});

export async function requestAutoId(data: unknown) {
  const validatedFields = autoIdSchema.safeParse(data);
  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data.", errors: validatedFields.error.flatten().fieldErrors };
  }

  const { policyNumber, policyholderName, email, streetAddress, addressLine2, city, state, zipCode, deliveryMethod } = validatedFields.data;
  
  const subject = `New Auto ID Card Request - Policy ${policyNumber}`;
  const html = `
    <h1>New Auto ID Card Request</h1>
    <p><strong>Policy Number:</strong> ${policyNumber}</p>
    <p><strong>Policyholder Name:</strong> ${policyholderName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong><br/>
      ${streetAddress}<br/>
      ${addressLine2 || ''}<br/>
      ${city}, ${state} ${zipCode}
    </p>
    <p><strong>Delivery Method:</strong> ${deliveryMethod}</p>
  `;

  try {
    await sendMail({ to: process.env.EMAIL_TO!, subject, html });
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to send request. Please try again later.' };
  }
}


// Certificate Request Action
const certificateSchema = z.object({
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  policyholderEmail: z.string().email("Invalid email address for policyholder"),
  requesterEmail: z.string().email("Invalid email address for requester").optional().or(z.literal('')),
  certificateHolderName: z.string().min(1, "Certificate holder name is required"),
  certificateHolderAddress: z.string().min(1, "Certificate holder address is required"),
  additionalInfo: z.string().optional(),
});

export async function requestCertificate(data: unknown) {
  const validatedFields = certificateSchema.safeParse(data);
  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data.", errors: validatedFields.error.flatten().fieldErrors };
  }
  
  const { policyNumber, policyholderName, policyholderEmail, requesterEmail, certificateHolderName, certificateHolderAddress, additionalInfo } = validatedFields.data;

  const subject = `New Certificate of Insurance Request - Policy ${policyNumber}`;
  const html = `
    <h1>New Certificate of Insurance Request</h1>
    <p><strong>Policy Number:</strong> ${policyNumber}</p>
    <p><strong>Policyholder Name:</strong> ${policyholderName}</p>
    <p><strong>Policyholder Email:</strong> ${policyholderEmail}</p>
    <p><strong>Requester Email:</strong> ${requesterEmail || 'N/A'}</p>
    <hr/>
    <h2>Certificate Holder Details</h2>
    <p><strong>Name:</strong> ${certificateHolderName}</p>
    <p><strong>Address:</strong><br/>${certificateHolderAddress.replace(/\n/g, '<br/>')}</p>
    <p><strong>Additional Info:</strong><br/>${additionalInfo?.replace(/\n/g, '<br/>') || 'N/A'}</p>
  `;

  try {
    await sendMail({ to: process.env.EMAIL_TO!, subject, html });
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to send request. Please try again later.' };
  }
}

// Policy Change Request Action
const policyChangeSchema = z.object({
  policyType: z.enum(["personal", "commercial"]),
  policyNumber: z.string().min(1, "Policy number is required"),
  policyholderName: z.string().min(1, "Policyholder name is required"),
  businessName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  effectiveDate: z.date({
    required_error: "An effective date is required.",
  }),
  changeDescription: z.string().min(10, "Please describe the change in at least 10 characters."),
});

export async function requestPolicyChange(data: unknown) {
    const validatedFields = policyChangeSchema.safeParse(data);
    if (!validatedFields.success) {
      return { success: false, error: "Invalid form data.", errors: validatedFields.error.flatten().fieldErrors };
    }

    const { policyType, policyNumber, policyholderName, businessName, email, phone, effectiveDate, changeDescription } = validatedFields.data;

    const subject = `New Policy Change Request - Policy ${policyNumber}`;
    const html = `
      <h1>New Policy Change Request</h1>
      <p><strong>Policy Type:</strong> ${policyType}</p>
      ${policyType === 'commercial' && businessName ? `<p><strong>Business Name:</strong> ${businessName}</p>` : ''}
      <p><strong>Policy Number:</strong> ${policyNumber}</p>
      <p><strong>Policyholder Name:</strong> ${policyholderName}</p>
      <p><strong>Contact Email:</strong> ${email}</p>
      <p><strong>Contact Phone:</strong> ${phone}</p>
      <p><strong>Requested Effective Date:</strong> ${effectiveDate.toLocaleDateString()}</p>
      <hr/>
      <h2>Change Description</h2>
      <p>${changeDescription.replace(/\n/g, '<br/>')}</p>
      <br/>
      <p><strong>Please contact the client to confirm this change. Coverage is not bound.</strong></p>
    `;

    try {
      await sendMail({ to: process.env.EMAIL_TO!, subject, html });
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to send request. Please try again later.' };
    }
}
