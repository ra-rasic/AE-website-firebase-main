import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';
import { Metadata } from 'next';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, User, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Cta } from '@/components/sections/cta';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://aeinsurancefl.com/blog/${post.slug}`,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.imageUrl],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const recentPosts = blogPosts.filter(p => p.slug !== params.slug).slice(0, 3);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.title }
      ]} />
      <article>
        <header className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto">{post.title}</h1>
                <div className="flex items-center justify-center space-x-6 text-sm text-primary-foreground/80 mt-6">
                    <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</div>
                    <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</div>
                    <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readingTime}</div>
                </div>
            </div>
        </header>

        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <main className="lg:col-span-8">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
                        <Image
                        src={post.imageUrl}
                        alt={post.title}
                        data-ai-hint={post.dataAiHint}
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>
                    <div className="prose prose-lg max-w-none text-muted-foreground">
                        {post.content}
                    </div>
                    <div className="mt-8 pt-6 border-t">
                        <h3 className="text-lg font-semibold mb-2">Tags:</h3>
                        <div className="flex flex-wrap gap-2">
                        {post.tags?.map(tag => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                        </div>
                    </div>
                </main>
                <aside className="lg:col-span-4 space-y-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage src={`https://i.pravatar.cc/80?u=${post.author}`} alt={post.author} />
                                    <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold text-lg">{post.author}</h3>
                                    <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{post.authorBio}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-lg mb-4">Recent Posts</h3>
                            <ul className="space-y-4">
                                {recentPosts.map(p => (
                                    <li key={p.slug}>
                                        <Link href={`/blog/${p.slug}`} className="group flex items-start space-x-3">
                                            <div className="relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                                                <Image src={p.imageUrl} alt={p.title} fill className="object-cover"/>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">{p.title}</h4>
                                                <p className="text-xs text-muted-foreground mt-1">{p.date}</p>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    </article>
    <Cta />
    </>
  );
}
