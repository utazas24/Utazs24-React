import React from 'react'

import { Helmet } from 'react-helmet'

import './miln.css'

const Miln = (props) => {
  return (
    <div className="miln-container">
      <Helmet>
        <title>Miln - Utazás24</title>
        <meta property="og:title" content="Miln - Utazás24" />
      </Helmet>
      <div className="miln-hero">
        <h1 className="miln-text">Milánói utazás</h1>
        <span className="miln-text01">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="miln-btn-group">
          <button className="miln-button button">Szállásfoglalás</button>
          <button className="miln-button1 button">Repülőjegy foglalás</button>
        </div>
        <span className="miln-text08">
          <span>Amennyiben itt vagy, nagyon jó nyaralást kívánunk.</span>
          <br></br>
          <span>
            Kérjük segítsd munkánkat azzal hogy a fenti linkekre kattintva
            foglalod le a nyaralásodat.
          </span>
          <br></br>
          <span>
            Foglalásod után mi is egy apró juatlomban részesülünk, hogy mások
            számára is elérhető legyen a megfizethető utazás élménye.
          </span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Miln
