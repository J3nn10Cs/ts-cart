import dashboard from '../../public/svg/dashborad.svg'
export const Slider = () => {
  return (
    <>
      <aside className="bg-white w-64">
        <h1 className="text-center font-bold text-2xl mt-4">Hola mundo</h1>
        <nav className="p-3">
          <div className='flex items-center gap-3 p-2 hover:rounded-full hover:bg-blue-600 hover:text-white hover:cursor-pointer mb-3'>
            <img src={dashboard} alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-3 p-2 hover:rounded-full hover:bg-blue-600 hover:text-white hover:cursor-pointer mb-3'>
            <img src={dashboard} alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-3 p-2 hover:rounded-full hover:bg-blue-600 hover:text-white hover:cursor-pointer mb-3'>
            <img src={dashboard} alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-3 p-2 hover:rounded-full hover:bg-blue-600 hover:text-white hover:cursor-pointer mb-3'>
            <img src={dashboard} alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className='flex items-center gap-3 p-2 hover:rounded-full hover:bg-blue-600 hover:text-white hover:cursor-pointer mb-3'>
            <img src={dashboard} alt="" />
            <h1>Dashboard</h1>
          </div>
                   
        </nav>
      </aside>
    </>
  )
}
