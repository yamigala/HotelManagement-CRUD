import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { Menu } from './menu.model';


@Injectable()
export class MenuService {

  public menuUrl = 'api/menus';

  constructor(private http: HttpClient) { }

  public getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrl);
  }

public deleteMenu(id: number): Observable<Menu> {
  return this.http.delete<Menu>(this.menuUrl + '/' + id);
}

public addMenu(menu: Menu): Observable<Menu> {
  return this.http.post<Menu>(this.menuUrl, menu);
}
public editMenu(id: number): Observable<Menu> {
  return this.http.patch<Menu>(this.menuUrl, id);
}
public getMenuById(id: number): Observable<Menu> {
  const url = this.menuUrl + '/' + id;
  return this.http.get<Menu>(url);
}
public updateMenu(menu: Menu): Observable<Menu> {
   return this.http.put<Menu>(this.menuUrl, menu);
}
}
