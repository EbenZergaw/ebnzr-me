import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
function page() {
    const files = fs.readdirSync(path.join("posts"))

    const posts = files.map(filename => {
        const fileContent = fs.readFileSync(path.join("posts", filename), 'utf-8')

        const {data: frontmatter} = matter(fileContent)

        return {
            meta: frontmatter,
            slug: filename.replace('.mdx', '')
        }
    })

    // Function to convert the custom date string to a standard format
    function standardizeDate(dateStr: string): string {
        const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
        const parts = dateStr.split(" ");
        const month = months.indexOf(parts[0]) + 1;
        const day = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        return `${year}-${month}-${day}`;
    }

    // Function to convert date string to Date object
    function parseDate(dateStr: string): Date {
        const standardizedDateStr = standardizeDate(dateStr);
        return new Date(standardizedDateStr);
    }

    // Sort the posts by date in descending order
    const sortedPosts = posts.sort((a, b) => {
        const dateA = parseDate(a.meta.date);
        const dateB = parseDate(b.meta.date);
        return dateB.getTime() - dateA.getTime(); // Descending order
    });
  return (
    <div>
        <h1 className="text-3xl text-primary font-bold">Posts</h1>
        
        <div className="lg:w-1/2">
            {sortedPosts.map((post) => (
                <Link href={`/posts/${post.slug}`} passHref key={post.slug}>
                    <div className='transition-all border hover:border-primary border-base-100 rounded-lg my-4 p-2 mb-4'>
                        <h3 className="text-lg font-bold text-primary">
                            {post.meta.title}
                        </h3>
                        <span className="text-secondary">{post.meta.date}</span>
                        <div>
                            {post.meta.tags.map((tag: string) => {
                                    
                                let tagClass = ''
                                if(tag == 'martial arts'){
                                    tagClass = 'badge-error'
                                } else if (tag == 'coding'){
                                    tagClass = 'badge-info'
                                } else {
                                    tagClass = 'badge-accent'
                                }

                                return(
                                <p className={`badge ${tagClass} mr-2`} key={tag}>{tag}</p>
                                )
                            })}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default page