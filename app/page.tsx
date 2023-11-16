import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Home() {

  const blogDirectory = "posts"

  const files = fs.readdirSync(path.join("posts"))

  const posts = files.map(filename => {
    const fileContent = fs.readFileSync(path.join("posts", filename), 'utf-8')

    const {data: frontmatter} = matter(fileContent)

    return{
      meta: frontmatter,
      slug: filename.replace('.mdx', '')
    }

  })

  return (
    <main className="flex flex-col">

      <h1 className="text-3xl font-bold">
        Ebenezers Site
      </h1>

      <section className="py-10">
        <h2 className="text-2xl font-bold">
          latest posts
        </h2>
      </section>

      <div className="py-2">
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} passHref key={post.slug}>
            <div className="py-2 flex justify-between align-middle gap-2">
              
              <div>
                <h3 className="text-lg font-bold">
                  {post.meta.title}
                </h3>
                <p className="text-white">{post.meta.date}</p>
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
