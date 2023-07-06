export interface MajorCredits {
    credits: number & {__brand: 'MajorCredits'};
  }
  
  export interface MinorCredits {
    credits: number & {__brand: 'MinorCredits'};
  }
  
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { credits: totalCredits } as MajorCredits;
  }
  
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits: number = subject1.credits + subject2.credits;
    return { credits: totalCredits } as MinorCredits;
  }