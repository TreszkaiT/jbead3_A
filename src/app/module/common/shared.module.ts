import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    CalendarModule,
    MultiSelectModule
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    TabViewModule,
    ToolbarModule,
    CalendarModule,
    MultiSelectModule
  ]
})
export class SharedModule { }
