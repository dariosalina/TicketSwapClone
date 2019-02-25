import {
  JsonController,
  Post,
  HttpCode,
  Get,
  Body,
  Param
} from "routing-controllers";
import Event from "./entity";

@JsonController()
export default class EventsController {
  @Get("/events/:id")
  getEvent(@Param("id") id: number) {
    return Event.findOne(id);
  }

  @Get("/events")
  async allEvents() {
    const events = await Event.find();
    return { events };
  }

  @Post("/events")
  @HttpCode(201)
  async createPage(@Body() event: Event) {
    return event.save();
  }
}
