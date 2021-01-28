import { Component, OnInit } from '@angular/core';
import {MeteoServiceService} from '../../services/meteo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meteo: MeteoServiceService) { }

  ngOnInit(): void {

  }

}
