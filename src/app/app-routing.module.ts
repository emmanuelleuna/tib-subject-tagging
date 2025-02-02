import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseScreenComponent } from './screens/base-screen/base-screen.component';
import { DashboardScreenComponent } from './screens/dashboard-screen/dashboard-screen.component';
import { TaggingScreenComponent } from './screens/tagging-screen/tagging-screen.component';
import { NewAnnotationScreenComponent } from './screens/new-annotation-screen/new-annotation-screen.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home/tagging', pathMatch: 'full'
  },
  {
    path: 'home', component: BaseScreenComponent, title: 'TIB Subject Tagging', children: [
      // { path: 'dashboard', component: DashboardScreenComponent },
      { path: 'tagging', component: TaggingScreenComponent },
      { path: 'tagging/new-annotation', component: NewAnnotationScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
