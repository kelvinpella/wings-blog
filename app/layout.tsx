import NavBar from "@/components/NavBar/NavBar";
import "@/public/globals.css";
import Footer from "@/components/Footer/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Wings - Your Aviation Blog</title>
      </head>
      <body className="md:text-lg bg-ghost-white font-work-sans">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
