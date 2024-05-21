import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

const getPostContent = (slug: string) => {
  const folder = 'blogposts';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8')
  return content;
}

export default function BlogPost({params}: {params: {slug: string}}) {
  const slug = params.slug
  const content = getPostContent(slug)

  return (
    <div>
      <h1>{slug}</h1>
      <Markdown>{content}</Markdown>
      <Link href="/blog">Back</Link>
    </div>
  )
}