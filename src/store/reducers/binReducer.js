const initState = {
}

const binReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_BIN':
            console.log('created bin', action.bin);
            return state;
        case 'CREATE_BIN_ERROR':
            console.log('create bin error', action.err);
            return state;
        default: 
            return state;
    }
};

export default binReducer;