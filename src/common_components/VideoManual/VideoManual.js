import React from "react";
import'./VideoManual.css';

export function VideoManual(props) {
    return (
        <div className={'Video_manual container'}>
            {props.content.map(el => <>
                <h2>{el.title}</h2>
                <div className={'video'}>
                    <iframe width="100%" height="100%" src={el.src}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </>)}
        </div>
    );
}