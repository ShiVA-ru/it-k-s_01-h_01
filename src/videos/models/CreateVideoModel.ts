import { VideoResolutions } from "../../core/types/VideoResolutionsEnum";

export type CreateViewModel = {
  title: string;
  author: string;
  availableResolutions: VideoResolutions[];
};
