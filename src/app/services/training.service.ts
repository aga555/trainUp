import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Training} from '../models/training';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Constants} from '../constans';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private  httpClient: HttpClient) {
  }

  getTrainingClubNames() {
    return this.httpClient.get<string[]>(Constants.TRAINING_CLUBS);
  }
  getMyAllTrainings(){
    return this.httpClient.get<Training[]>(Constants.TRAININGS_ALL);
  }

  saveTraining(training: Training): Observable<Training> {
    return this.httpClient.post(Constants.TRAININGS_ALL, training).pipe(map(
      data => data as Training
    ));
  }
}
