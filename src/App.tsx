import { menu } from "./data/db";
import Menu from "./components/Menu";
import useOrder from "./hooks/useOrders";
import { OrderContest } from "./components/OrderContest";
import OrderTotal from "./components/OrderTotal";
import CalcularorTip from "./components/CalcularorTip";
import { useEffect, useState } from "react";
function App() {
  const {order,addItem, removeOrder,tip,setTip,reduce,saveOrder} = useOrder()

  const [monn, setMoon] = useState(() => {
    const saveDark = localStorage.getItem('dark');
    return saveDark === 'true'
  })

  useEffect(() => {
    if(monn){
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark','true')
    } else{
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark','false')
    }
  },[monn])
  return (
    <>
      {/* md -> 768px en adelante dos columnas */}
      <main className="flex">
        {/* <Slider/> */}
        <div className="max-w-full mx-auto mt-5 grid xl:grid-cols-5 gap-4 px-3 mb-4">
          <div className="col-span-3">
            <div className="p-2 flex justify-between items-center">
              <h2 className="col-span-2 xl:col-span-4 text-center p-2 text-3xl font-semibold dark:text-white">Menú</h2>
              <button
                onClick={() => setMoon(!monn)}
              >
                {monn ? (
                  <i className="fa-solid fa-sun fa-lg dark:text-white"></i>
                ):(
                  <i className="fa-solid fa-moon fa-lg"></i>
                )}
              </button>

            </div>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
              {menu.map(item => (
                <Menu
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  reduce={reduce}
                  
                />
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 dark:shadow-neutral-900 h-auto shadow-lg p-3 xl:mx-4 rounded-3xl col-span-3 sm:col-span-3 lg:col-span-2 xl:col-span-2">
            <h2 className="text-center text-3xl font-semibold p-2 dark:text-white">Orders</h2>
            {order.length > 0 ? (
                <>
                <OrderContest
                  order={order}
                  removeOrder={removeOrder}
                  />

                <CalcularorTip
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotal
                  order={order}
                  tip={tip}
                  saveOrder={saveOrder}
                />
              </>
            ) : (
              <p className="text-center bg-white dark:bg-neutral-900 dark:text-white">La orden está vacia</p>
            )}

          </div>
        </div>
       
      </main>
    </>
  )
}

export default App
