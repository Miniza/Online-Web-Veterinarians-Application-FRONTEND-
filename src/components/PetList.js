import { Link } from "react-router-dom";

const PetList = ({petlist, searchvalue, deletePet}) => {

    return(
        <div class="table-responsive">
        <table class="table table-bordered text-white">
          <thead>
            <tr>
              <th>ID</th>
              <th>Owner</th>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Pet Breed</th>
              <th>Pet DOB</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {petlist.filter(value=>{if(searchvalue==""){
              return value
            }else if(value.petName.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())){
              return value
            }}).map(item=>{return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td><Link to={`SingleOwner/${item.id}`}>{item.owner.firstName}</Link></td>
                <td>{item.petName}</td>
                <td>{item.petType}</td>
                <td>{item.petBreed}</td>
                <td>{item.dateOfBirth}</td>
                <td><span><Link to={`EditPet/${item.id}`}><button className="btn btn-success"><i className="fa fa-edit"></i></button></Link>
                  <button onClick={e=>deletePet(e,item.id)} className="btn btn-danger"><i className="fa fa-trash"></i></button> </span></td>
              </tr>)
    })}
          </tbody>
        </table>
      </div>   

    );

}


export default PetList;