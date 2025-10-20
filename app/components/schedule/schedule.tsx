"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

export default function Schedule() {
  const baseDate = dayjs("2025-10-20");

  // 1週間の日付を生成
  const weekDates = Array.from({ length: 7 }, (_, index) => {
    return baseDate.add(index, "day");
  });

  // 言語切り替え用 state
  const [isEnglish, setIsEnglish] = useState(false);

  // 曜日の日本語・英語表記
  const weekDaysJa = ["月", "火", "水", "木", "金", "土", "日"];
  const weekDaysEn = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekDays = isEnglish ? weekDaysEn : weekDaysJa;

  // スケジュールタイトル（日本語・英語）
  const scheduleTitles = [
    // 月
    [{ ja: "龍が如く6", en: "Yakuza6" }],
    // 火
    [
      { ja: "【朝活】ネイル", en: "Talking with do nails" },
      { ja: "龍が如く6", en: "Yakuza6" },
    ],
    // 水
    [
      {
        ja: "【ろーるきゃべつ】ハロウィンAPEX",
        en: "Halloween APEX with 'pefu'",
      },
    ],
    // 木
    [
      { ja: "【朝活】弾き語り", en: "Singing with guitar" },
      { ja: "GTA in アルクラ", en: "GTA" },
    ],
    // 金
    [
      // { ja: "", en: "TBD" },
      { ja: "龍が如く6", en: "Yakuza6" },
    ],
    // 土
    [{ ja: "ゼルダの伝説 ティアキン", en: "Zelda: Tears of the Kingdom" }],
    // 日
    [
      { ja: "GTA in アルクラ", en: "GTA" },
      // { ja: "マリオギャラクシー #8", en: "Mario Galaxy #8" },
    ],
  ];

  return (
    <section className="scheduleArea">
      <h2>{isEnglish ? "Streaming Schedule" : "配信スケジュール"}</h2>
      <div className="schedule-update">
        2025.10.20 {isEnglish ? "Updated!" : "更新!"}
      </div>
      <button
        className="schedule-toggle"
        onClick={() => setIsEnglish((prev) => !prev)}
      >
        {isEnglish ? "日本語で" : "in English"}
      </button>
      <div className="schedule">
        <div className="schedule-list">
          {weekDates.map((date, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-item-date">
                <span className="month">{date.month() + 1}</span>
                <span className="day">{date.date()}</span>
              </div>
              <div
                className={`schedule-item-week ${index === 5 ? "-sat" : ""} ${
                  index === 6 ? "-sun" : ""
                }`}
              >
                {weekDays[index]}
              </div>
              <div className="schedule-item-wrap">
                {scheduleTitles[index] &&
                  scheduleTitles[index].map((item, i) => (
                    <div className="schedule-item-set" key={i}>
                      <div className="schedule-item-time">
                        {/* 時間は元のままハードコーディング */}
                        {(() => {
                          if (index === 0) return i === 0 ? "23:00" : "22:00";
                          if (index === 1) return i === 0 ? "8:00" : "22:00";
                          if (index === 2) return i === 0 ? "22:00" : "22:00";
                          if (index === 3) return i === 0 ? "9:00" : "23:00";
                          if (index === 4) return i === 0 ? "22:00" : "23:00";
                          if (index === 5) return i === 0 ? "9:00" : "22:00";
                          if (index === 6) return i === 0 ? "14:00" : "";
                          return "";
                        })()}
                      </div>
                      <div className="schedule-item-title">
                        {isEnglish ? item.en : item.ja}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow">↓</div>
    </section>
  );
}
