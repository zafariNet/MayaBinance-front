import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
