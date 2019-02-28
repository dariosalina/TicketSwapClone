
  
import React from 'react'

export default function LoginForm(props) {
  return (<form onSubmit={props.onSubmit}> 
    <label>
      Email:
      <input type="text" name="email" value={props.values.email} onChange={props.onChange} />
    </label>
    <label>
      Password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} />
    </label>
    
    <button type="submit">Login</button>
  </form>)
}