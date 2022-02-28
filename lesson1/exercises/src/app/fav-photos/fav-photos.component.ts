import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Fave Photos';
  image1 = 'https://www.peta.org/wp-content/uploads/2013/10/3056.FINALratDSC_5F00_0563JessicaFlorence.jpg';
  image2 = 'https://static.boredpanda.com/blog/wp-content/uploads/2015/04/cute-pet-rats-13__880.jpg';
  image3 = 'https://www.thesprucepets.com/thmb/JjfGsn2SaCRYxbvvXRLURSMNebM=/2832x2832/smart/filters:no_upscale()/cute-white-rat-120691475-58a5f3ea5f9b58a3c9067915.jpg';

  constructor() { }

  ngOnInit() {
  }

}