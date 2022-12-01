import React, { useState } from "react";
import { HiOutlineTrash, HiOutlinePlusCircle } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMinusCircle, AiOutlineCheckCircle } from "react-icons/ai";

function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      item: item,
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleStatusTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      })
    );
  };

  return (
    <div className="w-full h-screen bg-[#1A1A1A]">
      <div className="bg-[#0D0D0D] w-full h-[200px] text-center items-center flex justify-center font-black">
        <p className="text-[40px] text-[#4EA8DE]">todo</p>
      </div>
      <div className="w-full flex justify-center items-center py-8">
        <div className="w-full flex-col sm:flex-row max-w-[736px] flex justify-center items-center gap-2 px-8">
          <div className="flex flex-grow w-full">
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="bg-[#262626] text-[#F2F2F2] border border-[#333333] rounded-[4px] w-full h-[54px] outline-none p-4 flex-grow placeholder:text-[#808080]"
              placeholder="Add a new task"
            />
          </div>
          <div>
            <button
              onClick={handleAddTodo}
              className="bg-[#1E6F9F] rounded-[4px] h-[52px] p-4 text-[#F2F2F2] text-sm border-none flex justify-center items-center gap-2"
            >
              <p className="text-sm font-bold">Create</p>
              <p className="text-base">
                <HiOutlinePlusCircle />
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center py-8">
        <div className="w-full max-w-[736px] flex justify-between items-center gap-2 px-8">
          <div className="created-tasks flex gap-2 justify-center items-center">
            <span className="text-[#4EA8DE] text-sm font-bold">
              Created tasks
            </span>
            <span className="bg-[#333333] py-[2px] px-2 text-[#D9D9D9] font-bold rounded-full text-xs">
              {todos.length}
            </span>
          </div>
          <div className="completed-tasks flex gap-2 justify-center items-center">
            <span className="text-[#8284FA] text-sm font-bold">Completed</span>
            <span className="bg-[#333333] py-[2px] px-2 text-[#D9D9D9] font-bold rounded-full text-xs">
              {todos.filter((todo) => todo.completed).length} / {todos.length}
            </span>
          </div>
        </div>
        <div className="w-full max-w-[736px] flex flex-col py-8 gap-3 px-8">
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="w-full h-[72px] p-4 shadow-md flex items-start gap-3 bg-[#262626] text-[#F2F2F2] border border-[#333333] rounded-[4px]"
              >
                <span
                  onClick={() => handleStatusTodo(todo.id)}
                  className="cursor-pointer flex-grow-0 order-0 w-[24px] h-[24px] flex justify-center items-center"
                >
                  {todo.completed ? (
                    <AiOutlineCheckCircle color="#8284FA" size={18} />
                  ) : (
                    <AiOutlineMinusCircle color="#4EA8DE" size={18} />
                  )}
                </span>
                <span
                  className={`text-sm flex-grow order-1 leading-5 ${
                    todo.completed
                      ? "text-[#808080] line-through"
                      : "text-[#F2F2F2]"
                  }`}
                >
                  {todo.item}
                </span>
                <span
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="flex-grow-0 order-2 w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                >
                  <HiOutlineTrash color="#808080" />
                </span>
              </div>
            );
          })}
          {todos.length < 1 && (
            <div className="flex flex-col justify-center items-center py-16">
              <span className="text-[#333333] text-9xl">
                <IoIosSearch />
              </span>
              <span className="text-[#333333] text-3xl">
                No todos left for you!
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
