
import * as React from "react";
import videojs, { VideoJsPlayer } from "video.js";
import "video.js/dist/video-js.css";
export type VideoJSProps = {
    options: any;
    onReady: (player: videojs.Player) => void;
}

export const VideoJS = ( props: VideoJSProps ) => {

  const videoRef = React.useRef(null);
  const playerRef = React.useRef<VideoJsPlayer>();
  const { options, onReady } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
        if (player) {
          player?.dispose();
          playerRef.current = undefined;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;