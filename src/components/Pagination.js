import { Link } from "react-router-dom";

const Pagination = ({ ownersPerPage, totalOwners, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalOwners/ownersPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
       <ul className="pagination ">
       {pageNumbers.map(number =>(
           <li key={number} className="page-item">
           <Link onClick={()=> paginate(number)} to="/Owner" className="page-link">{number}</Link>
           </li>
       ))}
       </ul>
        </nav>
    )
}

export default Pagination;