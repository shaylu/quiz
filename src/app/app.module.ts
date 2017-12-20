import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
