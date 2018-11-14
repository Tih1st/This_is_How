import { Component, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { DropzoneDirective } from 'ngx-dropzone-wrapper';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'forms-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: [
    '../../../vendor/libs/ngx-dropzone-wrapper/ngx-dropzone-wrapper.scss',
    './file-upload.scss'
  ]
})
export class FileUploadComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'File upload - Forms'
  }

  //
  // ngx-dropzone-wrapper
  //

  dropzoneConfig = {
    url: '/upload',
    parallelUploads: 2,
    maxFilesize:     50000,
    filesizeBase:    1000,
    addRemoveLinks:  true,
    previewTemplate: `
<div class="dz-preview dz-file-preview">
  <div class="dz-details">
    <div class="dz-thumbnail">
      <img data-dz-thumbnail>
      <span class="dz-nopreview">No preview</span>
      <div class="dz-success-mark"></div>
      <div class="dz-error-mark"></div>
      <div class="dz-error-message"><span data-dz-errormessage></span></div>
      <div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div></div>
    </div>
    <div class="dz-filename" data-dz-name></div>
    <div class="dz-size" data-dz-size></div>
  </div>
</div>`
  };

  // ***************************************************************************
  // Mock the file upload progress (only for the demo)
  //

  @ViewChild(DropzoneDirective) dropzoneInstance: DropzoneDirective;

  ngAfterViewInit() {
    const component = this;

    this.dropzoneInstance.dropzone().uploadFiles = function(files) {
      var minSteps         = 6;
      var maxSteps         = 60;
      var timeBetweenSteps = 100;
      var bytesPerStep     = 100000;
      var isUploadSuccess  = Math.round(Math.random());

      var self = this;

      for (var i = 0; i < files.length; i++) {

        var file = files[i];
        var totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

        for (var step = 0; step < totalSteps; step++) {
          var duration = timeBetweenSteps * (step + 1);

          setTimeout(function(file, totalSteps, step) {
            return function() {
              file.upload = {
                progress: 100 * (step + 1) / totalSteps,
                total: file.size,
                bytesSent: (step + 1) * file.size / totalSteps
              };

              self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
              if (file.upload.progress == 100) {

                if (isUploadSuccess) {
                  file.status = component.dropzoneInstance.DZ_SUCCESS;
                  self.emit('success', file, 'success', null);
                } else {
                  file.status = component.dropzoneInstance.DZ_ERROR;
                  self.emit('error', file, 'Some upload error', null);
                }

                self.emit('complete', file);
                self.processQueue();
              }
            };
          }(file, totalSteps, step), duration);
        }
      }
    };
  }

  //
  // ng2-file-upload
  //

  uploader = new FileUploader({ url: 'https://evening-anchorage-3159.herokuapp.com/api/' });
  hasBaseDropZoneOver = false;

  fileOver(e:any) {
    this.hasBaseDropZoneOver = e;
  }

}
