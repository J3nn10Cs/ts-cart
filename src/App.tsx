import { menu } from "./data/db";
import MenuItem from "./components/MenuItem";
function App() {
  console.log(menu);
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculador de propinas y consumos</h1>
      </header>
      {/* md -> 768px en adelante dos columnas */}
      <main className="max-w-max mx-auto mt-5 grid xl:grid-cols-3 gap-4 px-3 mb-4">
        <div className="col-span-2">
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            <h2 className="col-span-2 xl:col-span-3 text-center p-2 text-3xl font-semibold">Menú</h2>
            {menu.map(item => (
              <MenuItem
                key={item.id}
                item={item}
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
      </main>
    </>
  )
}

export default App
