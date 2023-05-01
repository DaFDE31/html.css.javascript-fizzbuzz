class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
  
    isFizz(num) {
        return num == 0? true : num % this.fizz == 0;
    }
  
    isBuzz(num) {
        return num == 0? true : num % this.buzz == 0;
    }
  
    isFizzBuzz(num) {
        return this.isBuzz(num) && this.isFizz(num);
    }
  
    getOutput(num) {
        let ans = "";
        for(let i = 0; i <= num; i++){
            if(this.isFizz(i)){
                ans += "Fizz";
            }
                
            if(this.isBuzz(i)){
                ans += "Buzz";
            }
                
            if(!this.isFizz(i) && !this.isBuzz(i)){
                str += i;
            }
            ans += " ";
        }
        return ans.trim();;
    }
  }
  