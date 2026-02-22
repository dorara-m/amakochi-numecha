import React from 'react'
import './_rules.scss'
import Button from '../components/button/button'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "配信ルール | 雨東風ぬめちゃ 朝型になりたい狼人間VTuber☔️🍃🐺",
  description: "ぬめちゃの配信ルールについてまとめています。",
  openGraph: {
    title: "配信ルール | 雨東風ぬめちゃ 朝型になりたい狼人間VTuber☔️🍃🐺",
    description: "ぬめちゃの配信ルールについてまとめています。",
    url: "https://amakochi-numecha.vercel.app/rules",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <div className="container">
        <h1>ぬめちゃを見てくれる皆にお願い</h1>
        <div className="note">
          {/* microCMSでいずれ設定 */}
          <p>ぬめちゃの配信ルールについてまとめています。(2025/06/17更新)</p>
          <p>
            ぬめちゃ自身と見てくれているリスナーさん、初見さん、なるべく多くのみんなが安心できるように考えた内容なので、ご協力お願いします！
          </p>
          <p>ぬめちゃの配信では以下を迷惑行為と定義しています。</p>
          <ul>
            <li>
              配信内容を無視して、プレイして欲しいゲーム、配信企画を要求すること
            </li>
            <li>過度な自分語り、過度な話題の誘導</li>
            <li>同じコメントを何度も連投すること</li>
            <li>行き過ぎた身内ノリ。ぬめちゃの親や兄弟を自称することなど</li>
            <li>
              ぬめちゃ及びリスナーに対して、信頼関係を十分に築かないまま、ため口や上下関係を意識させるような口調で接すること
            </li>
            <li>ぬめちゃへの過度な愛情表現。「結婚したい」など</li>
            <li>拾いづらい独特な挨拶、ノリ、設定で配信に来ること</li>
            <li>自滅的、暴力的、性的、政治的、宗教的な話題全般</li>
            <li>
              ぬめちゃがオンラインプレイしているゲームマッチにスナイプ（無断で狙って）参加すること
            </li>
            <li>
              話題から逸れて、ほかの活動者さんの名前を出すこと。宣伝すること
            </li>
          </ul>
          <p>
            迷惑行為への対応はぬめちゃが行います。
            <br />
            リスナーさんは基本スルー！「触れない」「反応しない」「無視」でお願いします。
            <br />
            ただチャットが暗い空気になってしまうと悲しいので、気にせず明るく振る舞ってくれると嬉しいです！
          </p>
          <p>
            迷惑行為が多いとぬめちゃが感じたユーザーに対しては、予告なくブロック対応をとる場合があります。
            <br />
            ただ、見落とす場合もあるため「対応忘れてるかもな」「気になる人がずっといるな」などありましたら以下マシュマロまでご一報くれると助かります。
            <br />
            <a href="https://marshmallow-qa.com/numechaaa" target="_blank">
              https://marshmallow-qa.com/numechaaa
            </a>
          </p>
        </div>
        <div className="note en">
          <p>
            This page summarizes Numecha's streaming rules. (Updated:
            2025/06/17)
          </p>
          <p>
            These rules have been established to ensure a comfortable
            environment for Numecha, regular viewers, and new visitors. Your
            cooperation is greatly appreciated!
          </p>
          <p>
            The following behaviors are considered disruptive in Numecha's
            streams:
          </p>
          <ul>
            <li>
              Ignoring stream content and demanding specific games or stream
              ideas
            </li>
            <li>Excessive self-talk or topic steering</li>
            <li>Spamming the same comment repeatedly</li>
            <li>
              Overly familiar behavior, such as claiming to be Numecha's family
              members
            </li>
            <li>
              Using casual language or implying hierarchical relationships with
              Numecha or other viewers without establishing proper trust
            </li>
            <li>
              Excessive expressions of affection towards Numecha (e.g., "I want
              to marry you")
            </li>
            <li>
              Using unique greetings, mannerisms, or personas that are difficult
              to engage with
            </li>
            <li>
              Topics involving self-harm, violence, sexual content, politics, or
              religion
            </li>
            <li>
              Sniping (joining without permission) Numecha's online game matches
            </li>
            <li>
              Mentioning other content creators' names or promoting them without
              context
            </li>
          </ul>
          <p>
            Numecha will handle disruptive behavior.
            <br />
            Viewers are asked to ignore such behavior - "Don't engage," "Don't
            react," "Ignore."
            <br />
            However, if the chat atmosphere becomes negative, we'd appreciate if
            you could continue to maintain a positive environment!
          </p>
          <p>
            Users who engage in frequent disruptive behavior may be blocked
            without warning.
            <br />
            If you notice any concerning behavior that hasn't been addressed,
            please report it through the following Marshmallow link:
            <br />
            <a href="https://marshmallow-qa.com/numechaaa" target="_blank">
              https://marshmallow-qa.com/numechaaa
            </a>
          </p>
        </div>
        <div className="button-wrap">
          <Button href="/" text="トップに戻る" />
        </div>
      </div>
    </>
  );
}