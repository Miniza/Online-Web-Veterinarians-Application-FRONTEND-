import { NavLink} from "react-router-dom";


const Pagination = ({ itemsPerPage, totalItems, paginate, GoTo}) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalItems/itemsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
       <nav>
       <ul className="pagination">
       {pageNumbers.map(number =>(
       <li key={number} className="page-item">
           <NavLink onClick={()=> paginate(number)} to={GoTo} className="page-link">{number}</NavLink>
       </li>
       ))}
       </ul>
       </nav>
    )
}

export default Pagination;