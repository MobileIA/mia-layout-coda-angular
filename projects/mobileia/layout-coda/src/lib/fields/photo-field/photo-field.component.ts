import { Component, OnInit } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';

@Component({
  selector: 'coda-photo-field',
  templateUrl: './photo-field.component.html',
  styleUrls: ['./photo-field.component.scss']
})
export class PhotoFieldComponent extends BaseFieldComponent implements OnInit {

  isUploading = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  onUploadFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const element = files[i];
      this.onUploadFile(element);
    }
  }

  onUploadFile(file) {
    this.isUploading = true;
    this.field.serviceFile.upload(file).toPromise().then(data => {
      this.isUploading = false;
      if (!data.success) {
        return;
      }
      
      this.internalValue = data.response.url;
      this.onChangeValue();
    }).catch(error => {
      this.isUploading = false;
    });
  }

  removeFile() {
    this.internalValue = '';
    this.onChangeValue();
  }
}
