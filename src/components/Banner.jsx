import logo from "/react.svg"
import { logo as logoClass } from "./Banner.module.css"

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-4">
                <img src={logo} className={logoClass} alt="logo" />
            </div>
            <div className="col-8 mt-5 title" >
                {props.headerText}
            </div>
        </header>
    )
}

export default Banner;