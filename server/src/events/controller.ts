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
    console.log("skip", n);
    // const todayDate = new Date();
    const events = await getRepository(Event)
      .createQueryBuilder("event")
      // .where("event.end_date > :end_date", { end_date: MoreThan(todayDate) })
      .skip(n - 1)
      .take(9)
      .getMany();

    return { events };

    // const todayDate = new Date();
    // console.log(todayDate);
    // const events = await Event.find({
    //   where: { end_date: MoreThan(todayDate) }
    // });
  }

  @Authorized()
  @Post("/events")
  @HttpCode(201)
  async createPage(@Body() event: Event) {
    return event.save();
  }
}
