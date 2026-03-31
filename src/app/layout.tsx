import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
