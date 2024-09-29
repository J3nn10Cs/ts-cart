import { useEffect, useState } from "react";
import type { MenuItem, OrderId, OrderItem } from "../types";

export default function useOrder() {
  const min_item = 1
  const max_item = 10
  //propinas
  const [tip,setTip] = useState(0)
  
  //obtener el storage
  const initialOrder = () : OrderItem[] => {
    const localStorageOrder = localStorage.getItem('order') 
    return localStorageOrder ? JSON.parse(localStorageOrder) : []
  }
  
  const [order,setOrder] = useState<OrderItem[]>(initialOrder)
  //creamos el local
  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order))
  },[order])
  const addItem = (item : MenuItem) => {
    //si no encuentra devuelve umdefined, de lo controrio el arreglo encontrado
    const itemExist = order.find(orderItem => orderItem.id === item.id)
    
    if(itemExist){
      //identificar el elemento
      const updateOrder = order.map(orderItem => 
        //id de order y de item es =
        orderItem.id === item.id && orderItem.quantity < max_item ? 
        {...orderItem, quantity: orderItem.quantity + 1} : 
        orderItem
      )
      setOrder(updateOrder)
    }else{
      //nuevi item pra poder agregar la cantidad
      const newItem = {...item, quantity : 1}
      //no ¿perdemos la orden y agregamos la nueva
      setOrder([...order,newItem])
    }
  }

  const reduce = (item : MenuItem) => {
    const updateOrder = order.map(orderItem => {
      if(orderItem.id === item.id && orderItem.quantity > min_item){
        return{
          ...orderItem,
          quantity: orderItem.quantity -1
        }
      }
      return orderItem
    })
    setOrder(updateOrder)
  }

  const removeOrder = (id: OrderId) => {
    setOrder(order.filter(menu => menu.id !== id))
  }

  const saveOrder = () => {
    setOrder([])
    setTip(0)
  }
  
  return{
    order,
    tip,
    setTip,
    addItem,
    removeOrder,
    reduce,
    initialOrder,
    saveOrder
  }
}