import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { ConfigEntity, ConfigStoreService } from './api/config';
import { ConfigService } from './core/config';

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
    private configStoreService: ConfigStoreService,                     // config csere miatt
    @Inject(DOCUMENT) private document: Document,                       // configot így tudja beírni lent a HTML-be
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,                         //  i18n translate for components
    ){
    // this._title.setTitle(this.title);
    this._title.setTitle(this.config.get('appTitle') as string);    

    this.primengConfig.setTranslation({
        accept: 'Accept',
        reject: 'Cancel',
        //translations
    });

    this.translateService.addLangs(['en', 'hu']);
    this.translateService.setDefaultLang('hu');                             // Set default translate language 
    this.translateService.use('hu');

    this.translate('hu')
  }

  public ngOnInit(): void {

    this.configChange$ = this.configStoreService.selectEntity$();                                               // Entity kiszedése
    
    this.primengConfig.ripple = true;                                       // Ripple animation in button (középröl kör irányba mint egy vízbe dobott kő fehér glória mozog kifelé)

    
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

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
    }

}
