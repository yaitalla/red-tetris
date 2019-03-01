import React from 'react';
import {board, center, mapper} from './style';
import { connect } from 'react-redux';
import lifecycle from 'react-pure-lifecycle';

const componentDidMount = (props) => {
     console.log('userBoard props: ', props);
  };
  const componentDidUpdate = (props) => {
    // console.log('global updated props: ', props);
  };
  const methods = {
    componentDidMount,
    componentDidUpdate
  };

const UserMapper = (user) => {
    return ( <div style={mapper}>
         {user}
     </div>)
 }

const UserBoard = ({users}) => {
    console.log(' users', users)
    return ( 
        <div style={board}>
          <h2 style={center}>connected users</h2>
          <div style={center}>
          {users.length == 0 ? "no user yet"
            :   users.map((user, i) => <div key={i}>{UserMapper(user)}</div> )
          }
          </div>
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(lifecycle(methods)(UserBoard));