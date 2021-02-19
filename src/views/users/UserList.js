import { useEffect, useState } from 'react'

function UserList() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/users')
      .then((data) => data.json())
      .then(setData)
  }, [])

  return (
    <>
      {data
        ? data.users.map((user, i) => <div key={i}>{user.name}</div>)
        : 'Loading...'}
    </>
  )
}

export default UserList

// import { useQuery } from 'jsonapi-react'

// function UserList() {
//   const { data, isLoading } = useQuery('users')

//   return (
//     <>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         data.map((user, i) => <div key={i}>{user.name}</div>)
//       )}
//     </>
//   )
// }

// export default UserList
