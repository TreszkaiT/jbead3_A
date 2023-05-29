import { Observable } from 'rxjs';

import { ProofexperienceEntity, ProofexperienceEntityAdd, ProofexperienceEntityUpdate } from './proofexperience';

export abstract class ProofexperienceDataService {
    public abstract add$(entity: ProofexperienceEntityAdd): Observable<ProofexperienceEntity>;
    public abstract get$(id: string): Observable<ProofexperienceEntity | undefined>;
    public abstract list$(): Observable<ProofexperienceEntity[]>;
    public abstract update$(entity: ProofexperienceEntityUpdate): Observable<ProofexperienceEntityUpdate>;
    public abstract patch$(entity: ProofexperienceEntityUpdate): Observable<ProofexperienceEntityUpdate>; 
}
