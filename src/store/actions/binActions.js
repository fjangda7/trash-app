export const createBin = (bin) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();

        firestore.collection('bins').add({
            ...bin,
            CollectorFirstName: 'Fariha',
            CollectorLastName: 'Atqiya',
            lastPickedUp: new Date(),
            needsToBePickedUp: false,
            location: 'somewhere'
        }).then(() => {
            dispatch({type: 'CREATE_BIN', bin});
        }).catch((err) => {
            dispatch({type: 'CREATE_BIN_ERROR', err})
        })

    }
}