import logo from '../Images/Others/Bootcamp-Logo.png'

export default function Logo(){
    return(
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <img src={logo} alt="Logo"/>
        </div>
    )
}