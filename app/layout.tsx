import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'BALANS AI — AI-Powered Business Operating System', description: 'Buxgalteriya, savdo, ombor, ishlab chiqarish va AI CFO — bitta platformada.', openGraph: { title: 'BALANS AI', description: 'Biznesingizni boshqarishning aqlli markazi.' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="uz"><body>{children}</body></html>; }
