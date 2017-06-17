import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagcloudComponent } from './tagcloud.component';
import { RouterModule } from '@angular/router';

export const routerConfig = [{
  path: '',
  component: TagcloudComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [TagcloudComponent],
  exports: [TagcloudComponent]
})
export class TagcloudModule { }
