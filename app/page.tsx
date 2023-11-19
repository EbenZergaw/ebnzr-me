import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import portrait from '../public/images/me.png'

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


        <section className="lg:grid lg:grid-cols-2">
          <div>
            <h1 className="text-xl font-bold">
              Hello I'm <div className="text-3xl text-primary">Ebenezer Zergabachew</div>
            </h1>
            <br />
            <p className='text-xl'>I'm a student at Virginia Tech with an interest in business and technology.</p>
            <br />
            {/* <p className='text-xl'>I write about:</p> */}
          </div>

          <Image className='lg:w-3/4' src={portrait} alt='Ebenezer Zergabachew'></Image>
          
        </section>
{/* 
        <section className="mt-24">
          <h2 className='text-3xl text-primary'>coding</h2>
        </section>


        <section className="mt-24">
          <h2 className='text-3xl text-primary float-right'>...martial arts</h2>
          <div className="clear-right"></div>
        </section>


        <section className="mt-24">
          <h2 className='text-3xl text-primary'>...Christianity</h2>
        </section> */}



      </div>

      
    </main>
  )
}
