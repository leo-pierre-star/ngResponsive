import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  team = [
    {
      icon: 'img_avatar2',
      firstname: 'Mike',
      lastname: 'Boubou',
      status: 'Web Designer'
    },
    {
      icon: 'img_avatar3',
      firstname: 'Paul',
      lastname: 'Baba',
      status: 'Author'
    },
    {
      icon: 'img_avatar5',
      firstname: 'Rick',
      lastname: 'Lasse',
      status: 'Singer'
    },
    {
      icon: 'img_avatar6',
      firstname: 'Ruben',
      lastname: 'Polin',
      status: 'Doctor'
    },
  ]
  ngOnInit(): void {
  }

}
