import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around items-center p-2'>
      <div>
       <h1 className='text-2xl font-bold'>LOGO</h1>
      </div>

      <div className='flex '>
        <input type='search' className='border  rounded-5 p-2' placeholder='search'/>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Contact</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
</ul>
      </div>

      <div>
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Register</a>
  </li>
</ul>
      </div>
    </div>
  )
}

export default Header
