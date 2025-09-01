import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Larry Mwansa | Disruptors",
  description: "The Scepter Movement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js-focus-visible" data-js-focus-visible>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav/>
        <main>
        {children}
        </main>
        <Footer/>
        {/* Script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme && savedTheme !== 'system') {
                    document.documentElement.setAttribute('data-theme', savedTheme);
                  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </body>
    </html>
  );
}
