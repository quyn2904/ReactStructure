//components
import { Helmet } from 'react-helmet'

//utils
import PropTypes from 'prop-types'

interface DocumentTitleProps {
  title: string
  websiteName?: string
}

const DefaultWebsiteName = 'My Website'

/**
 * @author quyn2904
 * @param title: string, là tiêu đề của trang. Ex: Home, Login
 * @param websiteName?: string, là tên của website. Ex: My Website, Facebook
 * @returns Title: title | websiteName. Ex: Login | Facebook
 * @version 1.0
 */

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
