import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'
import { addTodo } from './features/todoSlice'


function Counter(){
    const count = useSelector((state) => state.counter.value)
    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [ input, setInput ] = useState(0)
    const [ list, setList ] = useState('')
    const renderItems = items.map((item, index)=> <li key={index}>{item}</li>)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    const addTodoList = (e) =>{
        e.preventDefault()
        dispatch(addTodo(list))
    }

    return(
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={()=>dispatch(increment())}>
                Increment
            </button>
            <button onClick={()=>dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e)=>byAmountSubmit(e)}>
                <input type='number' onChange={(e)=>setInput(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            <form onSubmit={(e)=>addTodoList(e)}>
                <input type='text' onChange={(e)=>setList(e.target.value)} />
                <button type='submit'>Submit</button>
            </form> 
            <h1>
                {renderItems}
            </h1>
        </div>
    )
}

export default Counter