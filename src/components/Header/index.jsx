import Porsche from "../../assets/images/Porsche-Logo.png"
import "./styles.css"

export default function Header(params) {
    return(
        <>
        <header>
        <img src= {Porsche} alt="Logo porsche" />
            <nav>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </nav>
        <div className="button-wrapper">
        <button type="button">
            Sing in
        </button>
        <button type="button">
            Sing up
        </button>
        </div>
        </header>
        </>
    )
}