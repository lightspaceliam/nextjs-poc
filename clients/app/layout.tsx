import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import theme from "./styles/theme";
import { ThemeProvider } from '@mui/material/styles';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { StyledBox } from './styles/layout';

import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <StyledBox>
              {children}
            </StyledBox>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
