import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public notes = [
    { id: 1, title: 'My First Note', content: 'Angular is awesome' },
    {
      id: 2,
      title: 'My Second Note',
      content: 'Angular is a Framework maintained by Google',
    },
    {
      id: 3,
      title: 'React JS',
      content: 'React is an awesome Javascript Library developed by Facebook',
    },
    {
      id: 4,
      title: 'User Interafce',
      content:
        'React is most popular javascript library for building user interfaces',
    },
    {
      id: 5,
      title: 'Lorem Ipsum',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 6,
      title: 'Some Dummy Text',
      content:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 7,
      title: 'User Interafce',
      content:
        'React is most popular javascript library for building user interfaces',
    },
    {
      id: 8,
      title: 'User Interafce',
      content:
        'React is most popular javascript library for building user interfaces',
    },
    {
      id: 9,
      title: 'User Interafce',
      content:
        'React is most popular javascript library for building user interfaces',
    }
  ];

  public selectedNote: any = '';
  public noteId: number;
  public openModal:boolean=true;

   public addNotes:any={
    id:this.notes.length+1,
    title:'',
    content:''
}
  constructor() {}
}
