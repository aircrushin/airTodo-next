import React from "react";

const Todo = ({id,title,description,mongoId,complete,deleteTodo,completeTodo}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id+1}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{complete?"Complete":"Pending"}</td>
      <td className="px-6 py-4 flex gap-4">
        <button onClick={()=>deleteTodo(mongoId)} className="py-2 px-2 bg-gray-200 rounded-md text-black">
          Delete
        </button>
        <button onClick={()=>completeTodo(mongoId)} className="py-2 px-2 bg-green-200 rounded-md text-black">
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo;
