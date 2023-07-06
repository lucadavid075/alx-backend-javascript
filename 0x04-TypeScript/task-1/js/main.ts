export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
  }
  
  export interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }
  
  export interface StudentClassConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  export class StudentClass implements StudentClassInterface {
    readonly _firstName!: string;
    readonly _lastName!: string;
  
    constructor(firstName: string, lastName: string) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this._firstName;
    }
  }
  
  export function createStudent(ctor: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new ctor(firstName, lastName);
  }