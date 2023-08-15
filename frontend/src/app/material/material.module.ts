import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  imports:[
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule],

  exports:[
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule]

})
export class MaterialModule { }
