import { menu } from "./data/db";
import Menu from "./components/Menu";
import useOrder from "./hooks/useOrders";
import { OrderContest } from "./components/OrderContest";
import OrderTotal from "./components/OrderTotal";
import CalcularorTip from "./components/CalcularorTip";
function App() {
  const {order,addItem, removeOrder,tip,setTip,reduce,saveOrder} = useOrder()
  return (
    <>
      {/* md -> 768px en adelante dos columnas */}
      <main className="flex">
        {/* <Slider/> */}
        <div className="max-w-full mx-auto mt-5 grid xl:grid-cols-5 gap-4 px-3 mb-4">
          <div className="col-span-3">
              <h2 className="col-span-2 xl:col-span-4 text-center p-2 text-3xl font-semibold">Menú</h2>
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

          <div className="bg-white h-auto shadow-lg p-3 xl:mx-4 rounded-3xl col-span-3 sm:col-span-3 lg:col-span-2 xl:col-span-2">
            <h2 className="text-center text-3xl font-semibold p-2">Orders</h2>
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
              <p className="text-center bg-white">La orden está vacia</p>
            )}

          </div>
        </div>
       
      </main>
    </>
  )
}

export default App
