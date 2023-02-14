import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './components/layout/private-layout/private-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule {}
