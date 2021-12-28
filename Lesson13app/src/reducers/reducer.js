const initialState = { counter: 20 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            state = { ...state, counter: state.counter + 1 }
            break;
        case 'MINUS':
            state = { ...state, counter: state.counter - 1 }
            break;
    }
    return state;
}

export default reducer;