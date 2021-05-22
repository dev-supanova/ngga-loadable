# NggaLoadable

Component that can show a loading spinner for angular applications

## Install

```bash
npm install ngga-loadable --save
```

## Setup

**Step 1:** Install library

```bash
npm i ngga-loadable --save
```

**Step: 2:** Import NggaLoadableModule to your app NgModule

```typescript
import { CommonModule } from '@angular/common';

import { NggaLoadableModule } from 'ngga-loadable';

@NgModule({
  imports: [
  CommonModule,
    NggaLoadableModule    // <--- Import NggaLoadableModule
  ]
})
export class AppModule { }
```

## Use

```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <ngga-loadable [loading]="loading">
      <div>
        <!-- Content Here -->
      </div>
    </ngga-loadable>
  `
})
export class MyComponent {
  loading: boolean = false;
}
```

## Licennse

MIT

___
