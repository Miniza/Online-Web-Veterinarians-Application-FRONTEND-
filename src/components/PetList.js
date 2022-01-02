import { Link } from "react-router-dom";

const PetList = ({petlist, searchvalue, deletePet}) => {

    return(
        <div class="table-responsive">
        <table class="table table-bordered text-white">
          <thead>
            <tr>
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
            }else if(value.pname.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())){
              return value
            }}).map(item=>{return(
                <tr key={item.id}>
                <td><Link to={`SingleOwner/${item.oidnumber}`}>{item.powner}</Link></td>
                <td>{item.pname}</td>
                <td>{item.ptype}</td>
                <td>{item.pbreed}</td>
                <td>{item.pdob}</td>
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