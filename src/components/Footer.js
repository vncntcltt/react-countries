import React from 'react'
import { withNamespaces } from 'react-i18next'

const Footer = ({ t }) => {
  return <footer className="bg-secondary p-3">{t('footer.info')}</footer>
}

export default withNamespaces()(Footer)
