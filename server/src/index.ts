import 'reflect-metadata'
import {createKoaServer, Action} from "routing-controllers"
import setupDb from './db'
import UsersController from './users/controller'
import EventsController from './events/controller'
import TicketsController from './tickets/controller'
import CommentsController from './events/controller'
import LoginController from './logins/controller'
import {verify} from './jwt'


const port = process.env.PORT || 4000

const app = createKoaServer({
   cors:true,
   controllers: [
      UsersController,
      EventsController,
      TicketsController,
      CommentsController,
      LoginController

   ],
   authorizationChecker: (action: Action) => {
      const header: string = action.request.headers.authorization

  if (header && header.startsWith('Bearer ')) {
    const [ , token ] = header.split(' ')
    return !!(token && verify(token))
  }
      // ...
      return false
  }
})


setupDb()
.then(_ =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))