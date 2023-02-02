import Logo from './Logo'
import Menu from './Menu'

export default function Navbar(){
  return (
    <header className="
      bg-slate-700
      font-mono
      text-slate-200
      text-5xl
      h-20
      shadow-2xl
    ">
      <div className="container">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}