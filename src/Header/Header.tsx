import React from 'react'
import {Link} from 'react-router-dom' 




const Header = () => {
    return (
 
  <nav>
          <ul>

                <li>
                  <Link to="/">None</Link>
                </li>
                <li>
                  <Link to="/User">UserList</Link>
                </li>

                <li>
                  <Link to="/PoKe">Search Pokemon</Link>
                </li>
    
            </ul>

        </nav>

    )
}

export default Header