import {
    JsonController,
    Post,
    // HttpCode,
    Get,
    Body,
    Authorized
    // Param,
    } from "routing-controllers";
  import User from './entity'
 
  
  @JsonController()
  export default class UsersController {
    @Authorized()
    @Get("/users")
    allUsers() {
        return User.find();
    }
    
    @Post('/users')
async createUser(
  @Body() user: User
) {
  const {password, ...rest} = user
  const entity = User.create(rest)
  await entity.setPassword(password)
  return entity.save()
}
    
  }