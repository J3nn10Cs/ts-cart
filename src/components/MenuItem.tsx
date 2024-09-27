import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem
}

export default function MenuItem ({item} : MenuItemProps){
  return (
    <>
      <div className="rounded-lg bg-white shadow-xl">
        {/* justar las imagenes para celular */}
        <img className="mx-auto h-24 w-full md:h-56 sm:h-56 lg:h-56 rounded-t-lg object-cover" src={`/img/${item.img}.jpg`} alt="" />
          <p className="text-1xl font-semibold lg:text-2xl ml-2 py-5">{item.name}</p>

        <div className="ml-2 p-2 lg:p-4 lg:grid lg:grid-cols-2 items-center">
          <p className="font-bold text-3xl lg:mb-0 ">$ {item.price}</p>

          <div className="flex justify-between items-center border border-gray-200 p-2 rounded-full mt-2 lg:mt-0">
            <button className="hover:bg-blue-400 hover:text-white font-extrabold rounded-full px-3 py-1 text-base">
              -
            </button>
            0
            <button className="bg-blue-400 hover:text-white font-extrabold rounded-full px-3 py-1 text-base">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
