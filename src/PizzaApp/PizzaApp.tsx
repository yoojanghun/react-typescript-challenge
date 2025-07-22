// find, filter: JS에서 배열 탐색 시 사용되는 메서드
// find : 조건을 만족하는 첫 번째 요소 하나만 반환 (없으면 undefined)
// filter : 조건을 만족하는 모든 요소를 "배열로" 반환

type PizzaObj = {
    name: string;
    price: number;
}

function PizzaApp() {

    const menu = [
        { name: "Margherita", price: 8 },
        { name: "Pepperoni", price: 10 },
        { name: "Hawaiian", price: 10 },
        { name: "Veggie", price: 9 },
    ]

    function placeOrderArr(pizzaName: string): PizzaObj[] {
        const selectedPizza = menu.filter(pizza => {
            return pizza.name === pizzaName;
        })
        return selectedPizza;
    }
    console.log(placeOrderArr("Veggie"));

    function placeOrder(pizzaName: string): PizzaObj | undefined {
        const selectedPizza = menu.find(pizza => {
            return pizza.name === pizzaName;
        })
        return selectedPizza;
    }
    console.log(placeOrder("Veggie"));


    return(
        <h1>hello</h1>
    )
}

export default PizzaApp;