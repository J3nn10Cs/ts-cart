import { OrderAction } from "../reducers/orderReducer"
import { MenuItem } from "../types"
import { Dispatch } from "react"
type MenuItemProps = {
  item: MenuItem,
  //prop de agregar un menú -> void funcion que no retorna nada
  dispatch: Dispatch<OrderAction>
}

export default function Menu ({item, dispatch} : MenuItemProps){
  return (
    <>
      <div className="rounded-lg bg-white shadow-xl dark:bg-zinc-900 dark:shadow-neutral-900">
        {/* justar las imagenes para celular */}
        <img className="mx-auto h-24 w-full md:h-56 sm:h-56 lg:h-56 rounded-t-lg object-cover" src={`/img/${item.img}.jpg`} alt="" />
          <p className="text-1xl font-semibold lg:text-2xl ml-2 py-5 dark:text-white">{item.name}</p>

        <div className="ml-2 p-2 lg:p-4 lg:grid lg:grid-cols-2 items-center">
          <p className="font-bold text-3xl lg:mb-0 dark:text-white">$ {item.price}</p>

          <div className="flex justify-between items-center border border-gray-200 p-2 rounded-full mt-2 lg:mt-0">
            <button className="hover:bg-blue-400 hover:text-white font-extrabold rounded-full px-3 py-1 text-base dark:text-white"
              onClick={() => dispatch({type : 'decrement-item', paylod : {item}})}
            >
              -
            </button>
            0
            <button 
              className="bg-blue-400 hover:text-white font-extrabold rounded-full px-3 py-1 text-base dark:text-white"
              onClick={() => dispatch({type: 'add-item' , paylod: {item}})}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
