import {Component, inject, signal, Signal, WritableSignal} from '@angular/core';
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter, map,
  Observable,
  of,
  shareReplay,
  startWith, switchMap, tap
} from "rxjs";
import {MatButton} from "@angular/material/button";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {PostsService} from "../services/posts.service";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'rxjx',
  standalone: true,
  imports: [MatButton, AsyncPipe, MatFormField, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './rxjx.component.html'
})
export class RxjxComponent {
  public myObjservable = of('Hello World');
  public fromSync: Signal<string> = toSignal(this.myObjservable, {
    requireSync: true
  })
  public fromAsync: Signal<string> = toSignal(this.myObjservable, {
    initialValue: 'loading'
  })
  public toObservable: Observable<string> = toObservable(this.fromAsync);

  //  asynchronous nature of the effect in toObservable
  public mySubject = new BehaviorSubject(0);
  public mySignal = signal(0);
  public myObservable = toObservable(this.mySignal);
  constructor(){
    this.mySubject.subscribe(e => console.log(`Subject value: ${e}`));
    this.myObservable.subscribe(e => console.log(`MyObservable value: ${e}`));
  }
  public updateSubjectValue() {
    this.mySubject.next(this.mySubject.value + 1);
    this.mySubject.next(this.mySubject.value + 1);
    this.mySubject.next(this.mySubject.value + 1);
  }
  public updateSignalValue() {
    this.mySignal.update(v => v + 1);
    this.mySignal.update(v => v + 1);
    this.mySignal.update(v => v + 1);
  }

  //  obtain the first value synchronously in toObservable
  public myObs$ = toObservable(this.mySignal).pipe(
    startWith(this.mySignal()),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  //  Practical exescise
  private readonly postsService = inject(PostsService);

  public search = signal<string>('');
  public posts = toSignal(toObservable(this.search).pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(title => title.length > 2),
    tap(_ => this.loading = true),
    switchMap(name => this.postsService.gePosts()),
    map((posts: any[]) => posts.filter(post => post.title.includes(this.search()))),
    tap(_ => this.loading = false)
  ), { initialValue: [] });
  public loading = false;

}
