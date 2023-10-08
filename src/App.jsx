import React, { useEffect, useState } from 'react'
import './App.css'
import './Index.css'
import BasicTextFields from './Components/Searchbar'
import Header from './Components/Navbar'
import axios from 'axios'
import ProfileCard from './Components/ProfileCard'
import Swal from 'sweetalert2'

const App = () => {

  const defaultUserName = 'jaffaraman'
  const [searchVal, setSearchVal] = useState('');
  const [userInfo, setUserInfo] = useState('')

  const callApi = async (userNameVal) => {
    try {
      let data = await axios.get(`https://api.github.com/users/${userNameVal}`);
      setUserInfo(data.data)
      // console.log(data.data.blog);
    } catch (error) {
      // console.log(typeof error.name);
      if (error.name === "AxiosError") {
        Swal.fire({
          icon: 'error',
          title: '404 ERROR',
          text: 'Username not found',
        })
      }
    }
  }
  let handleusernameValue = e => {
    e.preventDefault();
    callApi(searchVal)
  }
  useEffect(() => {
    callApi(defaultUserName)
  }, [])

  const handlePortfolio = e => {
    // e.preventDefault()
    const portfolio = userInfo.blog
    portfolio === "" ? Swal.fire({ icon: 'error', title: '404 ERROR', text: 'Portfolio not found' }) : window.open(portfolio, '_blank')
  }
  return (
    <div className='mainDiv overflow-hidden'>
      <Header onSubmit={handleusernameValue} list={<BasicTextFields onChange={e => { setSearchVal(e.target.value) }} />} />
      {/* <BasicTextFields /> */}
      <div className='flex justify-center pl-2 pr-2'>
        <ProfileCard name={userInfo?.name} imageUrl={userInfo?.avatar_url} Bio={userInfo?.bio === null ? "NOT AVAILABLE" : userInfo?.bio} company={userInfo?.company} created={userInfo?.created_at} updated={userInfo?.updated_at} gitProfile={userInfo?.html_url} portfolioClick={handlePortfolio} />
      </div>
    </div>

  )
}

export default App
