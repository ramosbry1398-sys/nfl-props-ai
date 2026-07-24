import "./globals.css";

export const metadata = {
  title: "Gridiron AI | NFL Props",
  description: "Advanced NFL Player Prop Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
