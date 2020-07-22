import React from 'react'

const Account = ({ user }) => {
  return (
    <div>
      <h1>My account</h1>
      <h2>Email</h2>
      {user && <p>{user.email}</p>}
    </div>
  )
}

export default Account
