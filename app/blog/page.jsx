import fs from 'fs';
import Link from 'next/link';

const getPostMetadata = () => {
  const folder = 'blogposts';
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter(file => file.endsWith(".md"));
  const slugs = markdownFiles.map(files => files.replace(".md", ""))
  return slugs;
}

export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug, i) => (
    <div>
      <Link key={i} href={`/blog/${slug}`}>
        {slug}
      </Link>
    </div>
  ));

  return <div>{postPreviews}</div>
}
