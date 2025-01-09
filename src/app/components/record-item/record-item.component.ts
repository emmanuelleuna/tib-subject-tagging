import { Component, Input } from '@angular/core';
import { Record } from '../../models/record.interface';

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrl: './record-item.component.css'
})
export class RecordItemComponent {

  @Input('record') record!: Record
}
