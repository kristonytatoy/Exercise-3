import "./globals.css";

export const metadata = {
  title: "NoteApp",
  description: "Simple Note Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}