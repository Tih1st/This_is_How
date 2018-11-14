import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { PersistenceService } from 'angular-persistence';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { inputData, outputData } from '../data';


@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html'
})
export class Page2Component {
  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  public outputTree = true;
  public outputText = false;
  public textButton = true;
  public treeButton = false;

  constructor(private appService: AppService,
              private persistenceService: PersistenceService,
              private http: Http) {
    this.appService.pageTitle = 'Page 2';
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'text'; //set only one mode
  }

  apiReal: string = "https://km898b6ahb.execute-api.us-west-2.amazonaws.com/dev/doparse";

  public editorConfigP2;
  public editorDataP2;

   public DataP = "Mime-Version: 1.0 (Apple Message framework v730)\r\nContent-Type: multipart/mixed; boundary=Apple-Mail-13-196941151\r\nMessage-Id: <9169D984-4E0B-45EF-82D4-8F5E53AD7012@example.com>\r\nFrom: foo@example.com\r\nSubject: testing\r\nDate: Mon, 6 Jun 2005 22:21:22 +0200\r\nTo: blah@example.com\r\n\r\n\r\n--Apple-Mail-13-196941151\r\nContent-Transfer-Encoding: quoted-printable\r\nContent-Type: text/plain;\r\n\tcharset=ISO-8859-1;\r\n\tdelsp=yes;\r\n\tformat=flowed\r\n\r\nThis is the first part.\r\n\r\n--Apple-Mail-13-196941151\r\nContent-Type: text/plain; name=This is a test.txt\r\nContent-Transfer-Encoding: 7bit\r\nContent-Disposition: attachment;\r\n\tfilename=This is a test.txt\r\n\r\nHi there.\r\n\r\n--Apple-Mail-13-196941151--"
   public ConfigP ={    "start_date" : "2017-01-01T00:00:00Z",    "user_agent" : "Stitch (+support@stitchdata.com)"  }
    
   inputdata: inputData = {
      input: this.DataP,
      url: this.apiReal
   };

   outputdata: outputData = {
    output: ""
  }


  doPOSTeditor() {
    let ex = <any>Object
    ex = JSON.stringify({toParse: this.inputdata.input, config: this.editor.get() })
    this.persistenceService.set('editorDataP2',this.inputdata.input)
    this.persistenceService.set('editorConfigP2',this.editor.get())
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
    this.editorConfigP2 = this.persistenceService.get('editorDataP2')
    this.editorDataP2 = this.persistenceService.get('editorConfigP2')
  }

}
