import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Users() {
  const [loading, setLoading] = useState(false)
  const [allData, setAllData] = useState({})
  let queryParams = new URLSearchParams('')
  const navigate = useNavigate()

  if (window.location && window.location.search) {
    queryParams = new URLSearchParams(window.location.search)
  }
  const [selectedPage, setSelectedPage] = useState(
    Number(queryParams.get('page')) || 1
  )
  async function getUsers() {
    const usersResp = await fetch(
      `https://reqres.in/api/users/?per_page=3&page=${selectedPage}`
    )
    const usersJson = await usersResp.json()
    console.log('Users Json is', usersJson)
    setLoading(false)
    setAllData(usersJson)
  }

  useEffect(() => {
    getUsers()
    //Set a query param called page
    // To set a query Param use set method
    //(key,value)
    queryParams.set('page', selectedPage)
    //Convert These query params to String
    ///users?page=selectedPage
    const finalUrl = `${window.location.pathname}?${queryParams.toString()}`
    navigate(finalUrl)
  }, [selectedPage])

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
            style={{
              border:
                selectedPage === page ? '3px solid red' : '1px solid black',
            }}
            onClick={() => {
              setSelectedPage(page)
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
