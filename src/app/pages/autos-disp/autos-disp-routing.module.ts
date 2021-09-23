import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosDispPage } from './autos-disp.page';

const routes: Routes = [
  {
    path: '',
    component: AutosDispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutosDispPageRoutingModule {}
