import {
    JsonController,
    Post,
    HttpCode,
    Get,
    Body,
    Param,
    } from "routing-controllers";
  import Ticket from './entity'
 
  
  @JsonController()
  export default class TicketsController {
    
    @Get("/tickets/:id")
    getEvent(@Param("id") id: number) {
      return Ticket.findOne(id);
    }
  
    @Get("/tickets")
    async allTickets() {
      const tickets = await Ticket.find();
      return { tickets };
    }
  
    @Post('/tickets')
    @HttpCode(201)
    async createPage(
      @Body() ticket: Ticket
    ) {
      return ticket.save()
    }
  
  }