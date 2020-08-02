import { OperationService } from './../operation.service';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenotesbar',
  templateUrl: './sidenotesbar.component.html',
  styleUrls: ['./sidenotesbar.component.css']
})
export class SideNotesBarComponent implements OnInit {

 
  constructor(public global:GlobalService,public operation:OperationService) {}

  ngOnInit(): void {

    $(document).ready(function(){
      $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }

}
