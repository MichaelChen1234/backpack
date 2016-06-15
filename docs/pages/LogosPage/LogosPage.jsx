import React from 'react'
import Helmet from 'react-helmet'

const LogosPage = () => (
  <div>
    <Helmet title='Logos' />
    <section>
      <h2>Inline</h2>
      <h2>Stacked</h2>
      <h2>Cloud only</h2>
      <h2>Tianxun</h2>
    </section>
    <section>
      <h2>Example Usage</h2>
      <pre>
        <code>{'@import "../node_modules/living-styles/logo";'}</code>
      </pre>
      <p>Logos are available in the 4 formats above You can use these like so...</p>
      <pre>
        <code>{`$ls-logo-inline-blue-500;
$ls-logo-stacked-gray-900
$ls-logo-cloud-blue-500
$ls-logo-tianxun-white`}</code>
      </pre>
    </section>
    <section>
      <h2>Notes</h2>
      <p>
        Whilst you <em>technically can</em> create logos in any colour, we'd prefer if you stuck to those mentioned in
        our Brand Guidelines. Please also see our Brand Guidelines for further info on logo usage.
      </p>
    </section>
  </div>
)

export default LogosPage
