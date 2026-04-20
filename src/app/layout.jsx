import { Inter, Instrument_Serif } from 'next/font/google';
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrumentSerif = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-instrument'
});

export const metadata = {
  title: "Tinted Media",
  description: "The new wave of digital storytelling. High-end marketing, content, and branding for the next generation.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased font-sans">
        <CustomCursor />
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
