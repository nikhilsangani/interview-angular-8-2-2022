import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordListComponent } from './record-list/record-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    RecordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
