import React from 'react'
import User from '../components/User'
import Menu from './Menu'


export default function Users({users, ...props}) {
  return (
    <div>
    <Menu/>
    {users.map(user => {
      return <User key={user.id} user={user} {...props}/>
    })}
    </div>
  )
}




