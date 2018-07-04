import { Component, OnInit } from '@angular/core';
// import { ClickDirective } from '../click.directive';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
showInfo: boolean = false;  
    caption: string = 'Show Text';  
     changeData(): void {  
        this.showInfo = !this.showInfo;  
        if (this.showInfo) {  
            this.caption = 'Hide Text';  
        }  
        else {  
            this.caption = 'Show Text';  
        }  
    } 
  constructor() { }
  
  ngOnInit() {
  }

}
