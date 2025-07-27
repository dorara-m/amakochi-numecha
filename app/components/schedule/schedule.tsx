"use client";
import React, { useState } from "react";
import dayjs from "dayjs";

export default function Schedule() {
  const baseDate = dayjs("2025-07-28");

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
      // { ja: "スケジュールたて", en: "Schedule Planning" },
      { ja: "龍が如く8外伝", en: "Like a Dragon 8 Gaiden" },
    ],
    // 火
    [
      // { ja: "ネイル", en: "Nail" },
      { ja: "おやすみ", en: "No plans" },
    ],
    // 水
    [
      // { ja: "弾き語り", en: "Singing & Guitar" },
      { ja: "ろーるきゃべつ APEX", en: "APEX with my friend" },
    ],
    // 木
    [
      // { ja: "", en: "" },
      { ja: "対談コラボ", en: "Talking with my fiend" },
    ],
    // 金
    [
      // { ja: "未定", en: "TBD" },
      { ja: "マイクラ夏祭り2025 day2", en: "Minecraft summer festival" },
    ],
    // 土
    [
      { ja: "龍が如く8外伝", en: "Like a Dragon 8 Gaiden" },
      // { ja: "マイクラ", en: "Minecraft" },
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
        2025.7.27 {isEnglish ? "Updated!" : "更新!"}
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
                          if (index === 0) return i === 0 ? "22:00" : "";
                          if (index === 1) return i === 0 ? "" : "";
                          if (index === 2) return i === 0 ? "22:00" : "";
                          if (index === 3) return i === 0 ? "22:00" : "";
                          if (index === 4) return i === 0 ? "22:00" : "";
                          if (index === 5) return "14:00";
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
  )
}
