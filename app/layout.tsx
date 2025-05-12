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
        <title>雨東風ぬめちゃ</title>
      </head>
      <body cz-shortcut-listen="true">
        <div className="container">
          {children}
        </div>
        <footer>
          <p>Ver. 0.1</p>
        </footer>
      </body>
    </html>
  )
}