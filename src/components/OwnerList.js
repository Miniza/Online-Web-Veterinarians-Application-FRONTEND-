
import { Link } from "react-router-dom";

const OwnerList = ({ownerlist, searchvalue, deleteOwner, petlist}) => {

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
          }else if(value.oname.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())){
            return value;
          }
        }).map(item=>{return(
            <tr key={item.oidnumber}>
            <td>{item.oname}</td>
            <td>{item.osurname}</td>
            <td>{item.ocellnum}</td>
            <td>{item.omail}</td>
            <td>{item.opostal}</td>
            <td>{petlist.map(value=>{if(item.oidnumber==value.oidnumber){return(<pre class="text-white">{value.pname}</pre>)}})}</td>
            <td><span> 
            <Link to={`EditOwner/${item.oidnumber}`}><button className="btn btn-success"><i className="fa fa-edit"></i></button></Link>
              <button onClick={e=>{deleteOwner(e, item.oidnumber)}} className="btn btn-danger"><i className="fa fa-trash " ></i></button></span></td>
          </tr>)
})}
      </tbody>
    </table>
    
  </div> 
    );

}


export default OwnerList;