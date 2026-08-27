import React from 'react'
import Logo from './Logo'
import Links from './Links'
import SearchBar from './SearchBar'
import RegisterBtn from './RegisterBtn'
import { Container } from '../container/Container'

const Header = () => {
  return (

    <header className='bg-[oklch(21.4%_0.009_43.1)] w-full'>
      <Container>
        <div className='flex justify-between  h-18 items-center '>
          <div className='flex gap-2 w-120 h-10'>
            <RegisterBtn />
            <SearchBar />
          </div>
          <Links />
          <Logo />
        </div>
      </Container>
    </header>

  )
}

export default Header