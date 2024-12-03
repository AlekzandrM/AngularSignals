import {Component, signal, WritableSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {products} from "../../constants/products.constant";
import {IProduct} from "../../interfaces/product.interface";

@Component({
  selector: 'signals-api',
  standalone: true,
  imports: [ MatButton ],
  template: `
    <div class="mt-4">
      <p class="text-xl"><strong>Writable signal:</strong> {{writableSig()}}</p>
      <div class="flex">
        <button mat-flat-button class="mr-1.5" (click)="setNewValue()">Set a new value</button>
        <button mat-flat-button (click)="updateNewValue()">Update a new value</button>
      </div>
    </div>

    <div class="mt-4">
      <p class="text-xl"><strong>Writable signal with  ValueEqualityFn:</strong> {{productSig().name}}</p>
      <div class="flex">
        <button mat-flat-button class="mr-1.5" (click)="setProductName()">Set product name</button>
      </div>
    </div>

    <div class="mt-4">
      <p class="text-xl"><strong>Lazy Signal:</strong> {{helloSig()}}</p>
    </div>
  `
})
export class SignalAPI {
  public writableSig: WritableSignal<string> = signal('Hello World')

  public productSig: WritableSignal<IProduct> = signal(products[0], {
    equal: (currentValue: IProduct, newValue: IProduct): boolean => currentValue.id === newValue.id
  });

  public helloSig: WritableSignal<string> = signal('Hello World');


  constructor() {
    console.log(this.helloSig());
    this.helloSig.set('New string')
  }

  public setNewValue(): void {
    this.writableSig.set('New Value');
  }

  public updateNewValue(): void {
    this.writableSig.update((value: string): string => value + '!!!');
  }

  public setProductName(): void {
    this.productSig.update((product: IProduct): IProduct => ({...product, name: 'New name'}));
  }
}
