/* eslint-disable react/prop-types */

import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { markCompleted, markInompleted, removeTodo, toggleTodo } from "../redux/actions"

// eslint-disable-next-line react/prop-types
export const TodoItem = ({todo,index}) => {

    const dispatch = useDispatch()

    return(
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="text-gray-500">{index+1}.</span>
                <span className={`capitalize ml-2 ${todo.completed ? "line-through text-red-500" : " "}`}> {todo.text}</span>
            </div>
            <div className="space-x-3 ml-8">
                <button onClick={() => dispatch(toggleTodo(index))} className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded">{todo.completed ? <FaToggleOn/> : <FaToggleOff/>}</button>

                <button onClick={() => dispatch(removeTodo(index))} className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 rounded"><FaTrash/></button>

                {!todo.completed && (
                    <button onClick={() => dispatch(markCompleted(index))} className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded"><FaCheck/></button>
                )}

                {todo.completed && (
                    <button onClick={() => dispatch(markInompleted(index))} className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 rounded"><FaTimes/></button>
                )}
            </div>
        </li>
    )
}