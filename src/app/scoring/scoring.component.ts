import { Component, OnInit } from '@angular/core';

import {playerRoles} from '../playerRoles';
import {playerStyles} from '../playerStyles';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {
  public step: number = 1;
  public minNoOfPlayers =  new Array(1);
  public playerRoles: playerRoles[];
  public playerStyles: playerStyles[];

  constructor(private _dataService: DataService) { 

  }

  ngOnInit() {
    this.playerRoles = this._dataService.getPlayerRoles();

    this.playerStyles = this._dataService.getPlayerStyles();
  }



  nextStep() {
    this.step = this.step + 1;
  }

  previousStep() {
    this.step = this.step - 1;
  }

  resetStep() {
    this.step = 1;
  }

  addMinNoOfPlayers() {
    if(this.minNoOfPlayers.length <= 11) {
      this.minNoOfPlayers.length ++;
    }
  }

  subractMinNoOfPlayers() {
    if(this.minNoOfPlayers.length >= 2) {
      this.minNoOfPlayers.length --;
    }
  }

}