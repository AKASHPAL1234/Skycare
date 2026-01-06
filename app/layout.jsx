import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider.jsx";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/header.jsx";
import { Toaster } from "sonner";




const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Skycare",
  description: "A doctor and patient consultation app",
};

export default function RootLayout({ children }) {
  return (
     <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
         <Header/>
<main className="min-h-screen">{children}  </main>
<Toaster richColors/>

        <footer className="bg-muted/50 py-2">
          <p className=" container mx-auto px-4 text-center py-4 text-gray-200"> Made with ❤️ by Akash</p>
         
          </footer>

          </ThemeProvider>
        
        
      </body>
    </html>
    </ClerkProvider>
  );
}
