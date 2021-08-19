import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
const TodoList: React.FC = () => {
    const {error, limit, loading, todos, page} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} =  useActions()

    const pages = [1, 2, 3 ,4 ,5] 
    useEffect(() => {
        fetchTodos( page, limit )
       }, [page]) 

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
                      {todo.id} -  {todo.title}
                    </label>

               </li>
        
        })}
        <div style={{display: 'flex'}}>
        {pages.map(p => 
    <div onClick={() => setTodoPage(p)} style={{border:p === page ? '2px solid green ' : '1px solid grey', padding: 10}}>
        {p}
    </div>
       )}
        </div>
  

     
    </ul>)
       
    
}
export default TodoList