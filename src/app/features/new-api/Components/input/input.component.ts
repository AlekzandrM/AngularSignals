import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {InputChildComponent} from "../input-child/input-child.component";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../../rxjs/components/services/posts.service";
import {map, switchMap} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'input-api',
  standalone: true,
  imports: [MatButton, InputChildComponent],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  public counterSig: WritableSignal<number> = signal<number>(2);
  public counter = 2;

  public increaseCounterSig(): void {
    this.counterSig.update(value => value + 1);
    this.counter += 1;
  }

  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  // 1.queryParams as Inputs
  public id: InputSignal<string> = input.required<string>();
  public readonly postsService: PostsService = inject(PostsService);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (!params['id']) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { id: 'dolorem' },
          queryParamsHandling: 'merge',
          replaceUrl: true
        }).then();
      }
    });
  }

  constructor() {
    effect(() => {
      this.postsService.gePosts().pipe(
        map((posts: any[]) => posts.filter(post => post.title.includes(this.id())))
      ).subscribe(posts => console.log('posts', posts));
    });
  }

  // 2.queryParams as Inputs
  public posts = toSignal(toObservable(this.id)
      .pipe(
        switchMap((_) => this.postsService.gePosts()),
        map((posts: any[]) => posts.filter(post => post.title.includes(this.id())))
    )
  );
}
