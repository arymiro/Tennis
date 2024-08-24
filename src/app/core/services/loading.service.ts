import { Injectable, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly spinnerService = inject(NgxSpinnerService);
  private busyRequestCount: number = 0;

  constructor() { }

  busy(){
    this.busyRequestCount++;
    this.spinnerService.show(undefined,
      {
        type:'ball-scale-ripple',
        bdColor:'rgba(0, 0, 0, 0.8)',
        color:'#fff',
        size:'default'
      })
  }

  idle(){
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0){
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}
