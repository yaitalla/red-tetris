import React from 'react';
import { Link } from 'react-router-dom';
import { flex, noBullet, btn} from './style';


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={flex}>
        <ul style={noBullet}>
          <Link to={'/'}><button style={btn}> PLAY </button> </Link>
        </ul>
      </div>
    )
  }
}
 export default Navbar;
