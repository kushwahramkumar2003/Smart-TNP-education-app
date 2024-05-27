import getVideoDurationInSeconds from "get-video-duration";
import { Readable } from "node:stream";

async function getVideoDuration(videoPath: string | Readable) {
  try {
    const durationInSeconds = await getVideoDurationInSeconds(videoPath);
    return durationInSeconds;
  } catch (error) {
    console.error("Error getting video duration:", error);
    throw error;
  }
}

export default getVideoDuration;
