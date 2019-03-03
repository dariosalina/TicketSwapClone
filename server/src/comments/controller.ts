import {
  JsonController,
  Post,
  Authorized,
  HttpCode,
  Body,
  Get,
  Param,
  CurrentUser
} from "routing-controllers";
import Comment from "./entity";
import User from "../users/entity";

@JsonController()
export default class CommentsController {
  @Get("/comments/:ticket_id")
  async allComments(@Param("ticket_id") id: number) {
    const comments = await Comment.find({ where: { ticket: id } });
    return { comments };
  }

  @Authorized()
  @Post("/comments")
  @HttpCode(201)
  async createComment(@CurrentUser() user: User, @Body() comment: Comment) {
    if (user instanceof User) comment.user = user;
    return comment.save();
  }
}
