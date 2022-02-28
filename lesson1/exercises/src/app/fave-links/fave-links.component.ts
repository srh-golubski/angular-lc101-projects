import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
  faveLinks = ["www.google.com", "www.youtube.com", "www.linkedin.com"]
  constructor() { }

  ngOnInit() {
  }

}
