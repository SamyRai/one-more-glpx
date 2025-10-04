import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { setMetaDescription } from "@/lib/meta";
import { POSTS } from "@/data/posts";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Download, Calendar } from "lucide-react";

function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = POSTS.find((p) => p.slug === slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      document.title = `${post.title} • Week‑to‑Ready`;
      setMetaDescription(post.excerpt);
    } else {
      document.title = "Post not found • Week‑to‑Ready";
    }
  }, [post]);

  if (!post) {
    return (
      <Container>
        <div className="py-20 text-center">
          <div className="text-2xl font-semibold">Post not found</div>
          <Button variant="link" onClick={() => navigate("/posts")}>
            Back to all posts
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-sm text-muted-foreground">
            {post.date} · {post.topic}
          </div>
          <h1 className="mt-1 text-3xl font-semibold">{post.title}</h1>
          <article className="prose prose-neutral mt-6 max-w-none dark:prose-invert">
            <p>{post.excerpt}</p>
            <pre>
              <code>{post.body}</code>
            </pre>
          </article>
          <div className="mt-8 flex items-center gap-3">
            <Button asChild>
              <Link to="/starter-pack">
                <Download className="mr-2 h-4 w-4" />
                Get Starter Pack
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/book">
                <Calendar className="mr-2 h-4 w-4" />
                Book call
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Post;
