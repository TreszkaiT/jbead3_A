import { Observable } from 'rxjs';

import { ProofexperienceEntity, ProofexperienceEntityAdd, ProofexperienceEntityUpdate } from './proofexperience';

export abstract class ProofexperienceStoreService {
    public abstract dispatchAddEntityAction(entity: ProofexperienceEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: ProofexperienceEntityUpdate): void;
    public abstract selectEntity$(id: string): Observable<ProofexperienceEntity | undefined>;
    public abstract selectEntityList$(): Observable<ProofexperienceEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
