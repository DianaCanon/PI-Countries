import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import Cards from "../../components/Cards/Cards"
import { getAllCountries } from "../../redux/actions.js"

const Home = (props) => {

    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])


    return(
        <div>
             <NavLink to="/"><button>Volver</button></NavLink>
            <Cards></Cards>
           
        </div>
    )
}

export default Home