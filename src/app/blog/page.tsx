import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { Phone } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Florida Insurance Blog | A & E Insurance Group",
    description: "Your source for expert insurance advice in Florida. Read our blog for tips on auto, home, business, and flood insurance to protect what matters most.",
    keywords: "Florida insurance blog, insurance tips, homeowners insurance advice, auto insurance guide, business insurance Florida"
};

const blogPosts = [
  {
    title: "Hurricane Preparedness: Is Your Homeowners Insurance Ready?",
    excerpt: "Hurricane season is a major concern for Florida homeowners. Learn what your policy should cover and how to prepare your home and your insurance for a storm.",
    imageUrl: "https://picsum.photos/800/500",
    dataAiHint: "stormy sky",
    author: "Emily Johnson",
    date: "2024-07-18",
    readingTime: "7 min read",
    link: "/blog/hurricane-insurance-preparedness",
    featured: true
  },
  {
    title: "Understanding Florida's No-Fault Car Insurance Law",
    excerpt: "Florida's no-fault insurance system can be confusing. We break down what PIP coverage means for you and why it's a crucial part of your auto policy.",
    imageUrl: "https://picsum.photos/600/400",
    dataAiHint: "car road",
    author: "Alex Martinez",
    date: "2024-07-22",
    readingTime: "5 min read",
    link: "/blog/florida-no-fault-law"
  },
  {
    title: "The Ultimate Guide to Flood Insurance in Southwest Florida",
    excerpt: "Standard home insurance doesn't cover floods. Find out why separate flood insurance is essential for protecting your property in Naples, Fort Myers, and beyond.",
    imageUrl: "https://picsum.photos/600/401",
    dataAiHint: "flooded street",
    author: "Emily Johnson",
    date: "2024-07-15",
    readingTime: "6 min read",
    link: "/blog/guide-to-flood-insurance"
  },
  {
    title: "Top 5 Insurance Mistakes Florida Small Business Owners Make",
    excerpt: "Avoid common pitfalls that could leave your business vulnerable. Learn about essential coverages like BOP, workers' comp, and cyber liability for your Florida enterprise.",
    imageUrl: "https://picsum.photos/600/402",
    dataAiHint: "small business",
    author: "David Chen",
    date: "2024-07-10",
    readingTime: "8 min read",
    link: "/blog/small-business-insurance-mistakes"
  },
  {
    title: "Do You Need Umbrella Insurance in Florida? Here's How to Decide.",
    excerpt: "An umbrella policy provides crucial extra liability protection. We explain how it works and who benefits most from this affordable but powerful coverage.",
    imageUrl: "https://picsum.photos/600/403",
    dataAiHint: "family beach",
    author: "Alex Martinez",
    date: "2024-07-05",
    readingTime: "5 min read",
    link: "/blog/do-you-need-umbrella-insurance"
  },
  {
    title: "Navigating Condo Insurance (HO-6) in Collier and Lee County",
    excerpt: "Condo living is popular in SWFL, but the insurance can be tricky. Understand what your master policy covers and what you need to protect with an HO-6 policy.",
    imageUrl: "https://picsum.photos/600/404",
    dataAiHint: "condo building",
    author: "Emily Johnson",
    date: "2024-06-28",
    readingTime: "6 min read",
    link: "/blog/condo-insurance-guide"
  }
];

const featuredPost = blogPosts.find(p => p.featured);
const recentPosts = blogPosts.filter(p => !p.featured);

export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">A&E Insurance Blog</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Expert insights and practical advice to help you navigate the Florida insurance landscape 
            and protect what matters most.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Post</h2>
            <BlogPostCard post={featuredPost} isFeatured />
          </div>
        </section>
      )}

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.link} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Have an Insurance Question?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our expert agents are ready to provide the answers you need. Contact us today 
            for personalized advice and a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:239-591-1225">
                <Phone className="w-5 h-5 mr-2" />
                Call (239) 591-1225
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
