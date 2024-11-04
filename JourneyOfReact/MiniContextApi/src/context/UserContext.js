import React from 'react'

const UserContext = React.createContext();

export default UserContext;  // note every Context is a provider

// //creating provider (below synatx implemented in usercontextprovider.jsx)   (we can create as many provider as want. to get direct acces of component)
// {/* <UserContext>
// <Login />
// <Card >
//     <Data />
// </Card>
// </UserContext> */}