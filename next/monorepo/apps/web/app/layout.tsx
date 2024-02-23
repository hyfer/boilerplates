import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monorepo',
  description: 'Monorepo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
