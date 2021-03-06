import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosDispPageRoutingModule } from './autos-disp-routing.module';

import { AutosDispPage } from './autos-disp.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosDispPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutosDispPage]
})
export class AutosDispPageModule {}
