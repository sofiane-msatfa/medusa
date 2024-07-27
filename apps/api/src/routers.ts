import { UserController } from "./controllers/user-controller";
import { userRoutes } from "./routes/user-routes";

export const userRouter = userRoutes(new UserController());