import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes: Routes = [
  { path: 'lijst', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/lijst', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
