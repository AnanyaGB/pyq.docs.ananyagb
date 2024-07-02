import Link from "next/link";
import Container from "../styled/container";
import Logo from "./logo";

export default function Footer() {
  return (
    <div className="bg-white border-t">
      <Container>
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="scale-75 opacity-70 max-w-fit">
            <Logo />
          </div>
          <div>
            {" "}
            <Link
              href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1"
              target="_blank"
            >
              <span className="text-sky-600 hover:underline">
                &copy; CC0 1.0 Universal
              </span>{" "}
              &ndash; {new Date().getFullYear()}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
