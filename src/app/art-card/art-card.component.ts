import { Component } from '@angular/core';
import { ARTS } from '../artdata';
import { Art } from '../models/art';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.css']
})
export class ArtCardComponent {

  arts: Art[] = ARTS;
  
  addComment(){
    console.log();
  }
}
