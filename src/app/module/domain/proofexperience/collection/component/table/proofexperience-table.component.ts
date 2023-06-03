import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProofexperienceTableService } from './proofexperience-table.service';
import { ProofexperienceEntity, ProofexperienceTableParams } from 'src/app/api/domain/proofexperience';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ProofexperienceTableService],
	selector: 'app-proofexperience-table',
	templateUrl: './proofexperience-table.component.html',
	styleUrls: ['./proofexperience-table.component.scss'],
})
export class ProofexperienceTableComponent implements OnInit {
	public params$!: Observable<ProofexperienceTableParams>;

	public constructor(private componentService: ProofexperienceTableService) {
	}

	public editProofexperience(proofexperience: ProofexperienceEntity): void {
		this.componentService.editProofexperience(proofexperience);
	}

	public deleteProofexperience(proofexperience: ProofexperienceEntity): void {
		this.componentService.deleteProofexperience(proofexperience);
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
