import React from 'react'

import AppToolbar from './AppToolbar'

import PageVars from '../pages/PageVars'
import PageCells from '../pages/PageCells'
import PageItems from '../pages/PageItems'
import PageMess from '../pages/PageMess'
import PageAbout from '../pages/PageAbout'

import '../styles/App.css'

const l10n = (str) => {
  return str
}

const sectionNames = {
  vars: l10n('NAV_VARS'),
  cells: l10n('NAV_CELLS'),
  items: l10n('NAV_ITEMS'),
  mess: l10n('NAV_MESS'),
  about: l10n('NAV_ABOUT')
}

const defaultSection = 'vars'

function App () {
  const [section, setSection] = React.useState(defaultSection)
  const onSectionChange = (key) => {
    setSection(key)
  }
  console.log('App!')
  return (
    <div className='App'>
      <AppToolbar sectionNames={sectionNames} curSection={section} onSectionChange={onSectionChange} />
      <div className='App__Content'>
        {section === 'vars'   &&  <PageVars />}
        {section === 'cells'  &&  <PageCells />}
        {section === 'items'  &&  <PageItems />}
        {section === 'mess'   &&  <PageMess />}
        {section === 'about'  &&  <PageAbout />}
      </div>
    </div>
  )
}

export default App
