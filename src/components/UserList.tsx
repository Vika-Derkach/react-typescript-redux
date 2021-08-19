import React from 'react';
import { useSelector } from 'react-redux';
const UserList: React.FC = () => {
     const state = useSelector(state => state)
     console.log(state);
     
    return (
        <div>fnbf</div>
    )
}
export default UserList