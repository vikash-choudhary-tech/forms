import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  bootstrap : [AppComponent]
})
export class AppModule { }
