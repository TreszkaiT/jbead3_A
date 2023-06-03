import { Observable } from "rxjs";

import { PhoneEntity, PhoneEntityAdd, PhoneEntityUpdate } from "./phone";

export abstract class PhoneDataService { 
    public abstract add$(phone: PhoneEntityAdd): Observable<PhoneEntity>;
    public abstract get$(phoneId: string): Observable<PhoneEntity | undefined>;
    public abstract list$(): Observable<PhoneEntity[]>;
    public abstract update$(phone: PhoneEntityUpdate): Observable<PhoneEntityUpdate>;
    public abstract patch$(phone: PhoneEntityUpdate): Observable<PhoneEntityUpdate>;
    public abstract delete$(entityId: string): Observable<boolean>;
    // public abstract remove$ / delete (phoneId: string): Observable<
}