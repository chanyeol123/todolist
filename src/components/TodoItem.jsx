import React from "react"

function TodoItem(props) {



    return(
        <div className="todo-item">
            {props.item}<br/>
            <button>삭제하기</button>
            <button>완료!</button>
        </div>
    )
}

export default TodoItem;