import React from 'react'
import PageHeader from '../components/library/PageHeader'
import l10n from '../helpers/l10n'

const PageVars = () => {
  return (
    <div style={{ width: '100%', flexDirection: 'column', overflow: 'auto' }}>
      <PageHeader>
        <h1>{l10n('PAGE_HEADER_VARS')}</h1>
      </PageHeader>
    </div>
  )
}

export default PageVars
