import { VideoResolutions } from "../core/types/video-resolutions";

export type VideoType = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: string;
  publicationDate: string;
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
      createdAt: new Date("2026-01-12T15:29:20.510Z").toISOString(),
      publicationDate: new Date("2026-01-12T15:29:20.510Z").toISOString(),
      availableResolutions: [VideoResolutions.P144],
    },
    {
      id: 1,
      title: "string",
      author: "string",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date("2026-01-12T15:29:20.510Z").toISOString(),
      publicationDate: new Date("2026-01-12T15:29:20.510Z").toISOString(),
      availableResolutions: [VideoResolutions.P144],
    },
    {
      id: 2,
      title: "string",
      author: "string",
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date("2026-01-12T15:29:20.510Z").toISOString(),
      publicationDate: new Date("2026-01-12T15:29:20.510Z").toISOString(),
      availableResolutions: [VideoResolutions.P144],
    },
  ],
};
