import {Component, computed, Signal, signal, WritableSignal} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {products} from "../../constants/products.constant";
import {IProduct} from "../../interfaces/product.interface";

@Component({
  selector: 'signals-api',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './signal-api.component.html'
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
