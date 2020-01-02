import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers: Array<{ id: string, name: string }> = [];
  products: Array<{ id: string, name: string }> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('Fetching data...');

    /*
    This cannot be http://customer-service:3001/customers/ because is not angular or any other service
    that will make the request. It's your browser (we are using Apache server as web server on deploy)!
    The browser cannot resolve a docker DNS. This would work on a PHP service though (server to server communication).
    */
    this.http.get('http://localhost:3001/customers/').subscribe((data: Array<{ id: string, name: string }>) => {
      data.forEach((customer: { id: string, name: string }) => {
        console.log('Received: ' + customer);
        this.customers.push(customer);
      });
    });

    this.http.get('http://localhost:3002/products/').subscribe((data: Array<{ id: string, name: string }>) => {
      data.forEach((product: { id: string, name: string }) => {
        console.log('Received: ' + product);
        this.products.push(product);
      });
    });
  }

}
