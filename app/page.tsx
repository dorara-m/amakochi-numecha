import React from 'react'
import Image from 'next/image'
import './styles/top.scss'
import Button from './components/button/button'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "雨東風ぬめちゃ 朝型になりたい狼人間VTuber☔️🍃🐺",
  description: "雨東風ぬめちゃの公式サイトです。",
  openGraph: {
    title: "雨東風ぬめちゃ 朝型になりたい狼人間VTuber☔️🍃🐺",
    description: "雨東風ぬめちゃの公式サイトです。",
    url: "https://amakochi-numecha.vercel.app",
    type: "website",
  },
};

export default function Page() {
  const now = new Date();
  const startOfWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - now.getDay() + 1
  );
  const startDate = startOfWeek
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "/");
  return (
    <>
      <h1 className="hidden">雨東風ぬめちゃ公式サイト</h1>
      <div className="schedule">
        <h2>
          今週
          <span className="start-date">{`（${startDate}〜）`}</span>
          のスケジュール
        </h2>
        <img src="/images/schedule.jpeg" alt="今週のスケジュール" />
        <div className="arrow">↓</div>
      </div>
      <div className="profile">
        <h2 className="hidden">プロフィール</h2>
        <div className="profile-img">
          <Image
            src="/images/icon-bg2.png"
            alt="logo"
            width={250}
            height={250}
          />
        </div>
        <div className="profile-name">
          <h2>
            <span>雨東風ぬめちゃ</span> / Amakochi Numecha
          </h2>
          <p>朝型になりたい狼人間VTuber☔️🍃🐺</p>
          <p>
            雨が降りしきる町からやってきた、狼人間。
            <br />
            人に囲まれて育ったので人懐っこく温厚。あと寂しがり屋で褒められたがり。
            <br />
            紫色はとある雨好きなドラゴンの血が混じっているから、という噂。
          </p>
        </div>
        <div className="button-wrap">
          <Button text="ぬめちゃの配信ルール" href="/rules" />
          <Button
            text="ぬめちゃが歌える曲"
            href="https://luxuriant-clef-fcf.notion.site/e6e355b74f184f4ab1d36e892b0a7ea7?v=98fe9083976a46f99ac72c53a0bc354b&pvs=74"
            isBlank={true}
          />
        </div>
      </div>
    </>
  );
}