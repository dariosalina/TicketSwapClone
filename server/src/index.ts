import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import setupDb from './db'
// import UsersController from './users/controller' to be finished ->login logic
import EventsController from './events/controller'
import TicketsController from './tickets/controller'
import CommentsController from './events/controller'


const port = process.env.PORT || 4000

const app = createKoaServer({
   cors:true,
   controllers: [
      // UsersController
      EventsController,
      TicketsController,
      CommentsController

   ]
})


setupDb()
.then(_ =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))