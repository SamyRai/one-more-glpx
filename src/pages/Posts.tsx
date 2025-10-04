import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { usePosts } from '@/hooks/usePosts';
import { Page } from '@/components/ui/Page';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

function Posts() {
  useEffect(() => {
    document.title = 'Articles • Week-to-Ready';
  }, []);
  const posts = usePosts();

  return (
    <Page>
      <Container>
        <Page.Header>
          <div className="flex w-full items-center justify-between">
            <div>
              <Page.Title>Articles & Posts</Page.Title>
              <Page.Description>
                Insights on Kubernetes, security, and compliance.
              </Page.Description>
            </div>
            <Button asChild>
              <Link to="/starter-pack">
                <Download className="mr-2 h-4 w-4" />
                Get Starter Pack
              </Link>
            </Button>
          </div>
        </Page.Header>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <Card
              key={p.slug}
              as={Link}
              to={`/posts/${p.slug}`}
              className="flex flex-col justify-between transition-transform hover:scale-[1.02]"
            >
              <CardHeader>
                <CardDescription>
                  {p.date} · {p.topic}
                </CardDescription>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              </CardContent>
              <CardFooter>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read post <ArrowRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Page>
  );
}

export default Posts;