import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

export interface NotionPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export async function getAllNotionPosts(): Promise<Omit<NotionPost, "content">[]> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    return {
      id: page.id,
      slug: props.slug?.rich_text?.[0]?.plain_text ?? "",
      title: props.Name?.title?.[0]?.plain_text ?? "Untitled",
      date: props.Date?.date?.start ?? "",
      author: props.Author?.rich_text?.[0]?.plain_text ?? "MyTron Labs",
      excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? "",
      tags: props.Tags?.multi_select?.map((t: any) => t.name) ?? [],
    };
  }).filter(p => p.slug);
}

export async function getNotionPostBySlug(slug: string): Promise<NotionPost> {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: [
        { property: "slug", rich_text: { equals: slug } },
        { property: "Published", checkbox: { equals: true } },
      ],
    },
  });

  if (!response.results.length) throw new Error(`Post not found: ${slug}`);

  const page = response.results[0] as any;
  const props = page.properties;

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const content = n2m.toMarkdownString(mdBlocks).parent;

  return {
    id: page.id,
    slug: props.slug?.rich_text?.[0]?.plain_text ?? "",
    title: props.Name?.title?.[0]?.plain_text ?? "Untitled",
    date: props.Date?.date?.start ?? "",
    author: props.Author?.rich_text?.[0]?.plain_text ?? "MyTron Labs",
    excerpt: props.Excerpt?.rich_text?.[0]?.plain_text ?? "",
    tags: props.Tags?.multi_select?.map((t: any) => t.name) ?? [],
    content,
  };
}
