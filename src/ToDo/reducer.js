import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

// 1. Initial states.
export const initState = {
    job: '',
    jobs: []
}

// 3. Reducer.
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.pageLoad
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.pageLoad]
            }
        case DELETE_JOB:
            const newState = [...state.jobs]
            newState.splice(action.pageLoad, 1)

            return {
                ...state,
                jobs: newState
            }
        default:
            throw new Error('Invalid action!')
    }
}

export default reducer