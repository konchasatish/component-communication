import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp/comp.component';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule, Routes } from '@angular/router';

const communicationRoute: Routes = [
  {path: '', redirectTo:'/comp', pathMatch: 'full'},
  {path: 'comp', component: CompComponent},
  {path: 'comp2', component: Comp2Component, pathMatch: 'full'}
]

@NgModule({
  declarations: [
    CompComponent,
    Comp2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(communicationRoute)
  ]
})
export class CommunicationModule { }
