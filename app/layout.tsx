import Image from "next/image";
import React from "react";
import "./styles/app.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://amakochi-numecha.vercel.app/ogp.jpg"
        />
        <meta property="og:site_name" content="雨東風ぬめちゃ" />
        <meta property="og:locale" content="ja_JP" />
      </head>
      <body cz-shortcut-listen="true">
        <header>
          <a href="/">
            <div className="icon">
              <Image
                src="/images/icon-bg2.png"
                alt="雨東風ぬめちゃ"
                width={40}
                height={40}
              />
            </div>
            <p>Amakochi Numecha</p>
          </a>
        </header>
        <div className="container">{children}</div>
        <footer>
          <p>Ver. 0.2</p>
        </footer>
      </body>
    </html>
  );
}
