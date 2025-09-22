"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

export default function Schedule() {
  const baseDate = dayjs("2025-09-22");

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
    [
      // { ja: "【朝活】マイクラ", en: "Minecraft" },
      { ja: "誕生日耐久GTA", en: "Grand Theft Auto" },
    ],
    // 火
    [
      // { ja: "【朝活】弾き語り", en: "Sing with a guitar" },
      { ja: "誕生日ネイル雑談", en: "Birthday Talking with nails" },
    ],
    // 水
    [
      // { ja: "【朝活】ネイル", en: "Talking with do nails" },
      {
        ja: "ろーるきゃべつ もぐもぐお芋雑談",
        en: "Talking and Eating with my friend",
      },
    ],
    // 木
    [
      // { ja: "【朝活】ネイル", en: "Talking in morning" },
      { ja: "未定", en: "TBD" },
    ],
    // 金
    [
      // { ja: "【朝活】弾き語り", en: "Sing with a guitar" },
      { ja: "マイクラ チル", en: "Minecraft" },
    ],
    // 土
    [
      { ja: "龍が如く6", en: "Like a Dragon 6" },
      { ja: "なんかやる", en: "TBD" },
    ],
    // 日
    [
      { ja: "歌枠", en: "KARAOKE Stream" },
      // { ja: "マリオギャラクシー #8", en: "Mario Galaxy #8" },
    ],
  ];

  return (
    <section className="scheduleArea">
      <h2>{isEnglish ? "Streaming Schedule" : "配信スケジュール"}</h2>
      <div className="schedule-update">
        2025.9.22 {isEnglish ? "Updated!" : "更新!"}
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
                          if (index === 0) return i === 0 ? "23:50" : "15:00";
                          if (index === 1) return i === 0 ? "14:00" : "22:00";
                          if (index === 2) return i === 0 ? "22:00" : "22:00";
                          if (index === 3) return i === 0 ? "" : "";
                          if (index === 4) return i === 0 ? "23:00" : "";
                          if (index === 5) return i === 0 ? "14:00" : "22:00";
                          if (index === 6) return i === 0 ? "15:00" : "";
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
