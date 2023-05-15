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
      <body className="text-sm md:text-base lg:text-lg bg-ghost-white font-work-sans min-h-screen flex flex-col justify-between">
        <NavBar />
        <main className="w-full lg:max-w-screen-xl lg:mx-auto px-2 py-2 md:px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
