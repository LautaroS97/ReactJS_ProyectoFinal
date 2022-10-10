import {Link} from 'react-router-dom';

const Footer = () => {

    return(
        <div>
            <footer>
                <div className="centrarFooter">
                    <b><h2>CIVI Latam</h2></b>
                    <h4>Tienda no oficial del videojuego Civilización VI</h4><hr/>
                    <span><Link to='/Terms' className="termsLink">Términos y condiciones</Link></span>
                    <span><a href='https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/?l=spanish' className="termsLink">Comprar en Steam</a></span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;