export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}  
export interface MinorCredits {
  _minorCreditBrand: void;
  credits: number;
}
  
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { credits: totalCredits } as MajorCredits;
  }
  
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { credits: totalCredits } as MinorCredits;
  }