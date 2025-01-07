import { Component, Input } from '@angular/core';
import { Annotation } from '../../models/annotation.interface';
import { DatetimeService } from '../../services/datetime.service';

@Component({
  selector: 'app-annotation-card',
  templateUrl: './annotation-card.component.html',
  styleUrl: './annotation-card.component.css'
})
export class AnnotationCardComponent {

  constructor(protected datetimeService: DatetimeService) { }

  @Input('annotation') annotation!: Annotation
}
