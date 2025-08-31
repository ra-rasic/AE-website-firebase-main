import { config } from 'dotenv';
config();

import '@/ai/flows/answer-insurance-questions.ts';
import '@/ai/flows/instant-quote-from-user-input.ts';
import '@/ai/flows/recommend-coverage.ts';
import '@/ai/flows/generate-seo-content.ts';