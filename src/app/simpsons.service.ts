import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpsonsService {
  quote: any;
  constructor(public http: HttpClient) {
  this.getQuote()
   }

   getQuote():void{
      this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes').subscribe(data => {
        this.quote = data   
      })
     
   }
}
 