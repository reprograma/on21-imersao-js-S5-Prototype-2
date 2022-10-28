class Driver {
  name;
  age;
  qtyRides = 0;
  amount = 0;
  constructor(name, age) {
    if (age >= 18) {
      this.name = name;
      this.age = age;
    } else {
      return new Error("Não possui a idade m[inima necessária para ser motorista");
    }
  }
}



class Passenger {
  name;
  age;
  password;
  amount = 0;
  constructor(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  requestRide(driver, amount, password) {
    if (password === this.password) {
        if(driver instanceof Driver){
            this.amount-=amount;
            driver.amount +=amount
            driver.numberOfRides++;

        } else{
            console.log('Informe uma motorista corretamente')
        }
   
    }else{
        console.log('A senha está incorreta')
    }
  }
}

const driver1 = new Driver("Tina", "44");
// console.log(driver1);
const driver2 = new Driver("Tinaa", "24");
// console.log(driver2);

const passenger1 =  new Passenger( "Louise", 22, 1234)
// console.log(passenger1);
const passenger2 =  new Passenger( "Linda", 29, 5678)
// console.log(passenger2);

passenger1.requestRide(driver1, 20, 1234)

