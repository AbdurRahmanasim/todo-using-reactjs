import React ,{ useState } from "react";
import "./todo.css";

const Todo = () => {









  const [inputData , setInputData] = useState('');
  const [items , setItems] = useState([])

  const addItem = () => {
      if(!inputData){}

      else{
    setItems([ ...items , inputData])
    setInputData('')
}
  }

  const deleteItem = (id) => {
      const updatedItems = items.filter((elem , ind) => {
          return ind != id ;
      });
      setItems(updatedItems)
  }




const removeAll = ()  => {
    setItems([])
}







    return(
        <div className="maintodo">
    <div className="todooheading">
        <h1>
            TODO APPLICATION
        </h1>
    </div>
    <div className="todoo">
    <div className="write">
      
        <input type="text" placeholder="ENTER TODO" id="todo-item" 
            value={inputData}

            onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addItem} className="green">ADD TODO</button>
        <button onClick={removeAll} className="red">DELETE ALL</button>
   
    </div>

    <div className="listss">
        <ul id="list">
          {
              items.map((elem,ind) => {
                  return (
                      <li key={ind}>
                          <h3>{elem}</h3>
                          <button onClick={() =>deleteItem(ind)}> Delete</button>
                      </li>
                  )
              })
          }
        </ul>
    </div>
</div>
</div>
    )

    
}

  

export default Todo;