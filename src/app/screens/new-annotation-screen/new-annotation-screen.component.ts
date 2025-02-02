import { Component } from '@angular/core';
import { DatetimeService } from '../../services/datetime.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Record } from '../../models/record.interface';
import { FileService } from '../../services/file.service';


@Component({
  selector: 'app-new-annotation-screen',
  templateUrl: './new-annotation-screen.component.html',
  styleUrl: './new-annotation-screen.component.css'
})
export class NewAnnotationScreenComponent {

  constructor(
    protected datetimeService: DatetimeService,
    private router: Router,
    private messageService: NzMessageService,
    private fileService: FileService
  ) {

  }

  backToList(){
    this.router.navigateByUrl('/home/tagging')
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

  // STEP 2 VARIABLES =========================================

  steppers_name = ['Dataset preparation', 'Model loading', 'Dataset tokenization', 'Annotation']
  stepper_1_progression = 0
  stepper_2_progression = 0
  stepper_3_progression = 0
  stepper_4_progression = 0

  // Waiting, In progress, Finished
  stepper_1_state: "Waiting" | "In progress" | "Finished" = "Waiting";
  stepper_2_state: "Waiting" | "In progress" | "Finished" = "Waiting";
  stepper_3_state: "Waiting" | "In progress" | "Finished" = "Waiting";
  stepper_4_state: "Waiting" | "In progress" | "Finished" = "Waiting";

  // Temps d'exécution en secondes
  time: number = 0;
  private timeInterval: any; // ID pour l'intervalle

  // STEP 2 FUNCTIONS =========================================

  /**
   * Prepare dataset for annotation
   */
  dataset_preparation() {

  }

  /**
   * Loading model for annotation
   */
  loading_model() {

  }

  /**
   * Tokenization of dataset
   */
  tokenize_dataset() {

  }

  /**
   * Annotate record
   */
  annotate() {

  }

  async start_annotation(): Promise<void> {

    // Réinitialiser le compteur de temps
    this.time = 0;

    // Démarrer le compteur de temps
    this.timeInterval = setInterval(() => {
      this.time += 1;
    }, 1000); // Incrémente chaque seconde

    const steps = [
      {
        name: "Dataset preparation",
        action: this.dataset_preparation.bind(this),
        progressionKey: "stepper_1_progression",
        stateKey: "stepper_1_state",
      },
      {
        name: "Model loading",
        action: this.loading_model.bind(this),
        progressionKey: "stepper_2_progression",
        stateKey: "stepper_2_state",
      },
      {
        name: "Dataset tokenization",
        action: this.tokenize_dataset.bind(this),
        progressionKey: "stepper_3_progression",
        stateKey: "stepper_3_state",
      },
      {
        name: "Annotation",
        action: this.annotate.bind(this),
        progressionKey: "stepper_4_progression",
        stateKey: "stepper_4_state",
      },
    ];

    for (const step of steps) {
      // Start the step
      console.log(`Starting: ${step.name}`);
      (this as any)[step.stateKey] = "In progress";

      // Simulate progress
      await this.simulateProgress(step.progressionKey);

      // Complete the step
      (this as any)[step.stateKey] = "Finished";
      step.action();
      console.log(`Finished: ${step.name}`);
    }

    // Arrêter le compteur de temps après la fin
    clearInterval(this.timeInterval);
    console.log(`Annotation process completed in ${this.time} seconds.`);
  }

  private simulateProgress(progressionKey: string): Promise<void> {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if ((this as any)[progressionKey] < 100) {
          (this as any)[progressionKey] += 10; // Increment progress by 10%
          console.log(`${progressionKey}: ${(this as any)[progressionKey]}%`);
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 500); // Update progress every 500ms
    });
  }

  // STEP 3 VARIABLES =========================================
  output = [
    {
      filename: "xxxxxxx",
      prediction: [
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
      ]
    },
    {
      filename: "xxxxxxx",
      prediction: [
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
      ]
    },
    {
      filename: "xxxxxxx",
      prediction: [
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
        "gnd:xxxxxxx",
      ]
    }
  ]

  // STEP 3 FUNCTIONS =========================================

  export_annotation() {
    let filename = "prediction_" + new Date() + '.json'
    this.fileService.downloadJson(this.output, filename)
  }



}
