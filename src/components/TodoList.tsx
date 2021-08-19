import React from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
const TodoList: React.FC = () => {
    const {error, limit, loading, todos, page} = useTypedSelector(state => state.todo)
    const {} =  useActions()
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
      
    return (  <ul >
        {todos.map(todo => {
           return <li  key={todo.id}>
                    <label >
                      {todo.id} -  {todo.name}
                    </label>

               </li>
        
        })}
    
    </ul>)
       
    
}