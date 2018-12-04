import React from 'react';
import { NamespacesConsumer } from 'react-i18next';

const displayPct = function(val) {
  if (Number.isInteger(val)) {
    return val + '%';
  } else {
    return val.toFixed(2) + '%';
  }
}

const CountryStatistics = ({ countries, filteredCountries }) => {
  const countriesCount = filteredCountries.length;
  const totalCountriesCount = countries.length;
  const countriesPct = displayPct(((countriesCount / totalCountriesCount) * 100));
  return  (    
    <NamespacesConsumer>
    {
      t => (
        <span className="float-right pt-2">
          <span>{countriesCount} {t('statistics.text.countries', { count: countriesCount })}</span>
          <span className="text-muted px-1"> ({countriesPct} {t('statistics.subtext.worldCountries')})</span>
        </span>
      )
    }
    </NamespacesConsumer>
  );

};

export default CountryStatistics;

