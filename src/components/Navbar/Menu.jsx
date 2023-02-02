
export default function Menu(){
  const options = ['About', 'Projects', 'Contact'];
  
  return (
    <nav className="text-base">
      <ul>{
        options.map((option, index) => {
          return (
            <li key={index}>
              <a href="#">{ option }</a>
            </li>
          )
        })
      }</ul>
    </nav>
  )
}