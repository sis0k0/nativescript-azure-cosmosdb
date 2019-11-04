import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { take, mergeMap } from "rxjs/operators";
import { Observable, of, EMPTY } from "rxjs";

import { Item } from "./item/item";
import { ItemService } from "./item/item.service";

@Injectable({
  providedIn: "root"
})
export class ItemResolver {

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Item> {
    const id = route.paramMap.get("id");

    return this.itemService.getItem(id).pipe(
      take(1),
      mergeMap(item => {
        if (item) {
          return of(item);
        } else {
          return EMPTY;
        }
      })
    )
  }
}
