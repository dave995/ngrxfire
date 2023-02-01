import * as PostAction from './post.action';
import { Post } from './post'

export type Action = PostAction.All;


///default app state
const defaultState: Post = {
    text: 'Svp ajouter ici une liste a faire',
    likes: 0
}

///helper function to create a new state object

const newState = (state: any, newData: any) => {
    return Object.assign({}, state, newData)
}

//return function

export function postReducer(state: Post = defaultState, action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case PostAction.EDIT_TEXT:
            return newState(state, { text: action.payload});

        case PostAction.UPVOTE:
                return newState(state, { likes: state.likes +1});

        case PostAction.DOWNVOTE:
            return newState(state, { likes: state.likes -1});   
            
        case PostAction.RESET:
            return defaultState;
            
        default:
            return state;    


    }
}
