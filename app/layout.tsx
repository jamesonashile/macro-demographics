// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: 'Macro Demographics',
  description: 'Track demographic and macro trends in real time.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}