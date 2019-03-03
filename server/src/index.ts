import "reflect-metadata";
import { createKoaServer, Action, BadRequestError } from "routing-controllers";
import setupDb from "./db";
import UsersController from "./users/controller";
import EventsController from "./events/controller";
import TicketsController from "./tickets/controller";
import CommentsController from "./comments/controller";
import LoginController from "./logins/controller";
import { verify } from "./jwt";
import User from "./users/entity";

const port = process.env.PORT || 4000;

const app = createKoaServer({
  cors: true,
  controllers: [
    UsersController,
    EventsController,
    TicketsController,
    CommentsController,
    LoginController
  ],
  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization;

    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");
      try {
        return !!(token && verify(token));
      } catch (e) {
        throw new BadRequestError(e);
      }
    }
    // ...
    return false;
  },
  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");

      if (token) {
        const id = verify(token);
        return User.findByIds([id]);
      }
    }
    return undefined;
  }
});

setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
