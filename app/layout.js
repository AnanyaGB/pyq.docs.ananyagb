import Layout from "./components/base-app/layout";
import "./globals.css";

export const metadata = {
  title: "PYQ | Docs - AnanyaGB",
  description: "Get solutions to PYQs pertaining to examinations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-indigo-50">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
