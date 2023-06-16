import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AutomotricesComponent } from './automotrices/automotrices.component';
import { FormAutomotrizComponent } from './automotrices/form-automotriz.component';

const routes:Routes=[
  {path:'', redirectTo:'/automotrices', pathMatch:'full'},
  {path:'automotrices', component:AutomotricesComponent},
  {path:'automotrices/form', component:FormAutomotrizComponent},
  {path:'automotrices/form/:id', component:FormAutomotrizComponent},



]




@NgModule({
  declarations: [
    AppComponent,
    AutomotricesComponent,
    FormAutomotrizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
