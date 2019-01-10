import React from 'react';
import {render} from 'react-dom';
import KanbanBoardContainer from './KanbanBoardContainer';

// let cardsList = [
//   {
//     id: 1,
//     title: "Read the BookRead the BookRead the BookRead the BookRead the BookRead the BookRead the BookRead the BookRead the Book",
//     description: "I should read the whole book",
//     color: '#BD8D31',
//     status: "in-progress",
//     tasks: []
//   },
//   {
//     id: 2,
//     title: "Write some code",
//     description: "Code along with the samples in the book",
//     color: '#3A7E28',
//     status: "todo",
//     tasks: [
//       {
//         id: 1,
//         name: "ContactList Example",
//         done: true
//       },
//       {
//         id: 2,
//         name: "Kanban Example",
//         done: false
//       },
//       {
//         id: 3,
//         name: "My own experiments",
//         done: false
//       }
//     ]
//   }
// ];

render(<KanbanBoardContainer />, document.getElementById('root'));