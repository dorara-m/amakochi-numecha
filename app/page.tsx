import React from 'react'
import Image from 'next/image'
import './styles/top.scss'
import Button from './components/button/button'

export default function Page() {
  return (
    <>
      <h1 className="hidden">雨東風ぬめちゃ公式サイト</h1>
      <div className="profile">
        <div className="profile-img">
          <Image src="/images/icon-bg2.png" alt="logo" width={250} height={250} />
        </div>
        <div className="profile-name">
          <h2><span>雨東風ぬめちゃ</span> / Amakochi Numecha</h2>
          <p>朝型になりたい狼人間Vtuber☔️🍃🐺</p>
          <p>雨が降りしきる町からやってきた、狼人間。<br />人に囲まれて育ったので人懐っこく温厚。あと寂しがり屋で褒められたがり。<br />紫色はとある雨好きなドラゴンの血が混じっているから、という噂。</p>
        </div>
        <div className="button-wrap">
          <Button text="ぬめちゃの配信ルール" href="/rules" />
          <Button text="ぬめちゃが歌える曲" href="https://luxuriant-clef-fcf.notion.site/e6e355b74f184f4ab1d36e892b0a7ea7?v=98fe9083976a46f99ac72c53a0bc354b&pvs=74" isBlank={true} />
        </div>
      </div>
    </>
  )
}