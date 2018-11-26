import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../../shared/api/project.service';
import {ImpProjectService} from '../../shared/service/imp-project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() {
  }

  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onSaveAndClose: EventEmitter<any> = new EventEmitter();

  @Input() disableButtons: boolean;

  cancel() {
    this.onCancel.emit();
  }

  save() {
    this.onSave.emit();
  }

  saveAndClose() {
    this.onSaveAndClose.emit();
  }


}


