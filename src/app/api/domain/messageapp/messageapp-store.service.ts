import { Observable } from 'rxjs';

import { MessageappEntity, MessageappEntityAdd, MessageappEntityUpdate } from './messageapp';

export abstract class MessageappStoreService {
    public abstract dispatchAddEntityAction(entity: MessageappEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: MessageappEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<MessageappEntity | undefined>;
    public abstract selectEntityList$(): Observable<MessageappEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
