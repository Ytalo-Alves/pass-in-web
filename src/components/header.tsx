import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header(){
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} alt="" />

      <nav className='flex gap-5'>
        <a href="" className='font-medium text-sm text-zinc-300 hover:text-zinc-50'>Eventos</a>
        <a href="" className='font-medium text-sm text-zinc-300 hover:text-zinc-50'>Participantes</a>
      </nav>
    </div>
  )
}