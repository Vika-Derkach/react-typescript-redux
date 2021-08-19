import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch( )
     useEffect(() => {
      dispatch(fetchUsers())
     }, [])
   if (loading) {
       return (
        <div className="preloader-wrapper big active center">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
       )
   }
   if (error) {
       return <h1>{error}</h1>
   }
     
    return (
        <ul >
            {users.map(user => {
               return <li className='user' key={user.id}>
                        <label >
                          {user.name}
                        </label>

                   </li>
                //   const classes = ['todo']
                //   if(todo.completed) {
                //       classes.push('completed')
                //   }
                // return (
                //  <li className={classes.join(' ')} key={todo.id}>
                //     <label >
                //     <input
                //          type="checkbox"
                //          checked={todo.completed}
                //          onChange={onToggle.bind(null, todo.id)}
                //        />
                         
                //         <span >{todo.title}</span>
                //         <i
                //          className="material-icons red-text" 
                //         onClick={event => removeHandler(event, todo.id)}>delete</i>
                //      </label>
                //   </li>
                // )
            })}
        
        </ul>
    )
}
export default UserList