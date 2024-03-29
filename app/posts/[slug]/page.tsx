
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

function getPost({slug}: {slug: string}) {
  // Construct the full path to the markdown file using process.cwd()
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  
  // Read the markdown file
  const markdownFile = fs.readFileSync(fullPath, 'utf-8');
  
  // Use gray-matter to parse the markdown file
  const {data: frontmatter, content} = matter(markdownFile);
  
  return {
      frontmatter,
      slug,
      content
  };
}


export async function generateMetadata({ params }: { params: { slug: string } }) {

    const props = getPost(params)

    return {
      title: props.frontmatter.title,
      description: props.frontmatter.description
    }
  }


function PostPage({params} : any) {
  
    const props = getPost(params)
    
  return (
    <article className='prose lg:prose-xl mx-auto'>
        <h1 className='text-primary'>{props.frontmatter.title}</h1>
        <span className="text-secondary font-semibold">{props.frontmatter.date}</span>
        <br />
        <span className="text-accent font-normal">Ebenezer Zergabachew</span>
        <MDXRemote 
          source={props.content}
          components={
            {strong: props => <span className='text-accent underline font-semibold'>{props.children}</span>}
          }
        ></MDXRemote>
    </article>
  )
}

export default PostPage