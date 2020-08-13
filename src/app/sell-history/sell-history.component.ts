import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs = [
        {field: 'Date' },
        {field: 'Crop_Name' },
        {field: 'Quantity'},
        {field: 'MSP'},
        {field: 'Sold_Price'},
        {field: 'Total_Price'}
    ];

    rowData = [
        { Date: '11-08-2020', Crop_Name: 'Rice', Quantity: 15, MSP: 1500, Sold_Price: 2000, Total_Price: 20000 },
        { Date: '11-08-2020', Crop_Name: 'Rice', Quantity: 15, MSP: 1500, Sold_Price: 2000, Total_Price: 20000 },
        { Date: '11-08-2020', Crop_Name: 'Rice', Quantity: 15, MSP: 1500, Sold_Price: 2000, Total_Price: 20000 }
        
    ];

}
