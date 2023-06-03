import { Observable } from "rxjs";

import { PhoneEntity, PhoneEntityAdd, PhoneEntityUpdate } from "./phone";

export abstract class PhoneStoreService { 
    public abstract dispatchAddEntityAction(phone: PhoneEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(phone: PhoneEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<PhoneEntity | undefined>;
    public abstract selectEntityList$(): Observable<PhoneEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}