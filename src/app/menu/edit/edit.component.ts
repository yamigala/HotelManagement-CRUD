import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public menuForm: FormGroup;
  public menuList: Menu;
  public menus;
  public id: number;

  constructor(
    private service: MenuService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadForm();
    this.editMenu();
  }

  public loadForm() {
    this.menuForm = this.fb.group({
      id: ['', Validators.required],
     details: this.fb.group({
       menuName: ['', Validators.required],
       quantity: ['', Validators.required],
       price: ['', Validators.required]

     }),
      address: this.fb.group({
        city: ['', Validators.required],
        pinCode: ['', Validators.required]
      })
    });
  }

  public editMenu(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getMenuById(id).subscribe(menu => {
      this.menus = menu;
      console.log(this.menus);

      this.menuForm.patchValue({
        id : menu.id,
        details: {
          menuName: menu.details.menuName,

          quantity: menu.details.quantity,
          price: menu.details.price,

        },
        address: {
          city: menu.address.city,
          pinCode: menu.address.pinCode
        }
      });
    });
  }
  public onUpdate(menu: Menu): void {
    this.service
      .updateMenu(menu)
      .subscribe(() => this.router.navigate(['/menu/view']));
  }
}
