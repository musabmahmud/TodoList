import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButtons from "./FilterButtons";
import TodoList from "./TodoList";

const Todo = () => {
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");

    const [searchTerm, setSearchTerm] = useState("");

    const handleAddToDo = (text) => {
        dispatch(addTodo(text))
    }

    const handleAddToDoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddToDo(newTodoText.trim());
            setNewTodoText("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value))
    }

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">Personal TODO APP</h2>

            {/* input text and button  */}
            <div className="flex items-center mb-4">
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" />
                <button onClick={handleAddToDoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-gray-600 focus:outline-none"><FaPlus /></button>
            </div>

            {/* filter and search */}
            <div className="flex items-center justify-between">
                <FilterButtons />
                <div className="flex items-center mb-4">
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" type="text" name="addTodoInput" id="addTodoInput" placeholder="Search..." />
                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-gray-600 focus:outline-none"><FaSearch /></button>
                </div>
            </div>
            <TodoList />
        </div>
    )
}

export default Todo