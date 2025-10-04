import * as React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePosts } from "@/hooks/usePosts";
import { type Post } from "@/types";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function ArticleItem({ post }: { post: Post }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={itemVariants} className="relative">
      <Link to={`/posts/${post.slug}`} className="group block p-5">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">
              {post.date} &middot; {post.topic}
            </p>
            <h3 className="mt-1 font-medium group-hover:underline">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
      </Link>
    </motion.div>
  );
}

function FeaturedArticles() {
  const posts = usePosts().slice(0, 3);
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.06,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReduced ? 0 : 0.3 }}
      className="py-16 lg:py-24"
    >
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">From the series</h2>
          <Button variant="link" asChild>
            <Link to="/posts">All posts</Link>
          </Button>
        </div>
        <Card className="mt-8 p-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="divide-y"
          >
            {posts.map((post) => (
              <ArticleItem key={post.slug} post={post} />
            ))}
          </motion.div>
        </Card>
      </Container>
    </motion.section>
  );
}

export { FeaturedArticles };
