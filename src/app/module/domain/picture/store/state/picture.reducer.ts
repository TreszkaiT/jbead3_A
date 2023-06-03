import { PICTURE_FEATURE_KEY, PictureEntity } from 'src/app/api/domain/picture';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as pictureActions from './picture.actions';

export interface PictureState extends EntityState<PictureEntity> {            // State elkészül itt: ids: és entities: property-k azok eleve elkszünek az EntityState-ben. Itt benne, ezekkel nekem már nem kell foglalkozni!!!
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface PicturePartialState {                 // service.impl-ben adom meg hogy tt -->
    readonly [PICTURE_FEATURE_KEY]: PictureState;
}

export const pictureAdapter: EntityAdapter<PictureEntity> =
    createEntityAdapter<PictureEntity>({
        selectId: (model: PictureEntity) => model.id,      // itt adhatom meg, hogy az érkező Entity-knek mi legyen az elsődleges kulcsa, amit használok a Stateben
    });

export const initialState: PictureState = pictureAdapter.getInitialState({        // pictureAdapter segítségével készítúnk egy initialState-t. Ez megjelenik amúgy az authentication.reducer.ts-ben is
    isNewEntityButtonEnabled: true,                                 // Ekkor készül el maga a Reducer, és ezel az Obj.al: initialState fogja inicializálni az adott State állapotát
    loading: false,
});

const pictureReducer = createReducer(
    initialState,
    on(pictureActions.addPicture, (state) => ({                       // Ezek a fgv.el / on() / a különböző Action-okra Hookolnak rá, azaz lefuttatnak egy logikát, amivel én be tudom updatelni a state-t
        ...state,
        loading: false,
        error: null,
    })),
    on(pictureActions.addPictureSuccess, (state, { picture }) =>
        pictureAdapter.addOne(picture, { ...state, loading: true })       // az NgRx Entity abban segít pl. hogy a pictureAdapteren keresztül olyan metódusokat biztosít, amivel nagyon könnyen be tudom módosítani az Entity State-t    
    ),
    on(pictureActions.addPictureFail, (state, { error }) => ({ ...state, error })),
    on(pictureActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(pictureActions.getPicture, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(pictureActions.getPictureSuccess, (state, { picture }) => {
        if (picture) {
            return pictureAdapter.upsertOne(picture, { ...state, loading: false });
        } else {
            return state;
        }
    }),
    on(pictureActions.getPictureFail, (state, { error }) => ({ ...state, error })),
    on(pictureActions.listPictures, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(pictureActions.listPicturesSuccess, (state, { pictures }) =>
        pictureAdapter.upsertMany(pictures, { ...state, loading: true })
    ),
    on(pictureActions.listPicturesFail, (state, { error }) => ({ ...state, error })),
    on(pictureActions.updatePictureSuccess, (state, { picture }) =>
        pictureAdapter.updateOne(picture, state)
    ),
    on(pictureActions.updatePictureFail, (state, { error }) => ({ ...state, error })),
    on(pictureActions.deletePicture, (state) => ({
        ...state,
        loading: false,
        error: null,
    })),
    on(pictureActions.deletePictureSuccess, (state, { id }) =>
            pictureAdapter.removeOne(id, state)
        ),
    on(pictureActions.deletePictureFail, (state, { error }) => ({...state, error })),
);

export function reducer(state: PictureState | undefined, action: Action) {
    return pictureReducer(state, action);
}
