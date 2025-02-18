"use client";
import { Badge } from "@/UI/Components/badge";
import { Button } from "@/UI/Components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/UI/Components/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type BlogCardProps = {
  title: string;
  excerpt?: string;
  category: string;
  date?: string;
  imageUrl?: string;
  readMoreUrl?: string;
  _id?: string;
};

export function BlogCard({
  title,
  excerpt,
  category,
  date,
  imageUrl,
  readMoreUrl,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 bg-background/30 backdrop-blur-sm border-primary/10">
        <div className="relative h-48 sm:h-64">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="secondary"
              className="text-xs font-semibold bg-primary text-primary-foreground"
            >
              {category}
            </Badge>
            <span className="text-sm font-medium text-muted-foreground">
              {date}
            </span>
          </div>
          <h3 className="text-xl font-bold leading-tight mb-2 text-foreground tracking-tight">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground font-medium">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group font-semibold"
          >
            <Link
              href={readMoreUrl as string}
              className="flex items-center justify-center"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
