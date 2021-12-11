import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDateAdapter } from 'src/app/adapter/AppDateAdapter';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  author: string;
  title: string;
  price: any;
  dateadded: any;
  dateread: any;
  description: any;
  imageUrl: any;
  rate: any;

  isRead:boolean = false;
  dateAdapter:AppDateAdapter;
  constructor(
    private router:Router) { }

  ngOnInit() {}

  updateDateAdded(dateAdded: any){
    this.dateadded = this.dateAdapter.format(dateAdded,"input");
  }

  updateDateRead(dateRead: any){
    this.dateread = this.dateAdapter.format(dateRead,"input");
    this.isRead = true;
  }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    console.log('Book - ',book);
  }
}
