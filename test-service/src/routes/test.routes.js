import { Router } from "express";
import {
  cancelTest,
  getAllTests,
  getTestById,
  updateTest,
  deleteTest,
  publishTest,
  createTest,
} from "../controllers/test.controller.js";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import {
  createTestSchema,
  updateTestSchema,
  testIdSchema,
} from "../validations/test.validation.js";

const testRouter = Router();

testRouter.post(
  "/",
  isAuthenticated,
  authorizeRoles("ADMIN"),
  validate(createTestSchema),
  createTest,
);
testRouter.get("/", isAuthenticated, getAllTests);
testRouter.get("/:id", isAuthenticated, validate(testIdSchema), getTestById);
testRouter.put(
  "/:id",
  isAuthenticated,
  authorizeRoles("ADMIN"),
  validate(updateTestSchema),
  updateTest,
);
testRouter.delete(
  "/:id",
  isAuthenticated,
  authorizeRoles("ADMIN"),
  validate(testIdSchema),
  deleteTest,
);
testRouter.patch(
  "/:id/cancel",
  isAuthenticated,
  authorizeRoles("ADMIN"),
  validate(testIdSchema),
  cancelTest,
);

export default testRouter;
