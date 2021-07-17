import React from 'react'
import {createStore} from 'redux';

const App = () => {

    //Reducer
    const counterReducer = (state =0, action)=>{
        switch (action.type) {
            case 'INCREMENT':
                return state +1
            case 'DECREMENT':
                return state -1
        
            default:
                return 0;
        }
    }

    //acciones
    const  actionIncrement ={
        type : 'INCREMENT'
    }
    const  actionDecrement ={
        type : 'DECREMENT'
    }
    //only store
     const store = createStore(counterReducer);


     //subscribe se va a llamar cada ves que se envia una acción
     store.subscribe(()=>{
        console.log(store.getState());
     })
        

   //dispatch se encarga de enviar acciones 
   return (
        <div>

            <button className="btn btn-success" onClick={()=>store.dispatch(actionIncrement)}> INCREMENT</button>
            <button className="btn btn-primary" onClick={()=>store.dispatch(actionDecrement)}> DECREMENT</button>
        </div>
    )
}

export default App
