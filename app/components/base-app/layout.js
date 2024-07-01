import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
}
