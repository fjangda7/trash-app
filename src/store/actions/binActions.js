export const createBin = (bin) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore();
        const binCreator = getState().firebase.auth.uid;

        firestore.collection('bins').add({
            ...bin,
            binCreator: binCreator,
            setUpAt: new Date(),
            needsToBePickedUp: false,
            location: 'somewhere'
        }).then(() => {
            dispatch({type: 'CREATE_BIN', bin});
        }).catch((err) => {
            dispatch({type: 'CREATE_BIN_ERROR', err})
        })

    }
}