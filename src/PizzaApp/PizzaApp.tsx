// find, filter: JS에서 배열 탐색 시 사용되는 메서드
// find : 조건을 만족하는 첫 번째 요소 하나만 반환 (없으면 undefined)
// filter : 조건을 만족하는 모든 요소를 "배열로" 반환

type PizzaObj = {
    name: string,
    price: number
}

type OrderQueue = {
    id: number,
    pizza: PizzaObj,
    status: string
}

function PizzaApp() {

    const menu = [
        { name: "Margherita", price: 8 },
        { name: "Pepperoni", price: 10 },
        { name: "Hawaiian", price: 10 },
        { name: "Veggie", price: 9 },
    ]

    let cashInRegister = 100;
    const orderQueue: OrderQueue[] = [];
    let nextOrderId = 1;

    function addNewPizza(pizza: PizzaObj) {
        menu.push(pizza);
    }

    function placeOrderArr(pizzaName: string): PizzaObj[] {
        const selectedPizza = menu.filter(pizza => {
            return pizza.name === pizzaName;
        })
        return selectedPizza;
    }
    console.log(placeOrderArr("Veggie"));

    function placeOrder(pizzaName: string) {
        const selectedPizza = menu.find(pizza => {
            return pizza.name === pizzaName;
        })

        // selectedPizza가 undefined일 수 있기 때문에
        if(!selectedPizza) return

        cashInRegister += selectedPizza.price;
        const newOrder: OrderQueue = {
            id: nextOrderId, 
            pizza: selectedPizza, 
            status: "ordered"
        };
        nextOrderId += 1;
        orderQueue.push(newOrder);
        return newOrder;
    }
    console.log(placeOrder("Veggie"));
    console.log(cashInRegister);

    function completeOrder(orderId: number) {
        const order = orderQueue.find(order => order.id === orderId);
        
        if(!order) return;

        order.status = "completed";
        return undefined;
    }

    addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
    addNewPizza({ name: "BBQ Chicken", price: 12 });
    addNewPizza({ name: "Spicy Sausage", price: 11 });
    console.log("Menu:", menu);
    console.log("Cash in register:", cashInRegister);

    placeOrder("BBQ Chicken");
    completeOrder(2)

    console.log("Order queue:", orderQueue);

    return(
        <h1>hello</h1>
    )
}

export default PizzaApp;