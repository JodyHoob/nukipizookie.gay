import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider"

/*const epilogue = Epilogue({ 
  weight: "100"
});*/

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});


export const metadata: Metadata = {
  title: "Nuki ^w^",
  description: "Made With Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      //className={`text-center ${epilogue.className}`}
      className={`${epilogue.variable} text-center`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}