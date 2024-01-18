import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showText: boolean = false;
  toggleText() {
    this.showText = !this.showText;
  }
  showTable: boolean = false;
  toggleTable() {
    this.showTable = !this.showTable;
  }
  showProduct: boolean = false;
  toggleProduct() {
    this.showProduct = !this.showProduct;
  }

  staff = [ 
    { firstName: 'Kristine', lastName: 'Dacquil', email: 'kristineD@gmail.com', role: 'Student' },   
    { firstName: 'Cheena', lastName: 'Silva', email: 'cheenaS@gmail.com', role: 'Student' }, 
    { firstName: 'Jenna', lastName: 'Pangilinan', email: 'jennaP@gmail.com', role: 'Student' }, 
    { firstName: 'Francilyn', lastName: 'Estanislao', email: 'francilynE@gmail.com', role: 'Student' }, 
    { firstName: 'Aubrey', lastName: 'Castro', email: 'aubreyC@gmail.com', role: 'Student' } 
    ];

    products = [
      { imageUrl: '/assets/py.png', name: 'Python'},
      { imageUrl: '/assets/jv.png', name: 'Java'},
      { imageUrl: '/assets/fltr.png', name: 'Flutter'},
      { imageUrl: '/assets/js.jpg', name: 'JavaScript'},
    ];
    
}

