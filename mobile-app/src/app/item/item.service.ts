import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Endpoints } from "../endpoints";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items$ = new Observable<Item[]>();

    constructor(private httpClient: HttpClient, private endpoints: Endpoints) {}

    getItems(): Observable<Item[]> {
        this.items$ = this.httpClient.get<Item[]>(this.endpoints.GET);       

        return this.items$;
    }

    getItem(id: string): Observable<Item> {
        return this.getItems().pipe(
            map(items => items.find(i => i.id === id))
        );
    }
}
