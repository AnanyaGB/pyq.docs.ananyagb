import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getAllPosts() {
  const contentDirectory = "_data";
  const allPosts = fs.readdirSync(contentDirectory);

  return allPosts.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContents = fs.readFileSync(
      path.join(contentDirectory, fileName),
      "utf-8"
    );
    const { data, content } = matter(fileContents);

    return {
      data,
      content,
      slug,
    };
  });
}
