import { useState } from "react";
import { cn } from "../../lib/utils"
import VideoInput from "./VideoInput"
import VideoPlayer from "./VideoPlayer"
import YouTubeUrlList from "./YouTubeUrlList";


function YouTube({ minimized }) {

    return (
        <div className={cn("overflow-y-auto h-[40vh]")}>
            {minimized ? null : (
                <>
                    <h1 className={cn("text-xl  text-center")}>🎈 Trình phát video YouTube 🔥</h1>
                    <VideoInput />
                </>
            )}
            <VideoPlayer isMinimized={minimized} />
            <YouTubeUrlList isMinimized={minimized} />
        </div>
    )
}

export default YouTube
