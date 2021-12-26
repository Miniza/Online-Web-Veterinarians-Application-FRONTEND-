const Search = ({type, style, placeholder, onChange}) => {

return(
  <>
  <input type={type}
  className={style}
  placeholder={placeholder}
  onChange={onChange}
  />
  </>
)
}

export default Search;