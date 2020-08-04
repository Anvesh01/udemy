import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature:string=""
  onfeatureSelected(feature:string){
    if(feature =="recipe"){
     this.loadedFeature="recipe"
    }
    else{
      this.loadedFeature="shopping"
    }
  }
}
