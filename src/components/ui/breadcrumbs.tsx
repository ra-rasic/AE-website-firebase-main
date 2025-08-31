
"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <section className="bg-secondary border-b">
        <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className={cn('py-3', className)}>
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                {items.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                    {item.href ? (
                    <Link href={item.href} className="hover:text-primary transition-colors">
                        {item.label}
                    </Link>
                    ) : (
                    <span className="font-semibold text-foreground">{item.label}</span>
                    )}
                    {index < items.length - 1 && <ChevronRight className="h-4 w-4 flex-shrink-0" />}
                </li>
                ))}
            </ol>
            </nav>
        </div>
    </section>
  );
}
