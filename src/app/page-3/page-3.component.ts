import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { PersistenceService } from 'angular-persistence';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { inputData, outputData } from '../data';


@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.component.html'
})
export class Page3Component {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild('editorOne') editorOne: JsonEditorComponent;
  @ViewChild('editorTwo') editorTwo: JsonEditorComponent;

  public outputTree = true;
  public outputText = false;
  public textButton = true;
  public treeButton = false;
  public DataP = {
    "ModuleId":[
{
  "Name": "ModuleId",
  "Start": 0,
  "Length": 0,
  "DataType": "Alphanumeric",
  "Description": "Module ID",
  "Picture": "",
  "ignoreOnImport": false,
  "Template": "",
  "Value": "",
  "ToCanonical": [
    {
      "match": "^\\s*(.{15})",
      "replace": ""
    }
  ],
  "FromCanonical": []
   }
  ]
}
  public ConfigP ={
    "start_date": "2017-01-01T00:00:00Z",
    "user_agent": "Stitch (+support@stitchdata.com)",
    "template": ""
   }
  public editorConfigP3;
  public editorDataP3;
  
  inputdata: inputData = {
    input: "",
    url: "https://ookskinyxa.execute-api.us-west-2.amazonaws.com/dev/doparse"
  };
  outputdata: outputData = {
    output: ""
  }

  constructor(private appService: AppService,
    private persistenceService: PersistenceService,
    private http: Http) {
      this.appService.pageTitle = 'Page 3';
      this.editorOptions = new JsonEditorOptions()
      this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
      this.editorOptions.mode = 'text'; //set only one mode
     }
     
     doPOST() {
      let ex = <any>Object
      ex = JSON.stringify({toParse: this.editorOne.get(), config: this.editorTwo.get() })
      this.persistenceService.set('editorDataP3',this.editorOne.get())
      this.persistenceService.set('editorConfigP3',this.editorTwo.get())
      let url = `${this.inputdata.url}`; 
      this.http.post(url,ex)
      .subscribe(res => {
      this.data = res.json();
      this.outputdata.output = JSON.stringify(res.json(),null, 4)
    });
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
    this.editorConfigP3 = this.persistenceService.get('editorDataP3')
    this.editorDataP3 = this.persistenceService.get('editorConfigP3')
  }

}
