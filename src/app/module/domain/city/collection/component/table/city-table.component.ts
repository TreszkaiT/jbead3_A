import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable, filter, map } from 'rxjs';

import { CityTableService } from './city-table.service';
import { CityEntity, CityTableParams } from 'src/app/api/domain/city';
import { ActivationEnd, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CityTableService],
	selector: 'app-city-table',
	templateUrl: './city-table.component.html',
	styleUrls: ['./city-table.component.scss'],
})
export class CityTableComponent implements OnInit {
	public params$!: Observable<CityTableParams>;

	currentRoute: string;

	public constructor(private componentService: CityTableService, private router: Router) {
		// const events =
		// router.events.
		// 	pipe( filter(event=>event instanceof NavigationEnd));
		// 	events.subscribe((e:NavigationEnd)=>{
		// 		console.log(e.urlAfterRedirects)
		// 		this.currentRoute = e.urlAfterRedirects;
		// 	})
		const events = 
		router.events.
		pipe(
		  filter(event=>event instanceof NavigationEnd));
	
		events.subscribe((e:NavigationEnd)=>{
		  console.log(e.urlAfterRedirects)
		})
		// this.router.events
		// .subscribe(
		//   (event: NavigationEnd) => {
		// 	// if(event instanceof NavigationStart) {
		// 	//   console.log(event);
		// 	// } 
		// 	console.log(event);
		// 	this.currentRoute = event.urlAfterRedirects.toString();
		// 	console.log(this.currentRoute);
		//   });

	}

	public editCity(city: CityEntity): void {
		this.componentService.editCity(city);
	}

	public deleteCity(city: CityEntity): void {
		this.componentService.deleteCity(city);
		// location.reload(); 								// teljes Appot újratölti
		// window.location.reload();
		// this.ngOnInit();									// only refresh this component

		this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {			// reload this component
			this.router.navigate(['admin/city/list']);
			// this.router.navigate([this.currentRoute]);
		});
	}

	public ngOnInit(): void {
		this.params$ = this.componentService.init$();
	}
}
