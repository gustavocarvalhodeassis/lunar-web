import './landingStyle.css'

function LandingPage() {
    return <>
        <section id='home' className='sec-home'>
            <div className='sec-home-text'>
                <h1 className='sec-home-text-title'>
                    Um <font>sistema</font> para melhor atender <font>sua empresa.</font>
                </h1>
                <p className='sec-home-text-title'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna
                    nulla, rutrum in ornare sed, blandit id ex. Cras consequat, libero a
                    accumsan vestibulum.
                </p>
            </div>
        </section>
        <div className='sec-home-big-card'>
                <div className='sec-home-info-card'>
                    <h1>
                        99+
                    </h1>
                    <p>
                        Empresas Contrataram
                    </p>
                    <h1>
                        39
                    </h1>
                    <p>
                        Representantes
                    </p>

                </div>
            </div>
    </>
}

export default LandingPage