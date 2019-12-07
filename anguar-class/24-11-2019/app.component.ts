//importing your lib from node_modules
import { Component } from '@angular/core';

// component decoration section
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// to process your data between html & ts file
export class AppComponent {
    myVar = "Dashrath";
    myRec = ["ajay","akash","amar"];
    myObj = {name:"akshay",age:20};
    myVar1 = false;
    myVar2 = true;
}
