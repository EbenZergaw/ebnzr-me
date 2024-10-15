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

  function standardizeDate(dateStr: string): string {
    if (!dateStr) {
      console.error("Date string is missing in frontmatter");
      return "1970-01-01"; // Fallback date (can be anything suitable for your use case)
    }

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
    if (parts.length !== 3) {
      console.error("Invalid date format in frontmatter:", dateStr);
      return "1970-01-01"; // Fallback date for unexpected formats
    }

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

  const sortedPosts = posts.sort((a, b) => {
    const dateA = a.meta.date ? parseDate(a.meta.date) : new Date(0);
    const dateB = b.meta.date ? parseDate(b.meta.date) : new Date(0);
    return dateB.getTime() - dateA.getTime(); // Descending order
  });

  return (
    <div className="mx-auto">
      <h1 className="text-3xl text-primary font-bold">Blog</h1>
      {/* <p className="text-white">Here are my writings.</p> */}

      <div className="mx-auto mt-10">
        {sortedPosts.map((post) => (
          <Link href={`/posts/${post.slug}`} passHref key={post.slug} className="cursor-pointer">
            <div className="
            py-3 cursor-pointer
            hover:border-l-2 hover:dark:border-white hover:border-black hover:pl-2 hover:ml-[-8px] hover:transition-all
            "
            >
              <div className="lg:flex items-center justify-between">
                <h3 className="text-lg font-medium text-primary lg:w-[70%] leading-6">
                  {post.meta.title}
                </h3>
                <span className="text-secondary font-light !dark:text-gray-300 text-right">
                  {post.meta.date}
                </span>
              </div>

              <div className="flex">
                {post.meta.tags?.map((tag: string) => {
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
                  }

                  return (
                    <p className={`font-bold ${tagClass} mr-2`} key={tag}>
                      #{tag.replace(/ /g, "-")}
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
