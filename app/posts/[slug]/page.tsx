
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

export async function generateStaticParams(){

    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map(filename => ({
        sluge: filename.replace('mdx', '')
    }))
    return paths
}

function getPost({slug}: {slug: string}){
    const markdownFile = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')
    
    const {data: frontmatter, content} = matter(markdownFile)
    return{
        frontmatter,
        slug,
        content
    }
}

export async function generateMetadata({ params }) {
    const props = getPost(params)
    return {
      title: props.frontmatter.title,
      description: props.frontmatter.description
    }
  }


function PostPage({params} : any) {
    const props = getPost(params)
  return (
    <article className='prose lg:prose-xl'>
        <h1>{props.frontmatter.title}</h1>

        <MDXRemote source={props.content}></MDXRemote>
    </article>
  )
}

export default PostPage