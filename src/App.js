import { useState } from 'react';
import './App.css';
import './components/layout.css';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const ontitleChangeHandler = (event) => {
    setTitle(event.target.value)
  };

  const onbodyChangeHandler = (event) => {
    setBody(event.target.value)
  };
  
  


  const addList = () =>{
    const newTodos = {
      id: todos.length + 1,
      title,
      body,
      isDone: false
    };

    setTodos([...todos, title, body])
    
    setTitle('');
    setBody('');
  }

  

  return (
    
    <div classname="layout">

      <div className="title">
        <h1>๋์ Todo List๐</h1>
      </div>
      
        <div className='todo'>

        <div className='input-group'>
          ์ ๋ชฉ<input type="text" name='title' className='add-input'
          value={title} onChange={ontitleChangeHandler}>
            </input>
          ๋ด์ฉ<input type="text" name='body' className='add-input'
          value={body} onChange={onbodyChangeHandler}>
            </input>
        </div>

          <button className='add-button'
          onClick={addList}>์ถ๊ฐํ๊ธฐ</button>

        </div>
          
              <TodoList todos={todos}/>
      
    </div>
  );
}

export default App;