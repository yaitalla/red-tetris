import React from 'react';
import { Link } from 'react-router-dom';
import { flex, noBullet, btn} from './style';



const Navbar = () => (
  <div style={flex}>
  <ul style={noBullet}>
    <Link to={'/game'}><button style={btn}> rooms </button> </Link>
  </ul>
</div>
);

export default Navbar;
