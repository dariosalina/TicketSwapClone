import { JsonController, Post, HttpCode, Body, Get } from "routing-controllers";
import Comment from "./entity";

@JsonController()
export default class CommentsController {
  @Get("/comments/")
  async allComments() {
    const comments = await Comment.find();
    return { comments };
  }

  @Post("/comments")
  @HttpCode(201)
  async createPage(@Body() comment: Comment) {
    return comment.save();
  }
}
