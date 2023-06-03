import { MESSAGEAPP_FEATURE_KEY, MessageappEntity } from 'src/app/api/domain/messageapp';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as messageappActions from './messageapp.actions';

export interface MessageappState extends EntityState<MessageappEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface MessageappPartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [MESSAGEAPP_FEATURE_KEY]: MessageappState;
}

export const messageappAdapter: EntityAdapter<MessageappEntity> =
    createEntityAdapter<MessageappEntity>({
        selectId: (model: MessageappEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: MessageappState = messageappAdapter.getInitialState({        // messageappAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const messageappReducer = createReducer(
    initialState,
    on(messageappActions.addMessageapp, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(messageappActions.addMessageappSuccess, (state, { messageapp }) =>
        messageappAdapter.addOne(messageapp, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a messageappAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(messageappActions.addMessageappFail, (state, { error }) => ({ ...state, error })),
    on(messageappActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(messageappActions.getMessageapp, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(messageappActions.getMessageappSuccess, (state, { messageapp }) => {
        if (messageapp) {
            return messageappAdapter.upsertOne(messageapp, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(messageappActions.getMessageappFail, (state, { error }) => ({ ...state, error })),
    on(messageappActions.listMessageapps, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(messageappActions.listMessageappsSuccess, (state, { messageapps }) =>
        messageappAdapter.upsertMany(messageapps, { ...state, loading: true })
    ),
    on(messageappActions.listMessageappsFail, (state, { error }) => ({ ...state, error })),
    on(messageappActions.updateMessageappSuccess, (state, { messageapp }) =>
        messageappAdapter.updateOne(messageapp, state)
    ),
    on(messageappActions.updateMessageappFail, (state, { error }) => ({ ...state, error })),
    on(messageappActions.deleteMessageapp, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(messageappActions.deleteMessageappSuccess, (state, { id }) =>
            messageappAdapter.removeOne(id, state)
        ),
    on(messageappActions.deleteMessageappFail, (state, { error }) => ({...state, error })),
);

export function reducer(state: MessageappState | undefined, action: Action) {
    return messageappReducer(state, action);
}
