import logobalf from '../../assets/img/logos/logo-balf.png'
import logooignon from '../../assets/img/logos/logooignon_1.png'
import logobio from '../../assets/img/logos/logobio_1.png'

export default function Hero() {
    return (
        <div>
            <section className='hero__index'>

                <h1 className='hero__index__title'>Bienvenue sur notre exploitation Bio</h1>

                <p className='hero__index__title__p'>
                    Notre volonté : Donner accès plus aisément à
                    des légumes bio de qualité.<br />
                    Nous vous proposerons toujours des légumes de saison pour respecter au mieux le cours naturel des choses.
                </p>
                <div className='hero__index__logo'>
                    <img className='hero__index__logo__bio' src={logobio} alt='logo Agriculture Biologique'/>
                    <img className='hero__index__logo__oignon' src={logooignon} alt="logo de l'oignon de Trébons"/>
                    <img className='hero__index__logo__balf' src={logobalf} alt='logo Bienvenue à la Ferme'/>
                </div>
            </section>
        </div>
    )
}