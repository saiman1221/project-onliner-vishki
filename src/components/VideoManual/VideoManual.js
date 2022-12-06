import React from "react";
import'./VideoManual.css';

export function VideoManual() {
    return (
        <div className={'VideoManual__video_manual container'}>
            <h2>Видео инструкция по установке вышки туры</h2>
            <div className={'VideoManual__video'}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/25IlYWRj0R0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
            <h2>Видео инструкция по установке комплекта для установки на лестничный марш для вышки тура</h2>
            <div className={'VideoManual__video'}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Nj_xApZx898"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>
    );
}