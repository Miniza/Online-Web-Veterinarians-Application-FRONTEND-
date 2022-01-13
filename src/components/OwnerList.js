
import { Link } from "react-router-dom";

const OwnerList = ({ownerlist, searchvalue, deleteOwner}) => {

    return(
        <div class="table-responsive">
    <table class="table table-bordered text-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Postal Address</th>
          <th>PetList</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        {ownerlist.filter(value=>{
          if(searchvalue==""){ return value;
          }else if(value.firstName.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())){
            return value;
          }
        }).map(item=>{return(
            <tr key={item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.mobileNumber}</td>
            <td>{item.ownerEmail}</td>
            <td>{item.address}</td>
            <td>{item.pets.petName}</td>
            <td><span> 
            <Link to={`EditOwner/${item.id}`}><button className="btn btn-success"><i className="fa fa-edit"></i></button></Link>
              <button onClick={e=>{deleteOwner(e, item.id)}} className="btn btn-danger"><i className="fa fa-trash " ></i></button></span></td>
          </tr>)
})}
      </tbody>
    </table>
    
  </div> 
    );

}


export default OwnerList;