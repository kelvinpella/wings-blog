import NavBar from "@/components/NavBar/NavBar";
import "@/public/globals.css";
import Footer from "@/components/Footer/Footer";
import MainContent from "@/components/MainContent/MainContent";
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
      <body className="text-sm md:text-base lg:text-lg bg-ghost-white font-work-sans min-h-screen flex flex-col justify-between">
        <NavBar />
        {/* @ts-expect-error Async Server Component */}
        <MainContent>{children}</MainContent>
        <Footer />
      </body>
    </html>
  );
}
