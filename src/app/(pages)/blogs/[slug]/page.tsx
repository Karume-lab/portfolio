import { Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import type React from "react";
import { BlogListItem } from "@/components";
import { Badge } from "@/components/ui/badge";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";
import { getBlog, getRelatedBlogs } from "@/lib/blogs";
import { timeSinceOrDate } from "@/lib/utils";

interface BlogDetailParams {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: BlogDetailParams): Promise<Metadata> => {
  const slug = (await params).slug;
  const { compiledMDX } = await getBlog(slug);

  return {
    title: {
      absolute: `Blogs | ${compiledMDX.frontmatter.title}`,
    },
  };
};

const BlogDetailPage: React.FC<BlogDetailParams> = async ({ params }) => {
  const slug = (await params).slug;
  const { compiledMDX } = await getBlog(slug);

  const blog = compiledMDX.frontmatter;

  const relatedBlogs = await getRelatedBlogs(slug, blog.tags, 4);

  return (
    <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 my-24">
      <header className="mb-8">
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-4" />
            {timeSinceOrDate(blog.date)}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="size-4" />
            {blog.readingTime}
          </span>
        </div>

        <TypographyH1 className="text-4xl font-bold">{blog.title}</TypographyH1>

        <TypographyP className="text-muted-foreground">
          {blog.description}
        </TypographyP>

        <div className="flex gap-2 flex-wrap mt-4">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="uppercase">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <article>{compiledMDX.content}</article>

      {relatedBlogs.length > 0 && (
        <section className="mt-24">
          <TypographyH2 className="text-2xl font-semibold mb-4">
            Related Blogs
          </TypographyH2>

          <div className="space-y-6">
            {relatedBlogs.map((blog) => (
              <BlogListItem blog={blog} key={blog.title} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailPage;
