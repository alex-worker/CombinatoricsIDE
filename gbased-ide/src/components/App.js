import React from 'react'

import AppToolbar from '../containers/AppToolbar'

import '../styles/App.css'

const l10n = (str) => {
  return str
}

const sectionNames = {
  world: l10n('NAV_GAME_WORLD'),
  sprites: l10n('NAV_SPRITES'),
  backgrounds: l10n('NAV_BACKGROUNDS'),
  ui: l10n('NAV_UI_ELEMENTS'),
  music: l10n('NAV_MUSIC'),
  dialogue: l10n('NAV_DIALOGUE_REVIEW'),
  build: l10n('NAV_BUILD_AND_RUN'),
  settings: l10n('NAV_SETTINGS')
}

function App () {
  const [section, setSection] = React.useState('world')
  const onSectionChange = (key) => {
    setSection(key)
  }
  console.log('App!')
  return (
    <div className='App'>
      <AppToolbar sectionNames={sectionNames} curSection={section} onSectionChange={onSectionChange} />
    </div>
  )
}

export default App
