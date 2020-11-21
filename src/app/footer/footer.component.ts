import { Component, OnInit } from '@angular/core';
import { SimpsonsService } from '../simpsons.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public http: SimpsonsService) { }

  ngOnInit(): void {
  }

}
