import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input()
  data!: string[];

  // For observable Data
  // @Input()
  // data!: Observable<any>;

  // names: string[] = [];

  constructor(private cd: ChangeDetectorRef) {}

  // For observable Data
  // ngOnInit() {
  //   this.data?.subscribe(item => {
  //     this.names = [...this.names, ...item];
  //     this.cd.markForCheck();
  //   });
  // }

  refresh() {
    this.cd.detectChanges();
  }

  ngOnChanges() {
    console.log('item added: ', this.data)
  }
  
}
