import { ValidationError } from "../../core/types/validation-error";
import { UpdateVideoModel } from "../models/UpdateVideoModel";
import { VideoResolutions } from "../models/video-resolutions";

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

export const updateVideoValidate = (
  data: UpdateVideoModel,
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (
    !data.title ||
    typeof data.title !== "string" ||
    data.title.trim().length < 1 ||
    data.title.trim().length > 40
  ) {
    errors.push({ field: "title", message: "Invalid title" });
  }

  if (
    !data.author ||
    typeof data.author !== "string" ||
    data.author.trim().length < 1 ||
    data.author.trim().length > 20
  ) {
    errors.push({ field: "author", message: "Invalid author" });
  }

  if (!data.canBeDownloaded || typeof data.canBeDownloaded !== "boolean") {
    errors.push({
      field: "canBeDownloaded",
      message: "Invalid canBeDownloaded flag",
    });
  }

  if (
    data.minAgeRestriction !== null &&
    (typeof +data.minAgeRestriction !== "number" ||
      data.minAgeRestriction < 1 ||
      data.minAgeRestriction > 18)
  ) {
    errors.push({
      field: "minAgeRestriction",
      message: "Invalid minAgeRestriction",
    });
  }

  if (
    !data.publicationDate ||
    typeof data.publicationDate !== "string" ||
    data.publicationDate.trim().length < 1 ||
    data.publicationDate.trim().length > 40 ||
    !ISO_DATE_REGEX.test(data.publicationDate)
  ) {
    errors.push({
      field: "publicationDate",
      message: "Invalid publicationDate",
    });
  }

  if (!Array.isArray(data.availableResolutions)) {
    errors.push({
      field: "availableResolutions",
      message: "availableResolutions must be array",
    });
  } else {
    const existingResolutions = Object.values(VideoResolutions);

    if (
      data.availableResolutions.length > existingResolutions.length ||
      data.availableResolutions.length < 1
    ) {
      errors.push({
        field: "availableResolutions",
        message: "Invalid availableResolutions length",
      });
    }

    for (const resolution of data.availableResolutions) {
      if (!existingResolutions.includes(resolution)) {
        errors.push({
          field: "availableResolutions",
          message: "Invalid availableResolution:" + resolution,
        });
        break;
      }
    }
  }

  return errors;
};
