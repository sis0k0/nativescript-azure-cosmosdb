import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Item } from "./item";
import { FormGroup, FormControl } from "@angular/forms";
import { ItemService } from "~/app/item/item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    itemForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private itemService: ItemService,
    ) { }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { item: Item }) => {
                const { item } = data;
                this.itemForm = new FormGroup({
                    id: new FormControl(item.id),
                    name: new FormControl(item.name),
                    role: new FormControl(item.role),
                });
            });
    }

    submit(): void {
        const updatedItem = this.itemForm.value;

        this.itemService.updateItem(updatedItem)
            .subscribe(_ => {
                this.router.navigate(["/items"]);
            });
    }
}
