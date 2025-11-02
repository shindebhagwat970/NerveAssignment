import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NerveComponent } from './pages/nerveAssignment/nerve.component';

export const routes: Routes = [
  { 
    path: 'Assignment', 
    component: NerveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
