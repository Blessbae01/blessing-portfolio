import type { Metadata } from 'next';
import '../css/styles.css';

export const metadata: Metadata = {
  title: 'Blessing Uzoukwu | Software Engineer',
  description: 'Full-stack developer specializing in MERN stack. Building innovative solutions with React, Node.js, and MongoDB.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💻</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
