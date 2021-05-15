import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.scss']
})
export class BannerComponentComponent implements OnInit {
  @Input() public entrada: any;
  @Input() public imageSize: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
