import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { postReducer } from './reducers/post.Reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simpleReducer';
import { Store  } from '@ngrx/store';
import { Observable } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // post: postReducer,
      message: simpleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
