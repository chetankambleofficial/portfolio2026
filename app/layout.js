import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import CursorTextEffect from "./components/CursorTextEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chetan Prakash Kamble — Full Stack Developer",
  description: "Portfolio of Chetan Prakash Kamble, Full Stack Developer skilled in React.js, Node.js, Django, Flask and cloud technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col cursor-none">
        <Cursor />
        <CursorTextEffect />
        {children}
      </body>
    </html>
  );
}
