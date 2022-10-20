import { createSlice } from '@reduxjs/toolkit'
import Reducers from '../interfaces'

interface InitialState {
    data: Reducers.Character[]
}

const initialState: InitialState = {
    data: []
}

export const charactersSlice = createSlice({
    name: 'charactersStore',
    initialState,
    reducers: {
        dispatchCharacters: (state, action) => {
            state.data = action.payload
        }
    },
})

const dispatchCharacters = (data: Reducers.Character[]) => charactersSlice.actions.dispatchCharacters(data)

export default charactersSlice.reducer
export {
    dispatchCharacters
}