import { Component } from '@angular/core';
import { Annotation } from '../../models/annotation.interface';
import { range } from 'rxjs';
import { DatetimeService } from '../../services/datetime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tagging-screen',
  templateUrl: './tagging-screen.component.html',
  styleUrl: './tagging-screen.component.css'
})
export class TaggingScreenComponent {

  constructor(private datetimeService: DatetimeService, private router: Router) {

  }


  // VARIABLES =========================================

  // filter ----------
  filter_date = null
  filter_status = 'all'
  filter_id_annotation = null
  filter_isAllSelected = false

  // annotaions
  annotation_list: Annotation[] = []

  // loading
  isLoading = false;


  // FUNCTIONS =========================================

  /**
   * Select all annotation
   */
  onSelectAll() {

  }

  /**
   * On change filter date event
   * @param result 
   */
  onChangeFilterDate(result: Date): void {
    console.log('onChange: ', result);
  }

  /**
   * Onc change filter status event
   */
  onChangeFilterStatus() {

  }

  /**
   * On change filter id annotation event
   */
  onCHangeFilterIdAnnotation() {

  }

  /**
   * Delete annotation
   * @param annotation_list 
   */
  deleteAnnotation(annotation_list: Annotation[]) {

  }

  /**
   * Get all annotations from server
   */
  getAnnotationList() {
    // code ...
    console.log("--- GET ANNoTATION LIST ---");

    for (let i in range(5)) {
      this.annotation_list.push({
        date: this.datetimeService.formatDate(new Date()),
        id: 12232495,
        input_len: 4000,
        runtime: 3600,
        status: "Success"
      })
    }

    for (let i in range(2)) {
      this.annotation_list.push({
        date: this.datetimeService.formatDate(new Date()),
        id: 12232495,
        input_len: 4000,
        runtime: 5400,
        status: "Failed"
      })
    }


  }

  /**
   * Navigate to new annotation page
   */
  goToNewAnnotationPage() {
    // code ...
    this.router.navigateByUrl('home/tagging/new-annotation')
  }

  ngOnInit() {
    this.getAnnotationList()

  }
}
