import PropTypes from 'prop-types'

interface SearchProps {
  placeholder?: string
  query?: string
  setQuery?: React.Dispatch<React.SetStateAction<string>>
  wrapperClass?: string
}

const Search = ({ placeholder = 'Search...', query, setQuery, wrapperClass }: SearchProps) => {
  return (
    <div className={`relative ${wrapperClass || ''}`}>
      <input
        className='field-input !pr-[60px]'
        type='search'
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery && setQuery(e.target.value)}
      />
      <button
        className={`field-btn text-red !right-[40px] transition ${query ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setQuery && setQuery('')}
        aria-label='Clear all'
      >
        <i className='icon-magnifying-glass-solid' />
      </button>
    </div>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  wrapperClass: PropTypes.string
}

export default Search
