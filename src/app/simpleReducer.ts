import { ActivationEnd } from '@angular/router'
import { Action } from '@ngrx/store'

export function simpleReducer(state: string = 'Hello Word', action: Action) {
    console.log(action.type, state)

    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola Mundo'
        case 'FRENSH':
            return state = 'Bonjour le monde'    

         default:
            return state;   
    }
}