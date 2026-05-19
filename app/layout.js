export const metadata = {
  title: "Les Géographies du Calme",
  description: "Premium travel editorial magazine",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
