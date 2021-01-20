import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usman4angular';
  name = ' name is usman ';
  work = 'today im learning interpolation';
  test(){
    return this.work
  }
  obj={
    name:" Mohammed Usman",
    age : '18',
  }
  arr=[
    'anil' , ' zahed ' , 'hameed'
  ]
  a = 200 ;
  b = 300 ;
  siteUrl= window.location.href ; 
  difination = " Angular interpolation is used display a component property in the respective view template with double curly braces syntax. ... Interpolation is used for one way data binding "
}
