import { Injectable } from '@angular/core';
import { playerRoles } from '../playerRoles';
import { playerStyles } from '../playerStyles';

@Injectable()
export class DataService {

  constructor() { }

  getPlayerRoles() {
    return [
      new playerRoles('BT', 'Batsman'),
      new playerRoles('BL', 'Bowler'),
      new playerRoles('WK', 'Wicket Keeper'),
      new playerRoles('AR', 'All Rounder'),
    ];
  }

  getPlayerStyles() {
    return [
      new playerStyles('RHBT',['BT','WK'], 'Right Hand Batsman'),
      new playerStyles('LHBT',['BT','WK'], 'Left Hand Batsman'),
      new playerStyles('RHBL', ['BL'], 'Right Hand Bowler'),
      new playerStyles('LHBL', ['BL'], 'Left Hand Bowler'),  
    ];
  }

}
