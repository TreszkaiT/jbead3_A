import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
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
  ]
})
export class SharedModule { }
