import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";

const GA_ID = "G-6XQRVMFJPE";

export const metadata: Metadata = {
  title: "MyTron Labs – The Data Backbone for Physical AI",
  description:
    "MyTron Labs builds large-scale egocentric, multimodal datasets powering robotics, wearable AI, and embodied intelligence. The ChatGPT moment for robotics is near.",
  keywords:
    "Physical AI, robotics data, egocentric datasets, embodied AI, multimodal data, wearable AI",
  icons: {
    icon: "/logo-grey.png",
    apple: "/logo-grey.png",
  },
  openGraph: {
    title: "MyTron Labs – The Data Backbone for Physical AI",
    description: "Powering the next intelligence revolution with real-world egocentric data.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
