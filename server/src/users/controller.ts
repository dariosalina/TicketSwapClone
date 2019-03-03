import {
  JsonController,
  Post,
  Get,
  Body,
  Authorized,
  Param
} from "routing-controllers";
import User from "./entity";

@JsonController()
export default class UsersController {
  @Authorized()
  @Get("/users")
  allUsers() {
    return User.find();
  }

  @Post("/users")
  async signup(@Body() data: User) {
    const { password, ...rest } = data;
    const entity = User.create(rest);
    await entity.setPassword(password);
    const user = await entity.save();
    return user;
  }

  @Authorized()
  @Get("/users/:id([0-9]+)")
  getUser(@Param("id") id: number) {
    return User.findOne(id);
  }
}
