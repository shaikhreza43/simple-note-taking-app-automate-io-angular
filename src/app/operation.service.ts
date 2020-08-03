import { Notes } from './model/notes.model';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(public global: GlobalService) {}

  selectNote = (note) => {
    this.global.selectedNote = note.content;
    this.global.noteId = note.id;
  };

  update = () => {
    let index = this.global.notes.findIndex((note) => {
      return note.id === this.global.noteId;
    });

    this.global.notes[index].content = this.global.selectedNote;
  };

  delete = (item) => {
    let index = this.global.notes.findIndex((note) => {
      return note.id === item.id;
    });

    const arr = this.global.notes.filter((item) => item === item);
    arr.splice(index, 1);
    this.global.notes = arr;
  };

  add = (e) => {
    var obj = {
      id: Number(this.global.addNotes.id),
      title: this.global.addNotes.title,
      content: this.global.addNotes.content,
    };
    this.global.notes.push(obj);
    this.global.addNotes = {
      id: '',
      title: '',
      content: '',
    };
    document.getElementById('close').click();
    console.log(this.global.notes);
  };

}
