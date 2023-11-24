
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

// export async function generateStaticParams(){

//     const files = fs.readdirSync(path.join('posts'))

//     const paths = files.map(filename => ({
//         slug: filename.replace('.mdx', '')
//     }))
//     console.log(paths);
//     return paths
// }

function getPost({slug}: {slug: string}){

    const markdownFile = fs.readFileSync(path.join('public/posts', slug + '.mdx'), 'utf-8')
    
    const {data: frontmatter, content} = matter(markdownFile)
    return{
        frontmatter,
        slug,
        content
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {

    const props = getPost(params)

    return {
      title: props.frontmatter.title,
      description: props.frontmatter.description
    }
  }


function PostPage({params} : any) {
  console.log(params)
    const props = getPost(params)
    
  return (
    <article className='prose lg:prose-xl mx-auto'>
        <h1 className='text-primary'>{props.frontmatter.title}</h1>
        <span className="text-secondary font-semibold">{props.frontmatter.date}</span>
        <MDXRemote 
          source={props.content}
          components={
            {strong: props => <span className='text-primary font-semibold'>{props.children}</span>}
          }
        ></MDXRemote>
    </article>
  )
}

export default PostPage