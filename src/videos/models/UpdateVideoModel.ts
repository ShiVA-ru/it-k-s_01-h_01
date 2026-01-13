import { VideoResolutions } from "../../core/types/video-resolutions";

export type UpdateVideoModel = {
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number;
  publicationDate: string;
  availableResolutions: VideoResolutions[];
};
