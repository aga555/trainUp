import {Component, OnInit} from '@angular/core';
import {Training} from '../../models/training';
import {TrainingService} from '../../services/training.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  clubNames: string[] = [];
  training: Training;

  constructor(private trainingService: TrainingService, private  router: Router) {
  }

  ngOnInit(): void {
    this.getClubName();
    this.training = new Training();
  }

  getClubName() {
    this.trainingService.getTrainingClubNames()
      .subscribe(
        clubs => {
          this.clubNames = clubs;
        }
      );
  }

  saveTraining() {
    this.trainingService.saveTraining(this.training).subscribe(
      training => {
        alert('Training saved' + this.training);
        this.router.navigate(['/my-trainings']);
      }
    );
  }

}
