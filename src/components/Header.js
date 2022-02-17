import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__first"> {/*First Part of Header containing Icon and Search Bar*/}
        <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1645104100~hmac=bbb365c2aca80ced4f9f68e2a672b0c2" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__second"> {/*Second Part of Header containing Options and Profile*/}
      </div>
    </div>
  )
}

export default Header;