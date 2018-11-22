import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { MenuService } from './menu.service';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddComponent, ViewComponent, EditComponent],
  providers: [MenuService]
})
export class MenuModule { }
