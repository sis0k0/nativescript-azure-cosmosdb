import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { item: Item }) => {
                this.item = data.item;
            });
    }
}
