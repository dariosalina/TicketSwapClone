import {
  JsonController,
  Post,
  HttpCode,
  Get,
  Body,
  Param,
  Authorized
} from "routing-controllers";
import Ticket from "./entity";

@JsonController()
export default class TicketsController {
  @Get("/tickets/:id")
  getTicket(@Param("id") id: number) {
    return Ticket.findOne(id);
  }

  @Get("/events/tickets/:event_id")
  async getTicketsForEvent(@Param("event_id") id: number) {
    const ticketsEvent = await Ticket.find({ where: { event: id } });
    return { ticketsEvent };
  }

  @Get("/tickets")
  async allTickets() {
    const tickets = await Ticket.find();
    return { tickets };
  }

  @Authorized()
  @Post("/tickets")
  @HttpCode(201)
  async createPage(@Body() ticket: Ticket) {
    return ticket.save();
  }
}
