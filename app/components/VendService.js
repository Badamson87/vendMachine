//PRIVATE
import VendingMachine from "../models/VendMachine.js";
import VendFood from "../models/VendFood.js";


//instatiates an instance of the vending machine class
let vm = new VendingMachine(100, [new VendFood("Fritos", 1, 3, "app/img/fritos.jpg"),
new VendFood("Tab", .75, 10, "app/img/tab.jpg"), new VendFood("Mt. Dew", 1, 1, "app/img/mt-dew.jpg")
])




//PUBLIC
export default class VendService {
  //increases currentTransaction and returns new total
  addQuarter() {
    vm.currentTransaction += .25
    return vm.currentTransaction
  }



  //attempts to get the item requested from its index
  vendItem(productIndex) {
    //check if valid
    let product = vm.products[productIndex]
    // IF Exists    we have some            you have enough money
    if (product && product.quantity > 0 && vm.currentTransaction >= product.price) {
      this.processTransaction(product)
      return JSON.parse(JSON.stringify(product))
    }
    return false
  }


  //updates vending data on successful transaction
  processTransaction(product) {
    product.quantity--
    vm.totalMoney += product.price
    vm.currentTransaction -= product.price
  }


  //returns all products from the vending machine
  getProducts() {
    //breaks refrence in memory to protect code
    return JSON.parse(JSON.stringify(vm.products))
  }


  // return change function

  returnChange() {
    console.log(2)
    vm.currentTransaction = 0
  }
}