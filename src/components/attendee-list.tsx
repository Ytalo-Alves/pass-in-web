import {Search, MoreHorizontal, ChevronLeft, ChevronsLeft, ChevronsRight, ChevronRight} from 'lucide-react'

export function AttendeeList(){
  return(
    <div className='flex flex-col gap-4'>
    <div className="flex gap-3 items-center">
      <h1 className="text-2xl font-bold">Participantes</h1>
      <div className="flex items-center w-72 rounded-lg px-3 py-1.5 border border-white/10 text-sm gap-3">
        <Search className='size-4 text-emerald-300'/>
      <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="text" placeholder="Buscar participantes..." />
      </div>
      </div>

    <div className='border border-white/10 rounded-lg'>

      {/* Criação de tabela */}
    <table className='w-full'>

      {/* Titulo da tabela */}
      <thead>
        <tr style={{width: 48}} className='border-b border-white/10'>
          <th className='py-3 px-2.5 text-sm font-semibold text-left'>
            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10'/>
          </th> 
          <th className='py-3 px-2.5 text-sm font-semibold text-left'>Código</th>
          <th className='py-3 px-2.5 text-sm font-semibold text-left'>Participante</th>
          <th className='py-3 px-2.5 text-sm font-semibold text-left'>Data de inscrição</th>
          <th className='py-3 px-2.5 text-sm font-semibold text-left'>Data de check-in</th>
          <th style={{width:48}} className='py-3 px-2.5 text-sm font-semibold text-left'></th>
        </tr>
      </thead>

      {/* Corpo da tabela */}
      <tbody>
        {Array.from({length: 8}).map((_, i) => {
          return (
            <tr key={i} className='border-b border-white/10 hover:bg-white/5 transition'>
          <td className='py-3 px-2.5 text-sm text-zinc-300'>
            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
          </td> 
          <td className='py-3 px-2.5 text-sm text-zinc-300'>1234</td>
          <td className='py-3 px-2.5 text-sm text-zinc-300'>
            <div className='flex flex-col gap-1'>
            <span className='font-semibold text-white'>Ytalo Alves e Silva</span>
            <span className='text-gray-200/50 text-xs'>ytaloalves10@hotmail.com</span>
            </div>
          </td>
          <td className='py-3 px-2.5 text-sm text-zinc-300'>7 days ago</td>
          <td className='py-3 px-2.5 text-sm text-zinc-300'>7 days ago</td>
          <td className='py-3 px-2.5 text-sm text-zinc-300'>
            <button className='bg-black/10 border border-emerald-300/30 rounded-md p-1.5'> <MoreHorizontal className='size-4'/> </button>
          </td>
        </tr>
          )
        })}
      </tbody>

      {/* Footer da tabela */}
      <tfoot>
        <tr>
          <td className='py-3 px-2.5 text-sm text-zinc-300' colSpan={3}>Showing 10 of 228 items</td>
          <td className='py-3 px-2.5 text-sm text-zinc-300 text-right' colSpan={3}>
          <div className='inline-flex items-center gap-8'>  
          <span>Page 1 of 11</span>
          <div className='flex gap-1.5'>
          <button className=' border border-gray-300/30 rounded-md p-1.5 bg-white/10 hover:bg-white/40 transition'> <ChevronsLeft className='size-4'/> </button>
          <button className=' border border-gray-300/30 rounded-md p-1.5 bg-white/10 hover:bg-white/40 transition'> <ChevronLeft className='size-4'/> </button>
          <button className=' border border-gray-300/30 rounded-md p-1.5 bg-white/10 hover:bg-white/40 transition'> <ChevronRight className='size-4'/> </button>
          <button className=' border border-gray-300/30 rounded-md p-1.5 bg-white/10 hover:bg-white/40 transition'> <ChevronsRight className='size-4'/> </button>
          </div>
          </div>
          </td>
        </tr>
      </tfoot>
    </table>
    </div>

    </div>
  )
}