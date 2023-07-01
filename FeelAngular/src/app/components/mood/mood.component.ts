import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {
  searchTerm: string;
  results: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search() {
    if (this.searchTerm) {
      const apiUrl = 'https://localhost:7243/api/Musica/musica/feeling/'; // Substitua pela URL da sua API
      this.http.get<any[]>(`${apiUrl}${this.searchTerm}`).subscribe((data) => {
        this.results = data;
      });
    } else {
      this.results = [];
    }
  }
  redirectLink(link: string) {
    window.open(link);
  }
}
