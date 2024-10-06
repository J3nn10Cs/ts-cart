import { MenuItem, OrderId, OrderItem } from "../types";

export type OrderAction = 
  {type : 'add-item', paylod : {item : MenuItem} } |
  {type : 'decrement-item', paylod : {item : MenuItem} } |
  {type : 'remove-order-id', paylod : {id : OrderId} } |
  {type : 'save-order' } |
  {type : 'add-tip', payload : {value : number} } 

export type OrderState = {
  order : OrderItem[]
  tip : number
}

//obtener el storage
const initialOrder = () : OrderItem[] => {
  const localStorageOrder = localStorage.getItem('order') 
  return localStorageOrder ? JSON.parse(localStorageOrder) : []
}

export const initiaState : OrderState = {
  order : initialOrder(),
  tip: 0
}
const min_item = 1
  const max_item = 10
export const orderReducer = (state : OrderState = initiaState , action : OrderAction) => {

  if(action.type === 'add-item'){
    //si no encuentra devuelve umdefined, de lo controrio el arreglo encontrado
    const itemExist = state.order.find(orderItem => orderItem.id === action.paylod.item.id)
    
    let updateOrder : OrderItem[] = []
    if(itemExist){
      //identificar el elemento
        updateOrder = state.order.map(orderItem => 
      //id de order y de item es =
      orderItem.id === action.paylod.item.id && orderItem.quantity < max_item ? 
      {...orderItem, quantity: orderItem.quantity + 1} : 
      orderItem
      )
    }else{
      //primera vez -> copia del item
      const newItem : OrderItem = {...action.paylod.item, quantity : 1}
      //no ¿perdemos la orden y agregamos la nueva
      updateOrder = [...state.order,newItem]
    }
    return {
      ...state,
      order: updateOrder
    }
  }

  if(action.type === 'decrement-item'){
    const order = state.order.map(orderItem => {
      if(orderItem.id === action.paylod.item.id && orderItem.quantity > min_item){
        return{
          ...orderItem,
          quantity: orderItem.quantity - 1
        }
      }
      return orderItem
    })
    return {
      ...state,
      order
    }
  }

  if(action.type === 'add-tip'){
    const tip = action.payload.value
    return {
      ...state,
      tip
    }
  }

  if(action.type === 'remove-order-id'){
    const order = (state.order.filter(menu => menu.id !== action.paylod.id))
    return {
      ...state,
      order
    }
  }

  if(action.type === 'save-order'){

    return {
      ...state,
      order : [],
      tip : 0
    }
  }

  return state
}