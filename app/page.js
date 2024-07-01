import Container from "./components/styled/container";
import SolutionsList from "./components/styled/solutionsList";
import { getAllPosts } from "./lib/posts";

export default function Home() {
  const allPosts = getPosts();

  return (
    <div className="py-12">
      <Container>
        <div className="mb-6 text-xl font-bold">PYQ Solutions / NBU</div>
        <SolutionsList data={allPosts} />
      </Container>
    </div>
  );
}

const getPosts = () => {
  const allPosts = getAllPosts();

  return allPosts
    .slice(0)
    .reverse()
    .map(({ data, slug }) => ({
      ...data,
      slug,
    }));
};
