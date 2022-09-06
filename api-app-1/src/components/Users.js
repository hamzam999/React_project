import { useEffect, useState } from 'react'

function Users() {
  const [loading, setLoading] = useState(false)
  const [allData, setAllData] = useState({})

  async function getUsers(pageNumber = 1) {
    const usersResp = await fetch(
      `https://reqres.in/api/users/?per_page=3&page=${pageNumber}`
    )
    const usersJson = await usersResp.json()
    console.log('Users Json is', usersJson)
    setLoading(false)
    setAllData(usersJson)
  }
  useEffect(() => {
    getUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  const getPagesArray = () => {
    const pages = []
    for (let i = 1; i <= allData?.total_pages; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <div className="flex">
      {allData?.data?.map((user) => {
        return (
          <div key={user.id}>
            <p>
              <strong>{user.first_name}</strong>
            </p>
            <p>{user.email}</p>
            <img key={user.avatar} src={user.avatar} />
          </div>
        )
      })}
      {getPagesArray().map((page) => {
        return (
          <button
            onClick={() => {
              getUsers(page)
            }}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Users
