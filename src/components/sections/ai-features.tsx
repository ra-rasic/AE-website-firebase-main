import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InstantQuote } from "@/components/ai/instant-quote";
import { CoverageRecommender } from "@/components/ai/coverage-recommender";
import { FaqChatbot } from "@/components/ai/faq-chatbot";
import { SeoGenerator } from "@/components/ai/seo-generator";
import { Wand2, MessageCircle, FileCheck, Search } from "lucide-react";

export function AiFeatures() {
  return (
    <section id="quote" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">AI-Powered Insurance Tools</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Leverage our smart tools for instant quotes, personalized recommendations, and quick answers to your insurance questions.
          </p>
        </div>
        <Tabs defaultValue="quote" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto -mx-1">
            <TabsTrigger value="quote" className="py-2 flex-wrap h-auto"><Wand2 className="mr-2" /> Instant Quote</TabsTrigger>
            <TabsTrigger value="recommend" className="py-2 flex-wrap h-auto"><FileCheck className="mr-2" /> Recommendations</TabsTrigger>
            <TabsTrigger value="faq" className="py-2 flex-wrap h-auto"><MessageCircle className="mr-2" /> FAQ Chatbot</TabsTrigger>
            <TabsTrigger value="seo" className="py-2 flex-wrap h-auto"><Search className="mr-2" /> SEO Content</TabsTrigger>
          </TabsList>
          <TabsContent value="quote" className="mt-6">
            <InstantQuote />
          </TabsContent>
          <TabsContent value="recommend" className="mt-6">
            <CoverageRecommender />
          </TabsContent>
          <TabsContent value="faq" className="mt-6">
            <FaqChatbot />
          </TabsContent>
          <TabsContent value="seo" className="mt-6">
            <SeoGenerator />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
