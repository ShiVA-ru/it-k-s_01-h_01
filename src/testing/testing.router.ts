import { Router } from "express";
import { HttpStatus } from "../core/types/http-statuses";
import { createErrorMessages } from "../core/utils/error.utils";
// import { ValidationError } from "../../drivers/types/validation-error";

export const testingRouter = Router();

testingRouter.get("/", (req, res) => {
  res.status(HttpStatus.Ok).send("Hello world!");
});
