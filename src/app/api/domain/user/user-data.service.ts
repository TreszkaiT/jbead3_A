import { Observable } from 'rxjs';

import { UserEntity, UserEntityAdd, UserEntityUpdate } from './user';

export abstract class UserDataService { 
    public abstract add$(user: UserEntityAdd): Observable<UserEntity>;
    public abstract get$(id: string): Observable<UserEntity | undefined>;
    public abstract list$(): Observable<UserEntity[]>;
    public abstract update$(user: UserEntityUpdate): Observable<UserEntityUpdate>;
    public abstract delete$(entityId: string): Observable<boolean>;
}