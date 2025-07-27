import Image from "next/image";
import "./styles/top.scss";
import Button from "./components/button/button";
import { Metadata } from "next";
import Schedule from "./components/schedule/schedule";

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
  return (
    <>
      <h1 className="hidden">雨東風ぬめちゃ公式サイト</h1>
      <Schedule />
      <section className="profile">
        <h2>プロフィール</h2>
        <div className="profile-img">
          <Image
            src="/images/icon-bg2.png"
            alt="logo"
            width={250}
            height={250}
          />
        </div>
        <div className="profile-name">
          <div className="profile-name-text">
            <span>雨東風ぬめちゃ</span> <br />
            Amakochi Numecha
          </div>
          <div className="text-wrap">
            <p>朝型になりたい狼人間VTuber☔️🍃🐺</p>
            <p>
              雨が降りしきる町からやってきた、狼人間。
              <br />
              人に囲まれて育ったので人懐っこく温厚。あと寂しがり屋で褒められたがり。
              <br />
              紫色はとある雨好きなドラゴンの血が混じっているから、という噂。
            </p>
          </div>
        </div>
      </section>
      <section className="membership -center">
        <h2>メンバーシップについて</h2>
        <div className="text-wrap">
          <p>
            YouTubeメンバーシップを月額290円で開設しています。
            <br />
            コメント欄でバッジ表示、カスタム絵文字が使えるようになります。
            <br />
            ぬめちゃを「たくさん応援したい！」という気持ちを受け取る目的で運営しておりますので、限定のコンテンツは少なめの予定です。
          </p>
        </div>
        <Button
          text="メンバーシップに参加する！"
          href="https://www.youtube.com/channel/UCR5b4PoQ3ainPNFD5bk7enA/join"
          isBlank
        />
      </section>
      <section className="hashtag">
        <h2>ハッシュタグ</h2>
        <div className="text-wrap">
          <p>ハッシュタグは以下があります。適宜使ってください</p>
          <ul>
            <li>配信告知や感想　#あまこちらいぶ</li>
            <li>ファンアート　#あまこちあーと</li>
            <li>飯テロ　#あまこちごはーん</li>
            <li>スケジュール告知　#あまこちすけじゅーる</li>
          </ul>
        </div>
      </section>
      <section className="rules -center">
        <h2>その他</h2>
        <div className="button-wrap">
          <Button text="配信ルール" href="/rules" />
          <Button
            text="ぬめちゃが歌える曲一覧"
            href="https://luxuriant-clef-fcf.notion.site/e6e355b74f184f4ab1d36e892b0a7ea7?v=98fe9083976a46f99ac72c53a0bc354b&pvs=74"
            isBlank
          />
        </div>
      </section>
    </>
  );
}
