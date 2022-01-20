// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let newBases = ['A', 'T', 'C', 'G']
      let changeDna = Math.floor(Math.random() * this.dna.length)
      let newDna;
      do {
        newDna = returnRandBase()
      } while (newDna === this.dna[changeDna])
      if (this.dna[changeDna] !== newDna) {
      this.dna[changeDna] = newBases[Math.floor(Math.random() * 4)]
      } else {
        console.log(`The DNA has not mutated`);
      }
    },
    compareDNA(pAequor) {
      let filteredArray = [];
      for (i=0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          filteredArray.push(this.dna[i]);
        }
      }
      let common = filteredArray.length;
      let percent = (filteredArray.length / this.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and Specimen #${pAequor.specimenNum} have ${percent}% DNA in commmon, and include the DNA sequences: ${filteredArray}`);
    },
    willLikelySurvive() {
      let cCount = 0;
      let gCount = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') {
          cCount += 1;
        } else if (this.dna[i] === 'G') {
          gCount +=1;
        }
      }
      let cPerc = (cCount / this.dna.length) *100
      let gPerc = (gCount / this.dna.length) *100
      if ((cPerc + gPerc) >= 60) {
        return true
      } else {
        return false
      }
    } 
  }
}

const surviveDNA = [];
let idCounter = 1;

while (surviveDNA.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    surviveDNA.push(newOrg);
  }
  idCounter++;
}

console.log(surviveDNA)

// console.log(Dna1.dna);
// console.log(Dna1)







