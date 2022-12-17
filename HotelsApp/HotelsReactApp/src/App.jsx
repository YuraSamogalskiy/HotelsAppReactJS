import { useState } from 'react'
import './App.css'
import { users } from './users'
import Header from './components/Header'
import Card from './components/Card'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(users)

  const menuUsersRate = [...new Set(users.map((data) => data.rate))]
  const menuUsersCity = [...new Set(users.map((data) => data.city))]
  const menuUsersService = [...new Set(users.map((data) => data.service))]
  const menuUsersStatus = [...new Set(users.map((data) => data.status))]

  const filterUsers = (value) => {
    const newUsers = users.filter((newValue) => {
      return newValue.city === value || newValue.status === value
    })
    setFiltered(newUsers)
  }
  const keys = ['name', 'rate', 'city', 'service', 'status']

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    )
  }

  return (
    <div className="App">
      <Header />
      <input
        type="text"
        placeholder="Search hotels..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        filterUsers={filterUsers}
        setFiltered={setFiltered}
        menuUsers={menuUsersStatus}
      />
      <Button
        filterUsers={filterUsers}
        setFiltered={setFiltered}
        menuUsers={menuUsersCity}
      />

      {!!query.length ? (
        <Card data={search(users)} />
      ) : (
        <Card data={filtered} />
      )}

      <Footer />
    </div>
  )
}

export default App
