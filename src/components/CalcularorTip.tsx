import { Dispatch,SetStateAction } from "react"
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

export default function CalcularorTip({setTip,tip} : TipProps) {
  return (
    <>
      <div className="bg-slate-100 p-3 rounded-3xl  shadow-sm dark:bg-stone-900 dark:shadow-neutral-50">
        <h1 className="text-2xl dark:text-white">Tip :</h1>

        <div className="p-3 divide-y divide-slate-300">
          {tipOptions.map(tipOrder =>(
            <div className="flex gap-2 items-center p-2"
              key={tipOrder.id}
            >
              <input
                id={tipOrder.id} 
                type="radio"
                //solo selecciona 1
                name="tip"
                value={tipOrder.value}
                //el "+" lo convierte a number
                onChange={(e) =>setTip(+e.target.value)}
                //
                checked={tipOrder.value === tip}
              />
              <label 
                htmlFor="tip"
                className="dark:text-white"
                >{
                  tipOrder.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

