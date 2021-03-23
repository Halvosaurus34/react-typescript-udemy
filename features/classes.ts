class Vehicle {
  constructor(public color: string) {}
  public drive(): void {
    console.log("chugga chugga");
  }

  protected honk(): void {
    console.log("honk");
  }
}

const vehicle = new Vehicle("red");

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  public drive(): void {
    console.log("vroom");
  }
  starteDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "red");
car.starteDrivingProcess();
