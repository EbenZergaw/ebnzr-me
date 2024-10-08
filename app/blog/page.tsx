import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
function page() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(fileContent);

    return {
      meta: frontmatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  // Function to convert the custom date string to a standard format
  function standardizeDate(dateStr: string): string {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
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
    <div className="w-[70%] mx-auto">
      <h1 className="text-3xl text-primary font-bold">Blog</h1>

      <div className="w-[100%] mx-auto">
        {sortedPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            passHref
            key={post.slug}
          >
            <div className="my-10">
                <div className="flex items-center justify-between">
                <h3 className="text-lg font-normal hover:font-medium text-primary">
                    {post.meta.title}
                </h3>
                <span className="text-secondary font-light !dark:text-gray-300">{post.meta.date}</span>
                </div>
                <div className="flex">
                {post.meta.tags.map((tag: string) => {
                    let tagClass = "";
                    if (tag == "martial arts") {
                    tagClass = "!text-[#F7625C]";
                    } else if (
                    tag == "coding" ||
                    tag == "technology" ||
                    tag == "product" ||
                    tag == "startups"
                    ) {
                    tagClass = "!text-[#1FA9FF]";
                    } else if (tag == "philosophy") {
                    tagClass = "!text-[#FF9900]";
                    }

                    return (
                    <p className={`font-thin ${tagClass} mr-2`} key={tag}>
                        #{tag}
                    </p>
                    );
                })}
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
