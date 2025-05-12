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
      <h1>ぬめちゃを見てくれる皆にお願い</h1>
      <div className="note">
        {/* microCMSでいずれ設定 */}
        <p>ぬめちゃの配信ルールについてまとめています。(2025/05/12更新)</p>
        <p>
          ぬめちゃ自身と見てくれているリスナーさん、初見さん、なるべく多くのみんなが安心できるように考えた内容なので、ご協力お願いします！
        </p>
        <p>ぬめちゃの配信では以下を迷惑行為と定義しています。</p>
        <ul>
          <li>
            配信内容を無視して、プレイして欲しいゲーム、配信企画を要求すること
          </li>
          <li>過度な自分語り、過度な話題の誘導</li>
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
          迷惑行為を見かけた場合、基本的にぬめちゃが対応しようと思っています。
          <br />
          なので、リスナーさんは基本「触れない」「反応しない」「無視」でお願いします。
          <br />
          ただ配信が暗い空気になってしまうと悲しいので、気にせず明るく振る舞ってくれると嬉しいです！
        </p>
        <p>
          迷惑行為が多いとぬめちゃが感じた場合、予告なくブロック対応をとる場合があります。
          <br />
          ただ、見落とす場合もあるため「対応忘れてるかもな」「気になる人がずっといるな」などありましたら以下マシュマロまでご一報くれると助かります。
          <br />
          また自分のコメントが迷惑行為にあたるかもしれない、と不安を感じた方もこっそり教えてください。たぶん大丈夫です。
          <br />
          基本的に注意しても直らない人にのみ対応をしようと思っています。
          <br />
          <a href="https://marshmallow-qa.com/numechaaa" target="_blank">
            https://marshmallow-qa.com/numechaaa
          </a>
        </p>
      </div>
      <div className="note">
        <h2>
          For International Viewers (This translation was done by AI and may not
          be entirely accurate.)
        </h2>
        <p>Here are the streaming rules for Numecha. (Updated: 2025/05/12)</p>
        <p>
          These rules have been established to ensure a comfortable environment
          for Numecha, regular viewers, and newcomers. Your cooperation is
          greatly appreciated!
        </p>
        <p>
          The following behaviors are considered disruptive during Numecha's
          streams:
        </p>
        <ul>
          <li>
            Ignoring stream content and demanding specific games or stream ideas
          </li>
          <li>Excessive self-talk or topic steering</li>
          <li>
            Overly familiar behavior, such as claiming to be Numecha's family
            member
          </li>
          <li>
            Using casual language or implying hierarchical relationships with
            Numecha or other viewers without establishing proper rapport
          </li>
          <li>
            Excessive expressions of affection towards Numecha (e.g., "I want to
            marry you")
          </li>
          <li>
            Using unique greetings, mannerisms, or personas that are difficult
            to engage with
          </li>
          <li>
            Topics related to self-harm, violence, sexual content, politics, or
            religion
          </li>
          <li>
            Joining Numecha's online game matches without permission (sniping)
          </li>
          <li>
            Mentioning other content creators or self-promotion without context
          </li>
        </ul>
        <p>
          When disruptive behavior is observed, Numecha will handle the
          situation.
          <br />
          Please refrain from engaging with such behavior - do not interact,
          respond, or acknowledge it.
          <br />
          However, we encourage you to maintain a positive atmosphere during the
          stream!
        </p>
        <p>
          If Numecha determines that disruptive behavior is persistent, blocking
          may occur without warning.
          <br />
          If you notice any concerning behavior that might have been overlooked,
          please report it through the Marshmallow link below.
          <br />
          If you're unsure whether your comment might be considered disruptive,
          feel free to ask privately. It's probably fine!
          <br />
          Generally, action will only be taken against those who continue
          disruptive behavior after being warned.
          <br />
          <a href="https://marshmallow-qa.com/numechaaa" target="_blank">
            https://marshmallow-qa.com/numechaaa
          </a>
        </p>
      </div>
      <div className="button-wrap">
        <Button href="/" text="戻る" />
      </div>
    </>
  );
}