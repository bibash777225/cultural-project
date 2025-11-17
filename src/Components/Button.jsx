import { Link } from "react-router-dom"

function Button (){
    return(
        <>
        <Link to ="/Info">
   <a href className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded inline-flex items-right">
  <span>
    View More
  </span>
  <svg className="w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</a>
</Link>
        
        </>
    )
}
export default Button