import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mainCanvas') mainCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.mainCanvas.nativeElement).getContext('2d');
  }
}
