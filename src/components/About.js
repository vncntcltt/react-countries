import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import { withNamespaces } from 'react-i18next';

const About = function({ t }) {
  return (
    <section className="p-3">
      <Tabs defaultActiveKey="app">
        <Tab eventKey="app" title={t('about.tab.app')}>
          <article className="p-2">
            <p>
              {t('about.app.part1')}
              <a
                href="https://github.com/vncntcltt/react-countries"
                target="_blank"
                rel="noopener noreferrer">
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
              <li>React
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
            </ul>
          </article>
        </Tab>
        <Tab eventKey="data" title={t('about.tab.data')}>
          <article className="p-2">
            {t('about.data.countriesData')}
            <a
              href="https://restcountries.eu/"
              target="_blank"
              rel="noopener noreferrer">
              REST Countries
            </a>
          </article>
        </Tab>
      </Tabs>      
    </section>
  );
};

export default withNamespaces()(About);