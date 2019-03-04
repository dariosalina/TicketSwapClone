import {
  JsonController,
  Post,
  HttpCode,
  Get,
  Body,
  Param,
  Authorized
} from "routing-controllers";
import Event from "./entity";
import { getRepository } from "typeorm";

@JsonController()
export default class EventsController {
  @Get("/events/:id")
  getEvent(@Param("id") id: number) {
    return Event.findOne(id);
  }

  @Get("/events/page/:n/")
  async allEvents(@Param("n") n: number) {
    const events = await getRepository(Event)
      .createQueryBuilder("event")
      .where("event.end_date > :todayDate", { todayDate: new Date() })
      .skip((n - 1) * 9)
      .take(9)
      .getMany();

    return { events };
  }

  @Authorized()
  @Post("/events")
  @HttpCode(201)
  async createPage(@Body() event: Event) {
    return event.save();
  }
}
