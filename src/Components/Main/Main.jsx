import React from 'react'

import style from "../Main/Main.module.css"

import banner1 from "../Main/img/Banner1.png"
import banner2 from "../Main/img/Banner2.png"
import banner3 from "../Main/img/Banner3.png"
import banner4 from "../Main/img/Banner4.png"

import card1 from "../Main/img/Card1.png"
import card2 from "../Main/img/Card2.png"
import card3 from "../Main/img/Card3.png"
import card4 from "../Main/img/Card4.png"

function Main() {
  return (
    <main className={style.cotainer_principal}>
        <section className={style.container_baners}>
            <div className={style.container_baner_principal}>
                <img className={style.img1} src={banner1} alt="banner1" />
            </div>
            <div className={style.container_baners_secundarios}>
                <img className={style.img2} src={banner2} alt="banner2" />
                <img className={style.img3} src={banner3} alt="banner3" />
            </div>
            <div className={style.container_baners_secundarios}>
                <img className={style.img4} src={banner4} alt="banner4" />
            </div>
        </section>
        <section className={style.categorias}>
            <div className={`${style.container_titulo} ${style.margin_conteudo}`}>
                <h1 className={style.titulo}>Categorias</h1>
            </div>
            <div className={`${style.container_ribbons} ${style.margin_conteudo}`}>
                <div className={`${style.ribbons} ${style.ribbon_amarelo}`}>Shows</div>
                <div className={`${style.ribbons} ${style.ribbon_amarelo}`}>Arte</div>
                <div className={`${style.ribbons} ${style.ribbon_vermelho}`}>Teatro</div>
                <div className={`${style.ribbons} ${style.ribbon_vermelho}`}>Fotografia</div>
                <div className={`${style.ribbons} ${style.ribbon_roxo}`}>Festivais</div>
                <div className={`${style.ribbons} ${style.ribbon_roxo}`}>Tecnologia</div>
                <div className={`${style.ribbons} ${style.ribbon_verde}`}>Cinema</div>
                <div className={`${style.ribbons} ${style.ribbon_verde}`}>Design</div>
            </div>
        </section>
        <section>
            <div className={`${style.container_titulo} ${style.margin_conteudo}`}>
                <h1 className={style.titulo}>Próximos eventos</h1>
            </div>
            <div className={style.container_cards}>
                <div className={style.card}>
                    <img src={card1} alt="" />
                    <div className={style.container_infos_card}>
                        <h3>Festival das Luzes</h3>
                        <span>14/08/2022</span>
                        <span>São Paulo | SP</span>
                    </div>
                    <div className={style.container_btn}>
                        <a href='#' className={style.btn_comprar}>Comprar</a>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={card2} alt="" />
                    <div className={style.container_infos_card}>
                        <h3>Festa Latina</h3>
                        <span>16/08/2022</span>
                        <span>Rio de Janeiro | RJ</span>
                    </div>
                    <div className={style.container_btn}>
                        <a href='#' className={style.btn_comprar}>Comprar</a>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={card3} alt="" />
                    <div className={style.container_infos_card}>
                        <h3>Festival de Cinema</h3>
                        <span>16/08/2022</span>
                        <span>São Paulo | SP</span>
                    </div>
                    <div className={style.container_btn}>
                        <a href='#' className={style.btn_comprar}>Comprar</a>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={card4} alt="" />
                    <div className={style.container_infos_card}>
                        <h3>Corrida pela Saúde</h3>
                        <span>18/08/2022</span>
                        <span>São Paulo | SP</span>
                    </div>
                    <div className={style.container_btn}>
                        <a href='#' className={style.btn_comprar}>Comprar</a>
                    </div>
                    
                </div>
            </div>
        </section>        
    </main>
  )
}

export default Main