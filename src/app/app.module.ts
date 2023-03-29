import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { TableV2Component } from './table_v2/table-v2/table-v2.component';
import { FormsModule } from '@angular/forms';
import { PostPipe } from './table_v2/pipes/post.pipe';
import { SortableHeaderDirective } from './table_v2/directives/sortable-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableV2Component,
    PostPipe,
    SortableHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MaterialModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
