const initState = {
    bins: [
        {id: '1', number: '25', details:'Hard to reach, rarely gets filled.'},
        {id: '2', number: '254', details:'Hard to reach, rarely gets filled.'},
        {id: '3', number: '243535', details:'Hard to reach, rarely gets filled.'},
        {id: '4', number: '23455', details:'Hard to reach, rarely gets filled.'}
    ]
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