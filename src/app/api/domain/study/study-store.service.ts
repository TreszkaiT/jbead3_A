import { Observable } from 'rxjs';

import { StudyEntity, StudyEntityAdd, StudyEntityUpdate } from './study';

export abstract class StudyStoreService {
    public abstract dispatchAddEntityAction(entity: StudyEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: StudyEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<StudyEntity | undefined>;
    public abstract selectEntityList$(): Observable<StudyEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
