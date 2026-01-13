import { VideoResolutions } from "../../core/types/VideoResolutionsEnum";

export type UpdateVideoModel = {
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number;
  publicationDate: Date;
  availableResolutions: VideoResolutions[];
};
