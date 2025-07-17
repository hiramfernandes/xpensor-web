import logo from "../assets/react.svg"
import logo2 from "../assets/vite.svg"

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-7 mt-5">Xpensor Managing Payments</div>
            <div className="col-5">
                <image src={logo2} alt="logo" />
            </div>
        </header>
    )
}

export default Banner;