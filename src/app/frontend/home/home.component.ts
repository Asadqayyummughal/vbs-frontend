import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  counterUP(){
    var counters  = document.querySelectorAll('.counter') as HTMLElement|any;
    console.log('checkout counters::::::',counters);
    counters.forEach(function(counter:any) {
    var delay = 10;  
    var time = 2000;
    console.log('get called:::::');
    var target = parseInt(counter.getAttribute('data-target')); 
    console.log('target:::',target);
    
    var increment = target / (time / delay);
    var current = 0;
    var counterInterval = setInterval(function() {
    current += increment;
    counter.textContent = Math.floor(current);
   if (current >= target) 
   {
     clearInterval(counterInterval);
     if(target==500){
       counter.textContent = target + "+";
     }
     else if(target==25){
       counter.textContent = target + "+"+"K";
     }
     else{
       counter.textContent = target + "K";
     }
     
   }
 }, delay);
 });
 
 
   }
   ngAfterViewInit(): void {
    this.counterUP();
       
   }

}
