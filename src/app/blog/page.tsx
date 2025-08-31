import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { Phone } from "lucide-react";
import { Metadata } from 'next';
import { blogPosts } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
    title: "Florida Insurance Blog | A & E Insurance Group",
    description: "Your source for expert insurance advice in Florida. Read our blog for tips on auto, home, business, and flood insurance to protect what matters most.",
    keywords: "Florida insurance blog, insurance tips, homeowners insurance advice, auto insurance guide, business insurance Florida"
};

const featuredPost = blogPosts.find(p => p.featured);
const recentPosts = blogPosts.filter(p => !p.featured);

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
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
              <BlogPostCard key={post.slug} post={post} />
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
