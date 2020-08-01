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
        'Raect is most popular javascript library for building user interfaces',
    },
    {
      id: 5,
      title: 'User Interafce',
      content:
        'Raect is most popular javascript library for building user interfaces',
    },
    {
      id: 6,
      title: 'User Interafce',
      content:
        'Raect is most popular javascript library for building user interfaces',
    },
    {
      id: 7,
      title: 'User Interafce',
      content:
        'Raect is most popular javascript library for building user interfaces',
    },
    {
      id: 8,
      title: 'User Interafce',
      content:
        'Raect is most popular javascript library for building user interfaces',
    },
    {
      id: 9,
      title: 'User Interafce',
      content:
        'Raect is most popular javascript library for building user interfaces',
    }
  ];

  public selectedNote: any = '';
  public noteId: number;

  constructor() {}
}
