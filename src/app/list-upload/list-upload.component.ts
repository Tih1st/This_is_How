import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { Observable } from 'rxjs/Observable';
import { FileUpload } from '../file-upload';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {
 
  showFile = false;
  fileUploads: Observable<Array<FileUpload>>;
 
  constructor(private uploadService: UploadFileService) { }
 
  ngOnInit() {
  }
 
  showFiles(enable: boolean) {
    this.showFile = enable;
 
    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
}