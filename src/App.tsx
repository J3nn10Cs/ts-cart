import { menu } from "./data/db";
import Menu from "./components/Menu";
import { Slider } from "./components/Slider";
import useOrder from "./hooks/useOrders";
function App() {
  const {addItem} = useOrder()
  return (
    <>
      {/* md -> 768px en adelante dos columnas */}
      <main className="flex">
        <Slider/>
        <div className="max-w-7xl mt-5 grid xl:grid-cols-3 gap-4 px-3 mb-4">
          <div className="col-span-2">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
              <h2 className="col-span-2 xl:col-span-3 text-center p-2 text-3xl font-semibold">Menú</h2>
              {menu.map(item => (
                <Menu
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-3xl col-span-2 sm:col-span-2 lg:col-span-2 xl:col-span-1">
            <h2 className="text-center text-3xl font-semibold p-2">Consumo</h2>

            <div>
              <h1 className="text-center">Ordenes</h1>
            </div>
          </div>
        </div>
       
      </main>
    </>
  )
}

export default App
