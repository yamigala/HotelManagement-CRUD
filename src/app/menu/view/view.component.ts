import { Component, OnInit } from "@angular/core";
import { Menu } from "../menu.model";
import { MenuService } from "../menu.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  constructor(private service: MenuService) {}

  public menuList: Menu[];
  public id: number;

  ngOnInit() {
    this.getMenu();
  }

 public getMenu(): void {
    this.service.getMenu().subscribe(menu => {
      this.menuList = menu;
      console.log(this.menuList);
      // console.log("done");
    });
  }

public  deleteMenu(id: number) {
    this.service.deleteMenu(id).subscribe();
    this.getMenu();
  }
}
