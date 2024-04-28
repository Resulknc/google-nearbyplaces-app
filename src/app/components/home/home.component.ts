import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  constructor(private router:Router){
  }
  

  ngOnInit():void{
  }

  onButtonClick(longitude:number, latitude:number, radius:number){
    this.router.navigate(['/map'],{queryParams:{longitude:longitude,latitude:latitude,radius:radius}})
  }
}
