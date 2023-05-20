import { MenuItem } from 'primeng/api';

import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ConfigService } from './core/config';
import { DOCUMENT } from '@angular/common';
import { ConfigEntity, ConfigStoreService } from './api/config';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // public title = environment.title;

  public items!: MenuItem[];

  public configChange$!: Observable<ConfigEntity>;

  constructor(
    private _title: Title,
    private config: ConfigService,
    private configStoreService: ConfigStoreService,                   // config csere miatt
    @Inject(DOCUMENT) private document: Document                      // configot így tudja beírni lent a HTML-be
    ){
    // this._title.setTitle(this.title);
    this._title.setTitle(this.config.get('appTitle') as string);
  }

  public ngOnInit(): void {

    this.configChange$ = this.configStoreService.selectEntity$();                                               // Entity kiszedése
    
    this.items = [
      {
        label: 'Home',
        routerLink: 'home',
      },
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                  },
                  {
                      label:'Video',
                      icon:'pi pi-fw pi-video'
                  },

                  ]
              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Search',
                  icon:'pi pi-fw pi-users',
                  items:[
                  {
                      label:'Filter',
                      icon:'pi pi-fw pi-filter',
                      items:[
                          {
                              label:'Print',
                              icon:'pi pi-fw pi-print'
                          }
                      ]
                  },
                  {
                      icon:'pi pi-fw pi-bars',
                      label:'List'
                  }
                  ]
              }
          ]
      },
      {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
      },
      {
        label: 'Login',
        routerLink: 'login',
      },
      {
        icon: 'pi pi-fw pi-cog',
        routerLink: 'config'
      }
    ];

    this.configStoreService.selectEntity$().pipe(tap(config => {                                    // ha jön téma -> váltás
      this.switchTheme(config.theme);
    })).subscribe();

  }

  private switchTheme(theme: string) {
    let themeLink = this.document.getElementById(                                               // az index.html HEAD-ban az id megváltoztatása: id="app-theme"
        'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
        themeLink.href = theme + '.css';
    }
  }

}
