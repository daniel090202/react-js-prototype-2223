import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

export const setJob = pageLoad => {
    return {
        type: SET_JOB,
        pageLoad: pageLoad
    }
}

export const addJob = pageLoad => {
    return {
        type: ADD_JOB,
        pageLoad: pageLoad
    }
}

export const deleteJob = pageLoad => {
    return {
        type: DELETE_JOB,
        pageLoad: pageLoad
    }
}