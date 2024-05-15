import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { AngularCardComponent } from './shared/card/angular-card/angular-card.component';
import { data } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // Array of items to paginate
  items: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  data :any[] =data
  name='Angular';
  

  constructor(
    private apiService: ApiService,
    
  ) {}

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }
  
  }

