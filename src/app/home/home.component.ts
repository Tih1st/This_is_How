import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { inputData, outputData } from '../data';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { PersistenceModule, PersistenceService } from 'angular-persistence'
import { concat } from 'rxjs/operator/concat';
import { EMSGSIZE } from 'constants';

//******************************* 
//TODO: CREATE DATA SERVICE SO THAT DATA PERSISTS BETWEEN ROUTES.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  public editorOptions: JsonEditorOptions;

  public outputTree = true;
  public outputText = false;
  public textButton = true;
  public treeButton = false;

  apiReal: string = "https://b7w5c119rh.execute-api.us-west-2.amazonaws.com/development/flattojson";

  public data;
  public editorDataP1
  inputdata: inputData = {
    input: "",
    url: this.apiReal
  };
  outputdata: outputData = {
    output: ""
  }

  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  
  constructor(
    private appService: AppService,
    private http: Http,
    private persistenceService: PersistenceService) {
    this.appService.pageTitle = 'This is How';
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text']; // set all allowed modes
    this.editorOptions.mode = 'text'; //set starting node
  }
  //Posts data from the text editor
  doPOST() {
    let ez = <any>Object;
    ez = JSON.stringify({flatLines: this.inputdata.input});
    this.persistenceService.set('textDataP1',this.inputdata.input)
    let url = `${this.inputdata.url}`; 
    this.http.post(url, ez)
    .subscribe(res => {
      this.data = res.json();
      this.outputdata.output = JSON.stringify(res.json(),null, 4)
    });
  }

 //Posts data from the JSON Editor
  doPOSTeditor() {
    let ez = <any>Object
    ez = JSON.stringify({flatLines: this.editor.getText()});
    this.persistenceService.set('editorDataP1',this.editor.getText())
    let url = `${this.apiReal}`; 
    this.http.post(url,ez)
    .subscribe(res =>this.data =res.json());
  }

  switchToText(){
    this.outputTree = false;
    this.outputText = true;
    this.textButton = false;
    this.treeButton = true;
  }

  switchToTree(){
    this.outputTree = true;
    this.outputText = false;
    this.textButton = true;
    this.treeButton = false;
  }

  ngOnInit() {
    this.editorDataP1 = this.persistenceService.get('editorDataP1')
    this.inputdata.input = this.persistenceService.get('textDataP1')
  }

}
