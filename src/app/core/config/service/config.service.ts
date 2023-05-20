import { Injectable } from '@angular/core';

interface Data {
  [key: string]: string | number | boolean
  appTitle: string
  api: string
  apiUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  data: Data = {
    appTitle: 'Önéletrajz App',
    api: 'api',
    apiUrl: 'http://localhost:8080'
  }

  constructor() { }

  get(key: keyof Data){
    return this.data[key] || null
  }

  set(key: keyof Data, value: string | number | boolean){
    this.data[key] = value
  }

}
