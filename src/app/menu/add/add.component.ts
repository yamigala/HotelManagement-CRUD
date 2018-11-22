import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public menuForm: FormGroup;
  public characterRegx: string;
  public numberRegx: string;
  constructor(private service: MenuService, private fb: FormBuilder) {}

  ngOnInit() {
    this.loadForm();
  }

  public loadForm() {
    this.menuForm = this.fb.group({
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
  onSubmit(addmenu): void {
    this.service.addMenu(addmenu).subscribe();
    console.log(addmenu);
  }
  get menuName() {
    return this.menuForm.get('details.menuName');
  }

  // hasFieldError(menuName: string, quantity: number, price: number): boolean {
  //   if (menuName) {
  //     return (
  //       this.menuForm.controls[menuName].invalid &&
  //       (this.menuForm.controls[menuName].touched ||
  //         this.menuForm.controls[menuName].dirty)
  //     );
  //   } else if (quantity) {
  //     return (
  //       this.menuForm.controls[quantity].invalid &&
  //       (this.menuForm.controls[quantity].touched ||
  //         this.menuForm.controls[quantity].dirty)
  //     );
  //   } else if (price) {
  //     return (
  //       this.menuForm.controls[price].invalid &&
  //       (this.menuForm.controls[price].touched ||
  //         this.menuForm.controls[price].dirty)
  //     );
  //   }
  // }
}
