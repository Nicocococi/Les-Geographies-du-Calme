import "./globals.css";

export const metadata = {
  title: "Les Géographies du Calme",
  description: "Premium editorial magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
