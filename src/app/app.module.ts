import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { MatInputModule } from  '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from  '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from  '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from  '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from  '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDividerModule,
    MatIconModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    MatDatepickerModule,
    MatNativeDateModule,
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
