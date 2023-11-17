import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Home() {

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
    <main className="mx-auto">

      <div>

        <h1 className="text-xl font-bold text-ac">
          Hello I'm <div className="text-3xl text-primary">Ebenezer Zergabachew</div>
        </h1>

        <section className="mt-10">

        <p>I'm a student at Virginia Tech</p>
        <br />
        <p>I like startups, technology, and martial arts</p>
          
        </section>

      </div>

      
    </main>
  )
}
