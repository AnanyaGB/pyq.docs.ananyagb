import Container from "@/app/components/styled/container";
import { getSemAbbr } from "@/app/components/styled/solutionsList";
import { getAllPosts } from "@/app/lib/posts";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";

const getData = (slug) => {
  const basePath = `_data/${slug}.md`;
  const filePath = path.join(process.cwd(), basePath);
  const file = fs.readFileSync(filePath);
  const { data, content } = matter(file);
  return { data, content };
};

const Metadata = ({ data }) => {
  const Block = ({ tag, children, span }) => {
    return (
      <div
        className={`flex flex-col gap-2 ${
          span === 2 ? "md:col-span-2" : "col-span-1"
        }`}
      >
        <span className="text-xs uppercase">{tag}</span>
        <span className="md:text-lg">{children}</span>
      </div>
    );
  };

  const metadata = [
    ["Code", data.code, 1],
    ["Subject", data.subject, 1],
    ["Title", data.title, 2],
    ["Semester", getSemAbbr(data.semester), 1],
    ["Year", data.year, 1],
    [
      "Time",
      `${data.time.toString().split(".")[0]} hours ${
        data.time.toString().split(".").length > 1
          ? data.time.toString().split(".")[1] + " minutes"
          : ""
      }`,
      1,
    ],
    ["F.M.", data.fm, 1],
  ];

  return (
    <div className="bg-white rounded-lg border p-4 -mx-4 md:mx-0 md:p-8 grid grid-cols-2 gap-8">
      {metadata.map(([tag, datum, span], index) => (
        <Block tag={tag} span={span} key={index}>
          {datum}
        </Block>
      ))}
    </div>
  );
};

export default function Solutions({ params }) {
  const { slug } = params;
  const { data, content } = getData(slug);
  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:flex-1 w-full lg:sticky top-28 self-start">
            <div className="text-xl mb-6 font-bold">Metadata</div>
            <Metadata data={data} />
          </div>
          <div className="lg:flex-[2]">
            <div className="mb-6 text-xl font-bold">Solution</div>
            <div className="bg-white -mx-4 rounded-lg border p-4 md:p-8 md:py-12">
              <div className="mb-12 text-center text-xs py-1 italic bg-yellow-200 uppercase overflow-hidden relative h-6">
                <div className="flex gap-2 absolute top-1/2 -left-4 -translate-y-1/2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <div className="flex-shrink-0" key={index}>
                      Start of document
                    </div>
                  ))}
                </div>
              </div>
              <div className="prose mx-auto prose-h2:text-center prose-h6:text-center prose-headings:font-serif prose-p:font-cursive prose-p:text-xl prose-h3:mb-6 prose-h3:text-[1.15rem] prose-li:font-cursive prose-li:text-xl prose-table:font-cursive prose-td:text-xl prose-th:text-xl prose-th:font-cursive prose-table:max-w-fit prose-th:text-left">
                <Markdown
                  remarkPlugins={[remarkMath, remarkGfm]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {content}
                </Markdown>
              </div>
              <div className="mt-12 text-center text-xs py-1 italic bg-yellow-200 uppercase overflow-hidden relative h-6">
                <div className="flex gap-2 absolute top-1/2 -left-4 -translate-y-1/2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <div className="flex-shrink-0" key={index}>
                      End of document
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export function generateStaticParams() {
  const getPosts = getAllPosts();
  return getPosts.map(({ slug }) => ({ slug }));
}
