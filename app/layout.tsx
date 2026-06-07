import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GXON HR Dashboard",
  description: "GXON HR Dashboard root page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
