import { Observable } from 'rxjs';

import { MessageappEntity, MessageappEntityAdd, MessageappEntityUpdate } from './messageapp';

export abstract class MessageappDataService {
    public abstract add$(entity: MessageappEntityAdd): Observable<MessageappEntity>;
    public abstract get$(id: string): Observable<MessageappEntity | undefined>;
    public abstract list$(): Observable<MessageappEntity[]>;
    public abstract update$(entity: MessageappEntityUpdate): Observable<MessageappEntityUpdate>;
    public abstract patch$(entity: MessageappEntityUpdate): Observable<MessageappEntityUpdate>; 
    public abstract delete$(entityId: string): Observable<boolean>;
}
