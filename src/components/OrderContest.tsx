import { formatCurrency } from "../helpers"
import { OrderAction } from "../reducers/orderReducer"
import { OrderItem } from "../types"
import { Dispatch } from "react"

type OrderContestProp = {
  order: OrderItem[]
  dispatch: Dispatch<OrderAction>
}
export const OrderContest = ({order, dispatch} : OrderContestProp) => {
  
  return (
    <>
      <div className="bg-slate-100 mb-3 rounded-3xl shadow-sm dark:bg-stone-900 dark:shadow-neutral-50"> 
        {order.map(item => (
          <div
            className="p-2 flex gap-4 items-center"
            key={item.id}
          >
            <p className="py-2 px-4 border rounded-full font-bold dark:text-white">x{item.quantity}</p>
            <img className="w-10 h-10 object-cover rounded-full" src={`/img/${item.img}.jpg`} alt="" />
            <p className="dark:text-white">{item.name}</p>
            <p className="font-bold dark:text-white">{formatCurrency(item.price * item.quantity)}</p>
            <button
                onClick={() => dispatch({type: 'remove-order-id', paylod : {id : item.id}})}
              >
              <i className="fa-solid fa-xmark p-2 bg-red-400 rounded-full"></i>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
