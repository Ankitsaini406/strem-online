
import "./globals.css";
import { Josefin_Sans, Open_Sans } from "next/font/google";
import GoogleTagManagerHead from "@/analytics/GtmHead";
import GoogleTagManagerBoady from "@/analytics/GtmBody";
import GoogleAnalytics from "@/analytics/GTag";
import ChilddLayout from "./childlayout";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="StreamOnline – Watch movies, TV series, anime, and more online. Enjoy seamless streaming anytime, anywhere!" />
        <meta name="keywords" content="movies, tv shows, anime, streaming, watch online, free movies, latest series" />
        <meta name="author" content="StreamOnline" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="StreamOnline - Watch Movies, Anime & TV Shows Online" />
        <meta property="og:description" content="Your ultimate destination for streaming movies, TV series, and anime in high quality." />
        <meta property="og:image" content="/meta-image.png" />
        <meta property="og:url" content="https://strem-online.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StreamOnline - Watch Movies, Anime & TV Shows Online" />
        <meta name="twitter:description" content="Enjoy a massive collection of movies, TV series, and anime online, anytime, anywhere!" />
        <meta name="twitter:image" content="/meta-image.png" />

        <link rel="icon" href="/favicon.ico" />
        <title>Stream Online - Watch Movies, Anime & TV Shows</title>
        <GoogleTagManagerHead />
        <GoogleAnalytics />
      </head>

      <body className={`flex flex-col min-h-screen ${josefin.className} ${openSans.className}`}>
        <GoogleTagManagerBoady />
        <ChilddLayout>
            {children}
        </ChilddLayout>
      </body>
    </html>
  );
}
