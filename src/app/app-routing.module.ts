import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewTrainingComponent} from './components/new-training/new-training.component';
import {HomeComponent} from './components/home/home.component';
import {MyTrainingsComponent} from './components/my-trainings/my-trainings.component';


const routes: Routes = [
  {
    path: 'new-training',
    component: NewTrainingComponent
  },
  {
    path: 'my-trainings',
    component: MyTrainingsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
