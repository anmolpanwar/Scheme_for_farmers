import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-welcome',
  templateUrl: './bidder-welcome.component.html',
  styleUrls: ['./bidder-welcome.component.css']
})
export class BidderWelcomeComponent implements OnInit {
items=[{croptype:"Food Crop",cropname:"Wheat",baseprice:1000,currentbid:1500},
       {croptype:"Food Crop",cropname:"Rice",baseprice:2000,currentbid:2100},
       {croptype:"Cash Crop",cropname:"Sugarcane",baseprice:3500,currentbid:3600}];
  constructor() { }

  ngOnInit(): void {
  }

}
