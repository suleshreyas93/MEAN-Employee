import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-conformdialog',
  templateUrl: './conformdialog.component.html',
  styleUrls: ['./conformdialog.component.css']
})
export class ConformdialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ConformdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm(employee) {

    console.log("In confirm new employee = ");
    console.log(employee);
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

}
