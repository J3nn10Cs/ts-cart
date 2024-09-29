import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type TotalProp = {
  order: OrderItem[]
  tip: number
  saveOrder: () => void
}

export default function OrderTotal({order, tip, saveOrder}: TotalProp){
  //evitar que el cálculo del total de la orden se repita en cada renderizado.
  //reduce -> reducir el array a un único valor (en este caso, el total de la orden).
  //-> total: El acumulador que se actualiza en cada iteración con el total calculado hasta el momento.
  //-> menu: El elemento actual del array order.
  const orderSubTotal = useMemo(() => order.reduce((total, menu ) => 
    total + (menu.quantity * menu.price),0
  ),[order])

  //propina
  const tipOrder = useMemo(() => orderSubTotal * tip ,[tip, order])

  const totalPay = useMemo(() => orderSubTotal + tipOrder ,[tip,order])

  return (
    <>
      <div className="bg-slate-100 rounded-3xl p-3 mt-3">
        <h1 className="font-bold mb-2">Payment summary</h1>
        <div className="divide-y divide-slate-300">
          <div className="flex justify-between p-3">
            <h1>Sub total</h1>
            <h1>{formatCurrency(orderSubTotal)}</h1>
          </div>
          <div className="flex justify-between p-3">
            <h1>Tip</h1>
            <h1>{formatCurrency(tipOrder)}</h1>
          </div>
        </div>

        <div className="flex justify-between p-3">
          <h1 className="font-bold">Totall</h1>
          <h1 className="font-bold">{formatCurrency(totalPay)}</h1>
        </div>

      </div>
        <button className="w-full bg-blue-500 p-3 disabled:opacity-10 rounded-3xl hover:bg-blue-700 mt-3"
          disabled={totalPay===0}
          onClick={saveOrder}
        >
          Save Order
        </button>
    </>
  )
}