import { PictureEntity, PictureEntityAdd, PictureEntityUpdate } from 'src/app/api/domain/picture';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addPicture = createAction(
    '[Picture Admin] Add Picture',
    props<{ picture: PictureEntityAdd }>()
);

export const addPictureFail = createAction(
    '[Picture Admin] Add Picture Fail',
    props<{ error: string }>()
);

export const addPictureSuccess = createAction(
    '[Picture Admin] Add Picture Success',
    props<{ picture: PictureEntity }>()
);

export const getPicture = createAction('[Picture] Get Picture', props<{ id: string }>());

export const getPictureSuccess = createAction(
    '[Picture] Get Picture Success',
    props<{ picture: PictureEntity | null }>()
);

export const getPictureFail = createAction(
    '[Picture] Get Picture Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Picture Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listPictures = createAction('[Picture Admin] List Pictures');

export const listPicturesSuccess = createAction(
    '[Picture Admin] List Pictures Success',
    props<{ pictures: PictureEntity[] }>()
);

export const listPicturesFail = createAction(
    '[Picture Admin] List Pictures Fail',
    props<{ error: string }>()
);

export const updatePicture = createAction(
    '[Picture Admin] Update Picture',
    props<{ picture: PictureEntityUpdate }>()
);

export const updatePictureFail = createAction(
    '[Picture Admin] Update Picture Fail',
    props<{ error: string }>()
);

export const updatePictureSuccess = createAction(
    '[Picture Admin] Update Picture Success',
    props<{ picture: Update<PictureEntityUpdate> }>()
);
