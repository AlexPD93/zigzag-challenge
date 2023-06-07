import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DogsComponent } from './dogs.component';

@NgModule({
  declarations: [DogsComponent],
  exports: [DogsComponent],
  imports: [CommonModule, HttpClientModule],
})
export class DogsModule {}
