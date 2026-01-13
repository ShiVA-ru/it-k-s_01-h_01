import { VideoResolutions } from "../../core/types/video-resolutions";

export type CreateViewModel = {
  title: string;
  author: string;
  availableResolutions: VideoResolutions[];
};
