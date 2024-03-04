import { useSelector } from "react-redux"
import {TodoItem} from './TodoItem'
const TodoList = () => {
    const filteredTodos = useSelector((state) =>{
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) =>{
            const matchFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchFilter && matchSearch
        })
    })
    return(
        <ul>
            <li className="my-2 text-sm italic capitalize">All your notes here.....</li>
            {
                filteredTodos.map((todo, index) =>(
                    <TodoItem key={index} todo={todo} index={index}/>
                ))
            }
        </ul>
    )
}

export default TodoList