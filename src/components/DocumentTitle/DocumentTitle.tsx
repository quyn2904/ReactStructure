//components
import { Helmet } from 'react-helmet'

//utils
import PropTypes from 'prop-types'

interface DocumentTitleProps {
  title: string
  websiteName?: string
}

const DefaultWebsiteName = 'My Website'

const DocumentTitle = ({ title, websiteName }: DocumentTitleProps) => {
  return (
    <Helmet>
      <title>
        {title} | {websiteName || DefaultWebsiteName}
      </title>
    </Helmet>
  )
}

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default DocumentTitle
