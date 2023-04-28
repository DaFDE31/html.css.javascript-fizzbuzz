class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
  
    isFizz(num) {
        return num%this.fizz == 0;
    }
  
    isBuzz(num) {
        return num%this.buzz == 0;
    }
  
    isFizzBuzz(num) {
        return num%this.fizz == 0 && num%this.buzz == 0;
    }
  
    getOutput(num) {
        return null;
    }
  }
  