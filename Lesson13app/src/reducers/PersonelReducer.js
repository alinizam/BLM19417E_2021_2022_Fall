const PersonelList = [
    { firstName: 'Ahmet', lastName: 'Ak' }, 
    { firstName: 'Mehmet', lastName: 'Ak' }
];
//const initialState = PersonelList;

const reducer = (state = PersonelList, action) => {
    switch (action.type) {
        case 'LIST':
            state = { ...state }
            break;
        case 'ADD':
            state = [...state,{firstName:action.payload}]
            break; 
    }

    return state;
}

export default reducer;