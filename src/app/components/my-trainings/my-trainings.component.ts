import {Component, OnInit} from '@angular/core';
import {Training} from '../../models/training';
import {TrainingService} from '../../services/training.service';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.scss']
})
export class MyTrainingsComponent implements OnInit {

  trainings: Training[];

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit(): void {
    this.getMyTrainings();
  }

  getMyTrainings() {
    this.trainingService.getMyAllTrainings()
      .subscribe(trainings => {
        this.trainings = trainings;
      });
  }
}
