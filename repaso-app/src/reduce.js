console.log('Hola mundo');


// estado inicial
const initialSate=[{
    id: '1',
    tarea: 'Comprar pan',
    estado: false
}]
//indicamos que el estado = inicial
//el action actualiza el estado
const tareaReducer = (state = initialSate,action)=>{
    if(action?.type === 'agregar'){
    return [...state, action.payload];
    }
    return state;
}
let tareas =tareaReducer();
console.log(tareas);

//añadir otro obj
const nuevaTarea= {
    id: '2',
    tarea: 'Comprar leche',
    estado: true
}
//creando accion
const agregarTareasAccion ={
    type: 'agregar',
    payload: nuevaTarea
    //lo que quiero agregar
}

tareas = tareaReducer(tareas, agregarTareasAccion);
console.log(tareas);