import { Router } from "express";
import { asyncHandler } from "../../Middlewares/error-handler.middleware";
import authService from "./auth.service"
import { validation } from "../../Middlewares/validation.middleware";
import { signupSchema } from "./auth.validation";

const router: Router = Router();

router.post("/signup", validation(signupSchema), asyncHandler(authService.signup))
router.post("/login", asyncHandler(authService.login))

export default router;