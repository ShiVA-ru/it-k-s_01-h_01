import { VideoResolutions } from "./video-resolutions";

export type CreateVideoModel = {
  title: string;
  author: string;
  availableResolutions: VideoResolutions[];
};
