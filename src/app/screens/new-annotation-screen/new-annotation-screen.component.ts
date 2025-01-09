import { Component } from '@angular/core';
import { DatetimeService } from '../../services/datetime.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Record } from '../../models/record.interface';


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

  // STEP 1 VARIABLES =========================================

  record_list: Record[] = []
  isImportModalVisible = false;
  isImporting = false
  importModalTitle = "Import in progress"
  importModalDescription = "This operation may take a few minutes"
  importPercent = 0

  // STEP 1 FUNCTIONS =========================================

  /**
   * Open select file dialog
   * @param fileInput 
   */
  openFileDialog(fileInput: HTMLInputElement): void {
    // clear record list
    this.record_list = []
    fileInput.click();
  }

  /**
   * For file import
   * @param event 
   */
  onFileSelected(event: any): void {

    // get target files 
    const files = event.target.files;

    // display import modal
    this.isImportModalVisible = true

    // start import animation
    this.isImporting = true

    // code ...

    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type === 'application/ld+json') {
          // traitement du fichier ...
          this.record_list.push({
            id: 12345,
            title: "Households' wealth composition across OECD countries and financial risks borne by households",
            abstract: "The first section of this article presents a combined analysis of households\u2019 financial and non-financial balance sheets across OECD countries over the period 1995-2006, based on two OECD data collections \u2013 financial balance sheet accounts and households\u2019 financial and non-financial assets. The scope of the study mainly covers households\u2019 gross wealth (financial, dwellings and land) and therefore does not include debt. The second section, based on the OECD households\u2019 financial and non-financial assets database, analyses financial risks borne by households investing their savings either in investment fund shares, in life insurance reserves or in pension schemes, and how these allocations have changed and developed over time in various OECD countries."
          });

        } else {
          alert(`"${files[i].name}" is not a JSON-LD file!`);
        }

        // update percent
        this.importPercent = (this.record_list.length / files.length) * 100
      }

      // stop animation
      this.isImporting = false

      // update title & description
      this.importModalTitle = "Import complete"
      this.importModalDescription = this.record_list.length + " records imported with success"
    }
  }

  /**
   * Event to execute when cancel importation
   */
  handleCancelImportModal() {
    this.isImportModalVisible = false
  }

  handleFinishImportation() {
    // code ...
    // close modal
    this.isImportModalVisible = false;
  }

}
