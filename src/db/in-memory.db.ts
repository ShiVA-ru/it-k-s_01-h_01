import { VideoResolutions } from "../core/types/VideoResolutionsEnum";

export type VideoType = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: Date;
  publicationDate: Date;
  availableResolutions: VideoResolutions[];
};

export type DBType = {
  videos: VideoType[];
};

export const db: DBType = {
  videos: [
    {
      id: 0,
      title: "string",
      author: "string",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date("2026-01-12T15:29:20.510Z"),
      publicationDate: new Date("2026-01-12T15:29:20.510Z"),
      availableResolutions: [VideoResolutions.P144],
    },
    {
      id: 1,
      title: "string",
      author: "string",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date("2026-01-12T15:29:20.510Z"),
      publicationDate: new Date("2026-01-12T15:29:20.510Z"),
      availableResolutions: [VideoResolutions.P144],
    },
    {
      id: 2,
      title: "string",
      author: "string",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date("2026-01-12T15:29:20.510Z"),
      publicationDate: new Date("2026-01-12T15:29:20.510Z"),
      availableResolutions: [VideoResolutions.P144],
    },
  ],
};
