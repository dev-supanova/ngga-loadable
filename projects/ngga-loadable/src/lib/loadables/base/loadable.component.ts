import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    template: ''
})
export class LoadableComponent implements OnChanges {
    showLoading: boolean = false;

    private _loading: boolean = false;
    get loading(): boolean {
        return this._loading;
    }

    @Input('loadng')
    set loading(val: boolean) {
        this._loading = val;
    }

    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.loading) {
            this.showLoading = changes.loading.currentValue;
        }
    }
}