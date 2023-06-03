import { Observable } from 'rxjs';

import { LanguageEntity, LanguageEntityAdd, LanguageEntityUpdate } from './language';

export abstract class LanguageStoreService {
    public abstract dispatchAddEntityAction(entity: LanguageEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: LanguageEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<LanguageEntity | undefined>;
    public abstract selectEntityList$(): Observable<LanguageEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
