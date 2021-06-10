const initialState = {
    idCount : 5,
    fruits : [
        {
            id: 1,
            name: "Apple",
            weight: 5,
            price: 22000
        },
        {
            id: 2,
            name: "Banana",
            weight: 10,
            price: 4500
        },
        {
            id: 3,
            name: "Watermelon",
            weight: 5,
            price: 8300
        },
        {
            id: 4,
            name: "Durian",
            weight: 3,
            price: 47000
        },
        {
            id: 5,
            name: "Grape",
            weight: 2,
            price: 18000
        },
    ]
}

const reducer = ( state = initialState,  action ) => {
    const { type, payload } = action
    if (type === "buah/Create") {
        const newId = state.idCount + 1
        const newFruit = { ...payload, id: newId}
        return {...state, fruits: [...state.fruits, newFruit], idCount: state.idCount+1}
    }
    else if ( type === "buah/GetOne" ) {
        const getFruit = [...state.fruits].filter(fruit => fruit.id === payload.id)
        return getFruit
    }
    else if ( type === "buah/Edit" ) {
        const editedFruit = [...state.fruits].map(fruit => {
            if (fruit.id === payload.id) return {...payload}
            else return fruit
        })
        return {...state, fruits: editedFruit}
    }
    else if ( type === "buah/Delete" ) {
        console.log(state.fruits);
        const editedDeletedFruit = [...state.fruits].filter(fruit => fruit.id !== payload.id)
        console.log(editedDeletedFruit);
        return {...state, fruits: editedDeletedFruit}
    }    
    return state
}

export default reducer