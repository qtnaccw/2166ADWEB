import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  time$: Observable<Date>;
  title = "Advanced Dynamic Web Applications"
  presentDate = new Date();
  dataObject: object = { name: 'John', age: 30, city: 'New York' };
  dataArray: any[] = [1, 2, 3, 4, 5];
  jsonString: string = '{"name":"Jane","age":25,"city":"Los Angeles"}';
  nullValue: any = null;
  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
}

