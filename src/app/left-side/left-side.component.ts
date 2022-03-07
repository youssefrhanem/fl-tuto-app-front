import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {

  language =  this.fb.group({});
  langs: Array<string> = [];

  constructor(private readonly translateService: TranslateService,
              private fb: FormBuilder) {
    translateService.addLangs(['en_US','fr_FR'])
  }

  ngOnInit(): void {
    this.langs = this.translateService.getLangs();
    this.language = this.fb.group({
      language : [null],
    });

    const toSelect = this.langs.find(c => c == localStorage.getItem('language'))
    this.language.get('language')?.setValue(toSelect);
  }

  changeLang(language: string) {
    localStorage.setItem('language', language)
    this.translateService.use(language);
  }

}
