import { LanguageEntity, LanguageEntityAdd, LanguageEntityUpdate } from 'src/app/api/domain/language';

import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

export const addLanguage = createAction(
    '[Language Admin] Add Language',
    props<{ language: LanguageEntityAdd }>()
);

export const addLanguageFail = createAction(
    '[Language Admin] Add Language Fail',
    props<{ error: string }>()
);

export const addLanguageSuccess = createAction(
    '[Language Admin] Add Language Success',
    props<{ language: LanguageEntity }>()
);

export const getLanguage = createAction('[Language] Get Language', props<{ id: string }>());

export const getLanguageSuccess = createAction(
    '[Language] Get Language Success',
    props<{ language: LanguageEntity | null }>()
);

export const getLanguageFail = createAction(
    '[Language] Get Language Fail',
    props<{ error: string }>()
);

export const changeNewEntityButtonEnabled = createAction(
	'[Language Admin] Change new Entity Button Enabled',
	props<{ enabled: boolean }>()
); 

export const listLanguages = createAction('[Language Admin] List Languages');

export const listLanguagesSuccess = createAction(
    '[Language Admin] List Languages Success',
    props<{ languages: LanguageEntity[] }>()
);

export const listLanguagesFail = createAction(
    '[Language Admin] List Languages Fail',
    props<{ error: string }>()
);

export const updateLanguage = createAction(
    '[Language Admin] Update Language',
    props<{ language: LanguageEntityUpdate }>()
);

export const updateLanguageFail = createAction(
    '[Language Admin] Update Language Fail',
    props<{ error: string }>()
);

export const updateLanguageSuccess = createAction(
    '[Language Admin] Update Language Success',
    props<{ language: Update<LanguageEntityUpdate> }>()
);

export const deleteLanguage = createAction(
    '[Language Admin] Delete Language',
    props<{ id: string }>()
);

export const deleteLanguageFail = createAction(
    '[Language Admin] Delete Language Fail',
    props<{ error: string }>()
);

export const deleteLanguageSuccess = createAction(
    '[Language Admin] Delete Language Success',
    props<{ id: string }>()
);