import Image from "next/image";
import "./styles/top.scss";
import Button from "./components/button/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "一緒に雨宿り、どう？ ☔️🍃🐺｜雨東風ぬめちゃ公式サイト",
  description: "狼系VTuber、雨東風（あまこち）ぬめちゃの公式サイトです。",
  openGraph: {
    title: "一緒に雨宿り、どう？ ☔️🍃🐺｜雨東風ぬめちゃ公式サイト",
    description: "狼系VTuber雨東風ぬめちゃの公式サイトです。",
    url: "https://amakochi-numecha.vercel.app",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <div className="fv-fixed">
        <Image
          className="fv-image"
          src="/images/kv.png"
          alt="雨東風ぬめちゃ キービジュアル"
          width={1000}
          height={1834}
        />
        <div className="text-wrap">
          <h1>雨東風ぬめちゃ</h1>
          <p className="catch">一緒に雨宿り、どう？ ☔️🍃🐺</p>
          <p className="sub">Stardew Valley｜歌枠｜ポケモン｜龍が如く</p>
          <div className="sns">
            <Button
              text="YouTube"
              href="https://www.youtube.com/@AmakochiNumecha"
              isBlank
            />
            <Button text="X" href="https://x.com/numechaaa" isBlank />
          </div>
        </div>
      </div>
      <div className="fv-spacer"></div>
      <div className="overlay">
        <div className="container">
          <section className="detail">
            <h2>Who is Amakochi Numecha?</h2>
            <div className="text-wrap">
              <p>
                雨の降りしきる町からやってきた、狼人間。
                <br />
                人に囲まれて育ったので、人懐っこく穏やか。
                <br />
                少し寂しがり屋で、褒められるとしっぽが揺れます。
              </p>
              <p>
                特徴的な紫のメッシュは、
                <a
                  href="https://zukan.pokemon.co.jp/detail/0706"
                  target="_blank"
                >
                  とある地方のドラゴン
                </a>
                の血が混じっているとかいないとか。
              </p>
              <p>
                チルめ作業ゲーム（Stardew Valley, マイクラ）、歌枠、雑談多め。
                <br />
                ゼルダの伝説、龍が如く、ポケモンなども好き。
              </p>
              <p>
                歌が大好き。歌ってみたが大好き。自分が救われたように、誰かの心を歌で救ってみたい。救えるような唄を届けたい。
                <br />
                目標は🌈🕘みたいな、心に響く3D音楽ライブをすること。
              </p>
              <div className="button-wrap">
                <Button text="配信ルール" href="/rules" />
                <Button
                  text="ぬめちゃが歌える曲一覧"
                  href="https://setlink.jp/public/b70cef7a-70e6-407d-931d-56f2af8d0bb1"
                  isBlank
                />
              </div>
              <div className="hashtag">
                <h3>ハッシュタグ</h3>
                <ul>
                  <li>配信告知・配信の感想　#あまこちらいぶ</li>
                  <li>ファンアート　#あまこちあーと</li>
                  <li>ぬめちゃに見てほしい　#あまこちみてみて</li>
                  <li>飯テロ　#あまこちごはーん</li>
                  <li>スケジュール告知　#あまこちすけじゅーる</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="membership -center">
            <h2>雨宿り（メンバーシップ）</h2>
            <div className="text-wrap">
              <p>
                YouTubeメンバーシップを月額290円で開設しています。
                <br />
                コメント欄でバッジ表示、カスタム絵文字が使えるようになります。
              </p>
            </div>
            <Button
              text="雨宿りする"
              href="https://www.youtube.com/channel/UCR5b4PoQ3ainPNFD5bk7enA/join"
              isBlank
            />
          </section>
        </div>
      </div>
    </>
  );
}
