import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

function getPost({ slug }: { slug: string }) {
  // Construct the full path to the markdown file using process.cwd()
  const fullPath = path.join(process.cwd(), "posts", `${slug}.mdx`);

  // Read the markdown file
  const markdownFile = fs.readFileSync(fullPath, "utf-8");

  // Use gray-matter to parse the markdown file
  const { data: frontmatter, content } = matter(markdownFile);

  return {
    frontmatter,
    slug,
    content,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const props = getPost(params);

  return {
    title: props.frontmatter.title,
    tags: props.frontmatter.tags,
    description: props.frontmatter.description,
  };
}

const components = {
    h1: (props: any) => <h1 className="font-bold text-3xl" {...props} />,
    
    h2: (props: any) => <h2 className="font-bold text-2xl mt-4" {...props} />,

    h3: (props: any) => <h2 className="font-bold text-2xl mt-4" {...props} />,
    
    strong: (props: any) => <strong className="font-semibold" {...props} />,
    
    em: (props: any) => <em className="italic text-blue-500" {...props} />,
    
    a: (props: any) => (
      <a 
        className="text-[#1FA9FF] underline hover:text-blue-300" 
        {...props} 
      />
    ),

    u: (props: any) => <u className="underline !text-green-600" {...props} />,

    p: (props: any) => <p className="mb-4 text-lg tracking-normal leading-10" {...props} />,

    img: (props: any) => <img className="my-4" {...props} />,
  };
  
function PostPage({ params }: any) {
  const props = getPost(params);

  return (
    <div className="h-fit">
        <article className=" mx-auto h-fit">
        <h1 className="font-bold text-3xl mb-2">{props.frontmatter.title}</h1>
        <span className="text-lg font-semibold">
            {props.frontmatter.date}
        </span>
        <br />
        <span className="text-accent font-normal">Ebenezer Zergabachew</span>
        <div className="flex mt-2">
                {props.frontmatter.tags?.map((tag: string) => {
                  let tagClass = "";
                  if (tag === "martial arts") {
                    tagClass = "!text-[#F7625C]";
                  } else if (
                    tag === "coding" ||
                    tag === "technology" ||
                    tag === "product" ||
                    tag === "startups"
                  ) {
                    tagClass = "!text-[#1FA9FF]";
                  } else if (tag === "philosophy") {
                    tagClass = "!text-[#FF9900]";
                  } else if (tag == "spirituality") {
                    tagClass = "!text-[#9F5CF7]";
                  }

                  return (
                    <p className={`font-bold ${tagClass} mr-2`} key={tag}>
                      #{tag.replace(/ /g, "-")}
                    </p>
                  );
                })}
              </div>
        <div className="mt-8"></div>

        <MDXRemote
            source={props.content}
            components={components}
        ></MDXRemote>
        </article>
    </div>
  );
}

export default PostPage;
