import React from 'react'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import { withNamespaces } from 'react-i18next'

const About = function({ t }) {
  return (
    <section className="p-3">
      <Tabs defaultActiveKey="app">
        <Tab eventKey="app" title={t('about.tab.app')}>
          <article className="p-2">
            <p>
              {t('about.app.part1')}
              <a href="https://github.com/vncntcltt/react-countries" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
            <p> {t('about.app.part2')}</p>
            <p> {t('about.app.part3')}</p>
          </article>
        </Tab>
        <Tab eventKey="tech" title={t('about.tab.tech')}>
          <article className="p-2">
            <ul>
              <li>
                React
                <ul>
                  <li>create-react-app</li>
                  <li>react-router</li>
                  <li>react-redux</li>
                  <li>react-bootstrap</li>
                  <li>react-i18next</li>
                </ul>
              </li>
              <li>Bootstrap</li>
              <li>Leaflet</li>
              <li>Storybook</li>
            </ul>
          </article>
        </Tab>
        <Tab eventKey="credits" title={t('about.tab.credits')}>
          <article className="p-2">
            <p>
              {t('about.data.countriesData')}
              <a href="https://restcountries.eu/" target="_blank" rel="noopener noreferrer">
                REST Countries
              </a>
            </p>
            <p>
              {t('about.data.countriesGeoJson')}
              <a href="https://github.com/johan/world.geo.json/" target="_blank" rel="noopener noreferrer">
                world.geo.json
              </a>
            </p>
            <p>
              {t('about.data.icons')}
              <a href="https://www.freepik.com/" title="Freepik">
                Freepik
              </a>{' '}
              {t('about.data.from')}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>{' '}
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                (CC 3.0 BY)
              </a>
            </p>
          </article>
        </Tab>
      </Tabs>
    </section>
  )
}

export default withNamespaces()(About)
