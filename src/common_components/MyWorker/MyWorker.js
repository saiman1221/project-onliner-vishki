import React from 'react';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useParams } from "react-router-dom";

import './MyWorker.css'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const MyWorker = () => {
    const {fileToImport} = useParams();
    const defaultPlugins = defaultLayoutPlugin();
    return (
        <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'}>
            <Viewer fileUrl={require(`/src/assets/${fileToImport}`)} plugins={[defaultPlugins]} theme={'dark'} defaultScale={1.1} scrollMode={'vertical'}/>
        </Worker>
    );
};