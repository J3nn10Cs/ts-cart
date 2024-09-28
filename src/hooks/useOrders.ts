import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order,setOrder] = useState<OrderItem[]>([])
  
  const addItem = (item : MenuItem) => {

    const itemExist = order.find(orderItem => orderItem.id === item.id)

    if(itemExist){
      //identificar el elemento
      const updateOrder = order.map(orderItem => 
        orderItem.id === item.id ? 
        {...orderItem, quantity: orderItem.quantity+1} : 
        orderItem
      )
      setOrder(updateOrder)
    }else{
      //nuevi item pra poder agregar la cantidad
      const newItem = {...item, quantity : 1}
      //no ¿perdemos la orden y agregamos la nueva
      setOrder([...order,newItem])
    }

    console.log(order);
  }
  return{
    addItem
  }
}