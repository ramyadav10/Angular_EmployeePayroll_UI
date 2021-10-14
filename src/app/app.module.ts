import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { AddEmployeeComponent } from './MyComponent/add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { Header2Component } from './MyComponent/header2/header2.component';
import { MainTableComponent } from './MyComponent/main-table/main-table.component';

const appRoutes:Routes=[
{path: '', component:MainTableComponent},  
{path: 'addEmp', component:AddEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddEmployeeComponent,
    Header2Component,
    MainTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
