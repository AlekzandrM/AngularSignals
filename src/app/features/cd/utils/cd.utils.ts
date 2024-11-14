import {ElementRef} from "@angular/core";


export function getId() {
  const index: number = 1;
  // @ts-ignore
  window['id'] = window['id'] || 0;
  // @ts-ignore
  window['id']++;
  // @ts-ignore
  const currentPosition = window['id'];
  return index + currentPosition - 1;
}

export function startAnimations(viewChild: ElementRef<any>, timeoutTime: number): void {
  setTimeout(() => {
    if (viewChild) {
      viewChild.nativeElement.style['transform'] = 'scale(1.01)';
      viewChild.nativeElement.style['border-color'] = 'red';
    }
  }, timeoutTime);
}

export function stopAnimations(viewChild: ElementRef<any>, timeoutTime: number): void {
  setTimeout(() => {
    if (viewChild) {
      viewChild.nativeElement.style['transform'] = null;
      viewChild.nativeElement.style['border-color'] = 'black';
    }
  }, timeoutTime + 1000);
}
