import React from 'react'

import './landingStyle.css'
import './darkSectionStyle.css'
import {Button} from '../Components/Buttons/ButtonComponents'

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

            <div className='sec-home-card'></div>
            <div className='sec-home-big-card'>
                <div className='container-landing'>
                    <div className='sec-home-info-card'>
                        <h1>
                            99+
                            <p>
                                Empresas <br />Contrataram
                            </p>
                        </h1>

                        <h1>
                            39
                            <p>
                                Representantes
                            </p>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        <section id='about' className='dark-section'>
            <div className='card-1'>
                <div className='container-landing'>
                    <div className='card-group'>
                        <div className='card'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.7296 20.6895C44.0567 12.3895 37.6128 5.944 29.3107 4.27109C27.7837 3.96275 26.1962 4.35451 24.9753 5.35243C23.7587 6.35034 23.0607 7.82115 23.0607 9.3899V20.6895C23.0607 24.1354 25.8649 26.9395 29.3107 26.9395H40.6108C42.1816 26.9395 43.6525 26.2417 44.6484 25.0251C45.6442 23.8084 46.04 22.227 45.7296 20.6895ZM41.4275 22.3833C41.3067 22.527 41.0441 22.7729 40.6108 22.7729H29.3107C28.1607 22.7729 27.2274 21.8395 27.2274 20.6895V9.3899C27.2274 8.95657 27.4712 8.69388 27.617 8.57305C27.7358 8.47721 27.9629 8.33348 28.2754 8.33348C28.3421 8.33348 28.4129 8.33971 28.4899 8.35637C35.1399 9.69596 40.3067 14.8605 41.6442 21.5105C41.7296 21.9334 41.5442 22.2395 41.4275 22.3833ZM42.8692 31.8564C40.3213 40.2169 32.7212 45.8335 23.9587 45.8335C13.0462 45.8335 4.16705 36.9543 4.16705 26.0418C4.16705 17.2793 9.78369 9.67952 18.1441 7.1316C19.2462 6.79827 20.4087 7.41913 20.7441 8.51913C21.0774 9.61913 20.4567 10.7833 19.3567 11.1187C12.765 13.1271 8.33372 19.1252 8.33372 26.0418C8.33372 34.6585 15.3421 41.6668 23.9587 41.6668C30.8754 41.6668 36.8734 37.2355 38.8817 30.6439C39.2192 29.5418 40.3858 28.9272 41.4817 29.2563C42.5817 29.5918 43.2025 30.7564 42.8692 31.8564Z" fill="#7A3FF3" />
                            </svg>
                            <h1>Dashboard completa</h1>
                            <p>Tenha em vista gr??ficos, rela????es, relat??rios,  de tudo o que voc?? gerenciar em sua empresa.</p>
                        </div>
                        <div className='card'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5834 20.8344C14.5834 19.6823 15.5167 18.7511 16.6667 18.7511H33.3334C34.4834 18.7511 35.4167 19.6823 35.4167 20.8344C35.4167 21.9865 34.4834 22.9177 33.3334 22.9177H16.6667C15.5167 22.9177 14.5834 21.9865 14.5834 20.8344ZM18.75 16.6677H31.25C32.4 16.6677 33.3334 15.7365 33.3334 14.5844C33.3334 13.4323 32.4 12.5011 31.25 12.5011H18.75C17.6 12.5011 16.6667 13.4323 16.6667 14.5844C16.6667 15.7365 17.6 16.6677 18.75 16.6677ZM45.8334 28.0991V33.3344C45.8334 39.0781 41.1604 43.7511 35.4167 43.7511H14.5834C8.8396 43.7511 4.16669 39.0781 4.16669 33.3344V28.0991C4.16669 27.1991 4.31047 26.3114 4.59381 25.4614L8.62505 13.3718C10.0459 9.11141 14.0167 6.24902 18.5063 6.24902H31.4938C35.9834 6.24902 39.9562 9.11141 41.375 13.3718L45.4062 25.4614C45.6896 26.3114 45.8334 27.2012 45.8334 28.0991ZM9.13965 25.0011H18.75C19.9 25.0011 20.8334 25.9323 20.8334 27.0844C20.8334 29.3823 22.7021 31.2511 25 31.2511C27.2979 31.2511 29.1667 29.3823 29.1667 27.0844C29.1667 25.9323 30.1 25.0011 31.25 25.0011H40.8604L37.423 14.6927C36.5709 12.1344 34.1875 10.4177 31.4938 10.4177H18.5063C15.8125 10.4177 13.4292 12.1344 12.5771 14.6927L9.13965 25.0011ZM41.6667 33.3344V29.1677H33.0709C32.1438 32.7594 28.8771 35.4177 25 35.4177C21.1229 35.4177 17.8583 32.7594 16.9291 29.1677H8.33335V33.3344C8.33335 36.7802 11.1375 39.5844 14.5834 39.5844H35.4167C38.8625 39.5844 41.6667 36.7802 41.6667 33.3344Z" fill="#7A3FF3" />
                            </svg>
                            <h1>Controle total de sua empresa</h1>
                            <p>Fa??a vendas, controle seu estoque, seu caixa, cadastre clientes e fornecedores, e muito mais. </p>
                        </div>
                        <div className='card'>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.4459 14.5833L31.25 5.38758C30.4625 4.60008 29.4167 4.16663 28.3042 4.16663H18.75C13.0063 4.16663 8.33337 8.83954 8.33337 14.5833V35.4166C8.33337 41.1604 13.0063 45.8333 18.75 45.8333H31.25C36.9938 45.8333 41.6667 41.1604 41.6667 35.4166V17.529C41.6667 16.4332 41.223 15.3583 40.4459 14.5833ZM31.25 11.279L34.5542 14.5833H34.375C32.6521 14.5833 31.25 13.1812 31.25 11.4583V11.279ZM31.25 41.6666H18.75C15.3042 41.6666 12.5 38.8625 12.5 35.4166V14.5833C12.5 11.1375 15.3042 8.33329 18.75 8.33329H27.0834V11.4583C27.0834 15.4791 30.3542 18.75 34.375 18.75H37.5V35.4166C37.5 38.8625 34.6959 41.6666 31.25 41.6666Z" fill="#7A3FF3" />
                            </svg>
                            <h1>Documentos fiscais</h1>
                            <p>Aqui voc?? pode entrar NF-e de compra e emitir NFC-e e NF-e de venda.</p>
                        </div>

                    </div>
                </div>

            </div>

            <div className='card-2'>
                <div className='container-landing'>
                    <div className='card-2-content'>
                        <h1>
                            Deixe de lado o papel e a caneta.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna nulla, rutrum in ornare sed, blandit id ex. Cras consequat, libero a accumsan vestibulum.
                        </p>
                        <div className='card-2-items'>
                            <div className='item'>
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.7921 23.2485L57.4787 19.5621C58.6192 18.4217 58.6192 16.5782 57.4787 15.4377C56.3383 14.2973 54.495 14.2973 53.3546 15.4377L49.49 19.3025C46.1533 16.8875 42.2071 15.2772 37.9167 14.7727V11.6666H40.8333C42.4433 11.6666 43.75 10.3628 43.75 8.74992C43.75 7.137 42.4433 5.83325 40.8333 5.83325H29.1667C27.5567 5.83325 26.25 7.137 26.25 8.74992C26.25 10.3628 27.5567 11.6666 29.1667 11.6666H32.0833V14.7698C19.7837 16.2194 10.2083 26.6933 10.2083 39.3749C10.2083 53.0453 21.3296 64.1666 35 64.1666C48.6704 64.1666 59.7917 53.0453 59.7917 39.3749C59.7917 33.2178 57.5225 27.5885 53.7921 23.2485ZM35 58.3333C24.5467 58.3333 16.0417 49.8283 16.0417 39.3749C16.0417 28.9216 24.5467 20.4166 35 20.4166C45.4533 20.4166 53.9583 28.9216 53.9583 39.3749C53.9583 49.8283 45.4533 58.3333 35 58.3333ZM43.1113 44.8437C44.1175 46.1037 43.9133 47.9383 42.6562 48.9445C42.1196 49.3733 41.475 49.5833 40.8363 49.5833C39.9817 49.5833 39.1329 49.2099 38.5583 48.4895L32.725 41.1978C32.3108 40.6787 32.0863 40.0399 32.0863 39.3749V29.1666C32.0863 27.5537 33.3929 26.2499 35.0029 26.2499C36.6129 26.2499 37.9196 27.5537 37.9196 29.1666V38.3513L43.1113 44.8437Z" fill="#7A3FF3" />
                                </svg>
                                <p>Economize
                                    Tempo.</p>
                            </div>
                            <div className='item'>
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.4167 29.168C20.4167 27.5551 21.7233 26.2514 23.3333 26.2514H46.6667C48.2767 26.2514 49.5833 27.5551 49.5833 29.168C49.5833 30.781 48.2767 32.0847 46.6667 32.0847H23.3333C21.7233 32.0847 20.4167 30.781 20.4167 29.168ZM26.25 23.3347H43.75C45.36 23.3347 46.6667 22.031 46.6667 20.418C46.6667 18.8051 45.36 17.5014 43.75 17.5014H26.25C24.64 17.5014 23.3333 18.8051 23.3333 20.418C23.3333 22.031 24.64 23.3347 26.25 23.3347ZM64.1667 39.3386V46.668C64.1667 54.7093 57.6246 61.2514 49.5833 61.2514H20.4167C12.3754 61.2514 5.83334 54.7093 5.83334 46.668V39.3386C5.83334 38.0786 6.03464 36.8358 6.43131 35.6458L12.0751 18.7205C14.0642 12.7559 19.6233 8.74854 25.9087 8.74854H44.0913C50.3767 8.74854 55.9387 12.7559 57.925 18.7205L63.5687 35.6458C63.9654 36.8358 64.1667 38.0816 64.1667 39.3386ZM12.7955 35.0014H26.25C27.86 35.0014 29.1667 36.3051 29.1667 37.918C29.1667 41.1351 31.7829 43.7514 35 43.7514C38.2171 43.7514 40.8333 41.1351 40.8333 37.918C40.8333 36.3051 42.14 35.0014 43.75 35.0014H57.2045L52.3921 20.5697C51.1992 16.9881 47.8625 14.5847 44.0913 14.5847H25.9087C22.1375 14.5847 18.8008 16.9881 17.6079 20.5697L12.7955 35.0014ZM58.3334 46.668V40.8347H46.2992C45.0013 45.863 40.4279 49.5847 35 49.5847C29.5721 49.5847 25.0016 45.863 23.7008 40.8347H11.6667V46.668C11.6667 51.4922 15.5925 55.418 20.4167 55.418H49.5833C54.4075 55.418 58.3334 51.4922 58.3334 46.668Z" fill="#7A3FF3" />
                                </svg>

                                <p>Economize
                                    Espa??o.</p>
                            </div>
                            <br></br>
                            <div className='item' >
                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35 5.83325C18.9175 5.83325 5.83331 18.9174 5.83331 34.9999C5.83331 51.0824 18.9175 64.1666 35 64.1666C51.0825 64.1666 64.1667 51.0824 64.1667 34.9999C64.1667 18.9174 51.0825 5.83325 35 5.83325ZM35 58.3333C22.1346 58.3333 11.6666 47.8653 11.6666 34.9999C11.6666 22.1345 22.1346 11.6666 35 11.6666C47.8654 11.6666 58.3333 22.1345 58.3333 34.9999C58.3333 47.8653 47.8654 58.3333 35 58.3333ZM37.9166 46.6666C37.9166 48.2766 36.61 49.5833 35 49.5833C33.39 49.5833 32.0833 48.2766 32.0833 46.6666C32.0833 45.0566 33.39 43.7499 35 43.7499C36.61 43.7499 37.9166 45.0566 37.9166 46.6666ZM37.9166 23.3333V34.9999C37.9166 36.6128 36.61 37.9166 35 37.9166C33.39 37.9166 32.0833 36.6128 32.0833 34.9999V23.3333C32.0833 21.7203 33.39 20.4166 35 20.4166C36.61 20.4166 37.9166 21.7203 37.9166 23.3333Z" fill="#7A3FF3" />
                                </svg>

                                <p>Elimine
                                    Dificuldades.</p>
                            </div>
                        </div>
                    </div>

                    <div className='card-2-img'>
                    </div>
                </div>

            </div>
            <div id='report' className='what-they-say'>
                <div className='container-landing'>
                    <div className='report-group'>
                        <div className='person-1'>
                            <h1 className='title'>
                                O que <font>alguns</font> de nossos clientes <font>disseram.</font>
                            </h1>
                            <div className='person-1-content'>
                                <div className='person-1-photo'>
                                    <div className='dec'>
                                        <h1>???</h1>
                                    </div>
                                </div>
                                <h1 className='person-name'>
                                    Harry McCourtney
                                </h1>
                                <p className='person-words'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna nulla, rutrum in ornare sed, blandit id ex. Cras consequat, libero a accumsan vestibulum.
                                </p>
                            </div>
                        </div>
                        <div className='person-2'>
                            <div className='person-2-content'>
                                <div className='person-2-photo'>
                                    <div className='dec'>
                                        <h1>???</h1>
                                    </div>
                                </div>
                                <h1 className='person-name'>
                                    Harry McCourtney
                                </h1>
                                <p className='person-words'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna nulla, rutrum in ornare sed, blandit id ex. Cras consequat, libero a accumsan vestibulum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer id='do'>
            <div className='container-landing'>
                <div className='footer-content'>
                    <h1> <font>Venha</font> fazer parte, Venha ser Representate ou Cliente <font>Lunar Software</font> </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna nulla, rutrum in ornare sed, blandit id ex. Cras consequat, libero a accumsan vestibulum.
                    </p>
                    <Button/>
                </div>
            </div>
        </footer>
    </>
}

export default LandingPage