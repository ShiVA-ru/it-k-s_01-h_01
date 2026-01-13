import { Router, Response } from "express";
import { HttpStatus } from "../core/types/http-statuses";
// import { createErrorMessages } from "../core/utils/error.utils";
import { db, VideoType } from "../db/in-memory.db";
import { VideoViewModel } from "./models/VideoViewModel";
import {
  RequestWithBody,
  RequestWithParams,
  RequestWithParamsAndBody,
} from "../core/types/request-types";
import { URIParamsVideoIdModel } from "./models/URIParamsVideoModel";
import { CreateViewModel } from "./models/CreateVideoModel";
import { UpdateVideoModel } from "./models/UpdateVideoModel";
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

//CREATE
videosRouter.post(
  "/",
  (req: RequestWithBody<CreateViewModel>, res: Response<VideoViewModel>) => {
    const title = req.body.title;
    if (!title) {
      res.sendStatus(HttpStatus.BadRequest);
      return;
    }
    const createdEntity: VideoViewModel = {
      id: +new Date(),
      title: req.body.title,
      author: req.body.author,
      canBeDownloaded: true,
      minAgeRestriction: 18,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolutions: req.body.availableResolutions,
    };
    db.videos.push(createdEntity);

    res.status(HttpStatus.Created).json(mapEntityToViewModel(createdEntity));
  },
);

// READ
videosRouter.get("/", (req, res: Response<VideoViewModel[]>) => {
  res.status(HttpStatus.Ok).json(db.videos.map(mapEntityToViewModel));
});

videosRouter.get(
  "/:id",
  (
    req: RequestWithParams<URIParamsVideoIdModel>,
    res: Response<VideoViewModel>,
  ) => {
    const findEntity = db.videos.find((video) => video.id === +req.params.id);

    if (!findEntity) {
      res.sendStatus(HttpStatus.NotFound);
      return;
    }
    return res.status(HttpStatus.Ok).json(mapEntityToViewModel(findEntity));
  },
);

//UPDATE
videosRouter.put(
  "/:id",
  (
    req: RequestWithParamsAndBody<URIParamsVideoIdModel, UpdateVideoModel>,
    res: Response<VideoViewModel>,
  ) => {
    const updateData: UpdateVideoModel = req.body;

    let foundEntity: VideoType | undefined = db.videos.find(
      (video) => video.id === parseInt(req.params.id),
    );

    if (!foundEntity) {
      res.sendStatus(HttpStatus.NotFound);
      return;
    }

    foundEntity = { ...foundEntity, ...updateData };

    res.status(HttpStatus.Ok).json(mapEntityToViewModel(foundEntity));
  },
);

//DELETE
videosRouter.delete(
  "/:id",
  (req: RequestWithParams<URIParamsVideoIdModel>, res: Response) => {
    db.videos = db.videos.filter((video) => video.id !== +req.params.id);

    return res.sendStatus(HttpStatus.NoContent);
  },
);
