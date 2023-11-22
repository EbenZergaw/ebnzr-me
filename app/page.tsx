import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import portrait from '../public/images/me.png'
import code from '../public/images/code.svg'
import roundhouse from '../public/images/roundhouse.png'
import jesus from '../public/images/jesus.png'

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
          <div className="text-xl font-semibold">
          Hello I'm 
            <h1>
              <div className="text-3xl text-primary">
                <br />
                Ebenezer Zergabachew</div>
            </h1>
            <br />
            <p className='text-xl'>I'm a student at Virginia Tech with an interest in business and technology.</p>
            <br />
            {/* <p className='text-xl'>I write about:</p> */}
          </div>

          <Image className='lg:w-3/4 ' src={portrait} alt='Ebenezer Zergabachew'></Image>
          
        </section>

        <section className="mt-24">
          <h2 className='text-3xl text-primary font-semibold'>I write about product development...</h2>
          <Image className='lg:w-1/2 mt-10' src={code} alt='Code'></Image>
        </section>


        <section className="mt-24">
          <h2 className='text-3xl text-primary float-right font-semibold'>...martial arts</h2>
          <Image className='lg:w-1/2 mt-10 float-right' src={roundhouse} alt='Roundhouse Kick'></Image>
          <div className="clear-right"></div>
        </section>



      </div>

      
    </main>
  )
}
