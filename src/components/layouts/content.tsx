import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

function Content({ children }: InferProps<typeof Content.propTypes>) {
  return <div className="layout-content-center">{children}</div>
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Content
