import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Cards from "../../components/Cards/Cards"
import { getAllCountries } from "../../redux/actions.js"

const Home = (props) => {

    const dispatch =  useDispatch()

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])


    return(
        <div>
            <h1>Paises del mundo</h1>
            <Cards></Cards>
        </div>
    )
}

export default Home