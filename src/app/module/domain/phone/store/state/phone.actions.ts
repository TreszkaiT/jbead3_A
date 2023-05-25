import { PhoneEntity, PhoneEntityAdd, PhoneEntityUpdate } from 'src/app/api/domain/phone';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addPhone = createAction(
    '[Phone Admin] Add Phone',
    props<{ phone: PhoneEntityAdd }>()
);

export const addPhoneFail = createAction(
    '[Phone Admin] Add Phone Fail',
    props<{ error: string }>()
);

export const addPhoneSuccess = createAction(
    '[Phone Admin] Add Phone Success',
    props<{ phone: PhoneEntity }>()
);

export const getPhone = createAction('[Phone] Get Phone', props<{ id: string }>());

export const getPhoneSuccess = createAction(
    '[Phone] Get Phone Success',
    props<{ phone: PhoneEntity | null }>()
);

export const getPhoneFail = createAction(
    '[Phone] Get Phone Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Phone Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listPhones = createAction('[Phone Admin] List Phones');

export const listPhonesSuccess = createAction(
    '[Phone Admin] List Phones Success',
    props<{ phones: PhoneEntity[] }>()
);

export const listPhonesFail = createAction(
    '[Phone Admin] List Phones Fail',
    props<{ error: string }>()
);

export const updatePhone = createAction(
    '[Phone Admin] Update Phone',
    props<{ phone: PhoneEntityUpdate }>()
);

export const updatePhoneFail = createAction(
    '[Phone Admin] Update Phone Fail',
    props<{ error: string }>()
);

export const updatePhoneSuccess = createAction(
    '[Phone Admin] Update Phone Success',
    props<{ phone: Update<PhoneEntityUpdate> }>()
);
