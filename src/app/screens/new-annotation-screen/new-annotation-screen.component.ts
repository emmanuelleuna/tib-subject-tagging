import { Component } from '@angular/core';
import { DatetimeService } from '../../services/datetime.service';
import { Annotation } from '../../models/annotation.interface';
import { Router } from '@angular/router';
import { range } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-new-annotation-screen',
  templateUrl: './new-annotation-screen.component.html',
  styleUrl: './new-annotation-screen.component.css'
})
export class NewAnnotationScreenComponent {

  constructor(
    private datetimeService: DatetimeService,
    private router: Router,
    private messageService: NzMessageService
  ) {

  }

  // annotation insformation ----------
  annotation_date = new Date()
  id_annotation = "Annotation-" + this.annotation_date.getTime()

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

  // VARIABLES =========================================

  // step 1 #
  record_list = []

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.messageService.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.messageService.error(`${file.name} file upload failed.`);
    }
  }


}
