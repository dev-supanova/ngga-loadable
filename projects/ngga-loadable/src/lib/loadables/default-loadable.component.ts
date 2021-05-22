import { Component } from '@angular/core';

import { LoadableComponent } from './base/loadable.component';

@Component({
    selector: 'ngga-loadable',
    template: `
    <div class="loadable">
        <div class="main-content">
            <ng-content></ng-content>
        </div>

        <div class="loader" *ngIf="showLoading === true">
            <ngga-loader></ngga-loader>
        </div>
    </div>
    `,
    styleUrls: ['./base/loadable.component.scss']
})
export class DefaultLoadableComponent extends LoadableComponent {}