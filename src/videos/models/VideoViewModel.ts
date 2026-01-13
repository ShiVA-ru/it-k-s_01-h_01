import { VideoResolutions } from "../../core/types/VideoResolutionsEnum";

export type VideoViewModel = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: Date;
  publicationDate: Date;
  availableResolutions: VideoResolutions[];
};
