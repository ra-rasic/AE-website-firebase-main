import { FaqChatbot } from "@/components/ai/faq-chatbot";
import { CoverageRecommender } from "@/components/ai/coverage-recommender";

export default function FaqPage() {
  return (
    <div className="container py-12 space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          Have questions? Our AI assistant can help. You can also get a personalized coverage recommendation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <FaqChatbot />
        <CoverageRecommender />
      </div>
    </div>
  );
}
