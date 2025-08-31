import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogPostCardProps {
  post: BlogPost;
  isFeatured?: boolean;
}

export function BlogPostCard({ post, isFeatured = false }: BlogPostCardProps) {
  if (isFeatured) {
    return (
      <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto">
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.dataAiHint}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <Badge variant="secondary" className="mb-4 w-fit">Featured</Badge>
            <h3 className="text-3xl font-bold mb-4 text-foreground">{post.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</div>
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readingTime}</div>
            </div>
            <Link href={`/blog/${post.slug}`} className="font-semibold text-primary inline-flex items-center group">
              Read Full Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              data-ai-hint={post.dataAiHint}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
      </Link>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-foreground flex-grow">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{post.excerpt}</p>
        <div className="border-t pt-4 mt-auto">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center"><User className="w-4 h-4 mr-1.5" /> {post.author}</div>
            <div className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {post.date}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
