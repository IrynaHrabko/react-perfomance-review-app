import { useNavigate } from "react-router-dom"
 
const ErrorPage = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  return(
    <main className="not-found flex min-h-screen bg-brand-white text-brand-strong">
    <div className=" m-auto flex flex-col place-items-center justify-center">
    <h1 className="flex place-items-center justify-center mb-10 font-bold text-brand-accent text-7xl">
    404
    </h1>
    <p className="mb-10">
      We're sorry, it looks like the page you're looking for isn't in our system.
    </p>
    <button 
    className="btn btn--accent" 
    onClick={() => goBack()}>
      {"Back home"}
    </button>
    </div>
    </main>
  )
}

export default ErrorPage