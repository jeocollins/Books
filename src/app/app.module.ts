import { FirebaseService } from 'src/app/services/firebase.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatButtonModule,} from '@angular/material/button';
import { MatCheckboxModule,} from '@angular/material/checkbox';
import { MatInputModule,} from '@angular/material/input';
import { MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule,} from '@angular/material/core';
import { MatToolbarModule,} from '@angular/material/toolbar';
import { MatProgressSpinnerModule,} from '@angular/material/progress-spinner';
import { MatTabsModule,} from '@angular/material/tabs';
import { MatListModule,} from '@angular/material/list';
import { MatIconModule,} from '@angular/material/icon';
import { MatGridListModule,} from '@angular/material/grid-list';
import { MatCardModule,} from '@angular/material/card';

import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { AppRoutingModule } from './app-routing.module';


const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'books', component:BooksComponent},
  {path:'book/:id', component:BookComponent},
  {path:'add-book', component:AddBookComponent},
  {path:'edit-book/:id', component:EditBookComponent},
  {path:'delete-book/:id', component:DeleteBookComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
