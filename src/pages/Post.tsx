import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { POSTS } from '@/data/posts';
import Container from '@/components/ui/Container';
import { Download, Calendar } from 'lucide-react';

function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find(p => p.slug === slug);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = (post ? post.title : "Post") + " • Week‑to‑Ready";
  }, [post]);

  if (!post) {
    return (
      <Container>
        <div className="py-20 text-center">
          <div className="text-2xl font-semibold">Post not found</div>
          <button onClick={() => navigate("/posts")} className="mt-6 underline">Back to all posts</button>
        </div>
      </Container>
    );
  }

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-xs text-[var(--muted-2)]">{post.date} · {post.topic}</div>
          <h1 className="text-3xl font-semibold mt-1">{post.title}</h1>
          <article className="prose prose-neutral mt-6 max-w-none">
            <p>{post.excerpt}</p>
            <pre className="bg-[var(--code-bg)] text-[var(--text)] p-4 rounded-2xl overflow-auto">
              <code># sample YAML or CEL could go here</code>
            </pre>
            <p>{post.body}</p>
          </article>
          <div className="mt-8 flex items-center gap-3">
            <Link to="/starter-pack" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-600)] hover:bg-[var(--accent-700)] text-white px-4 py-2">
              <Download className="h-4 w-4" />
              Get Starter Pack
            </Link>
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full ring-1 ring-[var(--ring)] px-4 py-2">
              <Calendar className="h-4 w-4" />
              Book call
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Post;