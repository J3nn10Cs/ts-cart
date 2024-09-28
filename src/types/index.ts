export type MenuItem = {
  id: number,
  name: string,
  price: number,
  img: string
}

//le agregamos a la orden la cantidad
export type OrderItem = MenuItem & {
  quantity : number
}