import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){
    return(
        <div>
            <h2>진행중...🖋</h2>
            {props.todos.map((item)=><TodoItem item={item}/>)

    
            
            
            }
            
            
            <h2>완료...🎉</h2>
            
        </div>
    )
}

export default TodoList;