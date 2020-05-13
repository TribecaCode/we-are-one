import React from 'react'

import we_are_one from "../../images/we-are-one-white.png"
import annecy from "./logos/Annecy.png"
import berlin from "./logos/Berlin.png"
import bfi from "./logos/BFI.png"
import cannes from "./logos/Cannes.png"
import Guadalajara from "./logos/Guadalajara.png"
import Jerusalem from "./logos/Jerusalem.png"
import KarlovyVary from "./logos/KarlovyVary.png"
import Locarno from "./logos/Locarno.png"
import Macao from "./logos/Macao.png"
import Marakech from "./logos/Marakech.png"
import Mumbai from "./logos/Mumbai.png"
import NewYorkFilmFest from "./logos/NewYorkFilmFest.png"
import Rotterdam from "./logos/Rotterdam.png"
import SanSebastian from "./logos/SanSebastian.png"
import Sarajevo from "./logos/Sarajevo-FF-logo-WHITE.png"
import Sundance from "./logos/Sundance.png"
import Sydney from "./logos/Sydney-Film-Festival.png"
import TIFF from "./logos/TIFF.png"
import Tokyo from "./logos/Tokyo.png"
import Tribeca from "./logos/Tribeca.png"
import Venice from "./logos/Venice.png"

const Footer = () => (
  <div className="footer text-center">
    <img src={we_are_one} alt="We Are One" className="we-are-one" />
    <p className="hind-text ">An unprecedented 10-day digital film festival exclusively on YouTube curated by the following film festivals</p>

    <div className="festivals">
      <a href="https://www.annecy.org/home" target="_blank" rel="noopener noreferrer">
        <img src={annecy} alt="Annecy International Animation Film Festival" />
      </a>
      <a href="https://www.berlinale.de/en/home.html" target="_blank" rel="noopener noreferrer">
        <img src={berlin} alt="Berlin International Film Festival" />
      </a>
      <a href="https://www.bfi.org.uk/" target="_blank" rel="noopener noreferrer">
        <img src={bfi} alt="BFI London Film Festival" />
      </a>
      <a href="https://www.festival-cannes.com/" target="_blank" rel="noopener noreferrer">
        <img src={cannes} alt="Cannes Film Festival" />
      </a>
      <a href="https://ficg.mx/35/public/es/home" target="_blank" rel="noopener noreferrer">
        <img src={Guadalajara} alt="Guadalajara International Film Festival" />
      </a>
      <a href="https://jff.org.il/" target="_blank" rel="noopener noreferrer">
        <img src={Jerusalem} alt="Jerusalem Film Festival" />
      </a>
      <a href="https://www.kviff.com/" target="_blank" rel="noopener noreferrer">
        <img src={KarlovyVary} alt="Karlovy Vary International Film Festival" />
      </a>
      <a href="https://www.locarnofestival.ch/pardo/festival-del-film-locarno/home.html" target="_blank" rel="noopener noreferrer">
        <img src={Locarno} alt="Locarno Film Festival" />
      </a>
      <a href="https://www.iffamacao.com/" target="_blank" rel="noopener noreferrer">
        <img src={Macao} alt="International Film Festival & Awards Macao (IFFAM)" />
      </a>
      <a href="http://www.festivalmarrakech.info/" target="_blank" rel="noopener noreferrer">
        <img src={Marakech} alt="Marrakech International Film Festival" />
      </a>
      <a href="https://www.mumbaifilmfestival.com/" target="_blank" rel="noopener noreferrer">
        <img src={Mumbai} alt="Mumbai Film Festival" />
      </a>
      <a href="https://www.filmlinc.org/" target="_blank" rel="noopener noreferrer">
        <img src={NewYorkFilmFest} alt="New York Film Festival" />
      </a>
      <a href="https://iffr.com/" target="_blank" rel="noopener noreferrer">
        <img src={Rotterdam} alt="Rotterdam International Film Festival" />
      </a>
      <a href="https://www.sansebastianfestival.com/" target="_blank" rel="noopener noreferrer">
        <img src={SanSebastian} alt="San Sebastian International Film Festival" />
      </a>
      <a href="https://www.sff.ba/" target="_blank" rel="noopener noreferrer">
        <img src={Sarajevo} alt="Sarajevo Film Festival" />
      </a>
      <a href="https://www.sundance.org/festivals/sundance-film-festival/" target="_blank" rel="noopener noreferrer">
        <img src={Sundance} alt="Sundance Film Festival" />
      </a>
      <a href="https://www.sff.org.au/" target="_blank" rel="noopener noreferrer">
        <img src={Sydney} alt="Sydney Film Festival" />
      </a>
      <a href="https://www.tiff.net/" target="_blank" rel="noopener noreferrer">
        <img src={TIFF} alt="Toronto International Film Festival" />
      </a>
      <a href="https://2020.tiff-jp.net/" target="_blank" rel="noopener noreferrer">
        <img src={Tokyo} alt="Tokyo International Film Festival" />
      </a>
      <a href="https://www.tribecafilm.com/" target="_blank" rel="noopener noreferrer">
        <img src={Tribeca} alt="Tribeca Film Festival" />
      </a>
      <a href="https://www.labiennale.org/" target="_blank" rel="noopener noreferrer">
        <img src={Venice} alt="Venice Film Festival" />
      </a>
    </div>

    <p className="copyright">
      <small className="hind-text">© 2020 We Are One: Global Film Festival</small>
    </p>
  </div>
)

export default Footer


