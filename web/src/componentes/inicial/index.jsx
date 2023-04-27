import { Link } from "react-router-dom"
import { Section,  Main } from "../inicial/style"

export default function Initial () {
    return (
        <Section>
            <Main>      
                <h1>Explore nosso sistema <span>solar!</span></h1>
                <button type="button"><Link to="card">Explorar</Link></button>
            </Main>  
        </Section>
    )
}