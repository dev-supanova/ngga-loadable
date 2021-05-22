import { Component } from '@angular/core';

@Component({
    selector: 'gga-default-loader',
    template: `
    <div class="loader-container">
        <div class="default-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    `,
    styleUrls: ['./default-loader.component.scss']
})
export class DefaultLoaderComponent {}