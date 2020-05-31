import { Space, DEFAULT_SPACE } from "../types";
import { SpaceAction, SET_ANOMALY_SPACE, SET_CONTRIBUTION_SPACE, SET_CONCAT_SPACE, SET_ANOMALY_FILTER, SET_CONTRIBUTION_FILTER, SET_SPACE_TOP_K, SET_SPACE_HEATMAP } from "../actions";

export const spaceReducer = (state: Space = DEFAULT_SPACE, action: SpaceAction): Space => {
    switch (action.type) {
        case SET_ANOMALY_SPACE:
            return {...state, anomaly: action.payload.anomaly};
        case SET_CONTRIBUTION_SPACE:
            return {...state, contribution: action.payload.contribution};
        case SET_CONCAT_SPACE:
            return {...state, concat: action.payload.concat};
        case SET_ANOMALY_FILTER:
            return {...state, anomalyFilter: action.payload.filter};
        case SET_SPACE_TOP_K:
            return {...state, clients: action.payload.clients};
        case SET_CONTRIBUTION_FILTER:
            return {...state, contributionFilter: action.payload.filter};
        case SET_SPACE_HEATMAP:
            return {...state, heatmap: action.payload.heatmap};
        default: 
            return state;
    }
}