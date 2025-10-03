import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { usePosts } from '@/hooks/usePosts';
import Container from '@/components/ui/Container';

function Posts() {
  useEffect(() => { document.title = "Articles • Week‑to‑Ready"; }, []);
  const posts = usePosts();
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Articles & posts</h1>
            <Link to="/starter-pack" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-4 py-2"><Download className="h-4 w-4"/>Get Starter Pack</Link>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {posts.map(p => (
              <Link key={p.slug} to={`/posts/${p.slug}`} className="rounded-[var(--radius,14px)] ring-1 ring-[var(--ring)] bg-[var(--surface)] p-5 hover:bg-[var(--bg-soft)] transition">
                <div className="text-xs text-[var(--muted-2)]">{p.date} · {p.topic}</div>
                <div className="mt-1 font-medium">{p.title}</div>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.excerpt}</p>
                <div className="mt-3 text-sm inline-flex items-center gap-1 text-[var(--accent-700)]">Read <ArrowRight className="h-4 w-4"/></div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Posts;