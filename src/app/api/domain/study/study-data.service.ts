import { Observable } from 'rxjs';

import { StudyEntity, StudyEntityAdd, StudyEntityUpdate } from './study';

export abstract class StudyDataService {
    public abstract add$(entity: StudyEntityAdd): Observable<StudyEntity>;
    public abstract get$(id: string): Observable<StudyEntity | undefined>;
    public abstract list$(): Observable<StudyEntity[]>;
    public abstract update$(entity: StudyEntityUpdate): Observable<StudyEntityUpdate>;
    public abstract patch$(entity: StudyEntityUpdate): Observable<StudyEntityUpdate>; 
}
