import React from "react";
import s from './VideoManual.module.css';

export function VideoManual() {
    return (
        <div className={s.video_manual + ' container'}>
            <h2>Видео инструкция по установке вышки туры</h2>
            <div className={s.video}></div>
            <h2>Видео инструкция по установке комплекта для установки на лестничный марш для вышки тура</h2>
            <div className={s.video}></div>
        </div>
    );
}