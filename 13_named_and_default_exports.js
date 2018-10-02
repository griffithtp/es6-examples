// Default -> import ... from '';       (usually use only if there s only a single object to export)
// Named   -> import { ... } from '';

// example with both Default export and Named export seen in reactjs
import React, { Component } from 'react';

/* 
./index.js
import Teacher, { promote } from "./teacher";

const teacher = new Teacher("John", "MIT");
teacher.teach();
*/

/* 
./teacher.js
import { Person } from "./person";

// named export function
export function promote() {}

export default class Teacher extends Person {
  constructor (name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
*/
