import {Dispatch} from 'redux'

export const GetPokemon = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: "LOADING_POKEMON"
        });

        

    } catch (error) {
        throw new Error(error)
    }
}