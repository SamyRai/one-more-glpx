import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { usePosts } from '@/hooks/usePosts';
import Container from '@/components/ui/Container';

function FeaturedArticles() {
  const posts = usePosts().slice(0, 3);
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: prefersReduced ? 0 : 0.3 }}
      className="py-16 md:py-24"
    >
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">From the series</h2>
          <Link to="/posts" className="text-sm underline">All posts</Link>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: prefersReduced ? 0 : 0.06 } } }}
          className="mt-8 rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] divide-y"
        >
          {posts.map(p => (
            <motion.div
              key={p.slug}
              variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: prefersReduced ? 0 : 0.28 }}
            >
              <Link to={`/posts/${p.slug}`} className="group block p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-xs text-[var(--muted-2)]">{p.date} · {p.topic}</div>
                    <div className="mt-1 font-medium group-hover:underline">{p.title}</div>
                    <p className="mt-1 text-sm text-[var(--muted)]">{p.excerpt}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--muted-2)] group-hover:text-[var(--accent-700)]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </motion.section>
  );
}

export default FeaturedArticles;