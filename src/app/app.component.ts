import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'cors-check';
  searchRes!: string;
  constructor(private searchService: SearchService) {}
  ngOnInit() {
    console.log('inside ngOninit');
    this.search();
    //throw new Error('Method not implemented.');
  }
  
  search() {
    console.log('testing search');
    this.searchService.makeSearch();
  }
}

