import { Router } from "express";
import { HttpStatus } from "../core/types/http-statuses";
// import { createErrorMessages } from "../core/utils/error.utils";
import { VideoType } from "../db/in-memory.db";
import { VideoViewModel } from "./models/VideoViewModel";
// import { ValidationError } from "../../drivers/types/validation-error";

export const videosRouter = Router();

const mapEntityToViewModel = (dbEntity: VideoType): VideoViewModel => ({
  id: dbEntity.id,
  title: dbEntity.title,
  author: dbEntity.author,
  canBeDownloaded: dbEntity.canBeDownloaded,
  minAgeRestriction: dbEntity.minAgeRestriction,
  createdAt: dbEntity.createdAt,
  publicationDate: dbEntity.publicationDate,
  availableResolutions: dbEntity.availableResolutions,
});

videosRouter.get("/", (req, res) => {});
