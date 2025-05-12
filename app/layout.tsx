import React from 'react'
import './styles/app.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
        <div className="container">{children}</div>
        <footer>
          <p>Ver. 0.1</p>
        </footer>
      </body>
    </html>
  );
}