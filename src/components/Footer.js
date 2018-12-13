import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'

const Footer = ({ t }) => {
  return <footer className="bg-secondary p-3">{t('footer.info')}</footer>
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
}

export default withNamespaces()(Footer)
