import { Injectable } from '@angular/core';

interface Data {
  [key: string]: string | number | boolean
  appTitle: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  data: Data = {
    appTitle: 'Önéletrajz App'
  }

  constructor() { }

  get(key: keyof Data){
    return this.data[key] || null
  }

  set(key: keyof Data, value: string | number | boolean){
    this.data[key] = value
  }

}
