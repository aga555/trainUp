import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTrainingComponent } from './components/new-training/new-training.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {TrainingService} from './services/training.service';
import {HttpClientModule} from '@angular/common/http';
import { MyTrainingsComponent } from './components/my-trainings/my-trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTrainingComponent,
    HomeComponent,
    MyTrainingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
