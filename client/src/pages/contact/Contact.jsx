import "./contact.css"
export default function Contact() {
  return (
    <div className="body">
    <div className="container contact">
    <div className="row">
      <div className="col-md-2">
        <div className="contact-info">
          <h4>ICT ACADEMY-NORTH REGION
              2nd Floor, Ul Cyberpark Building,
              Nellikode PO, Kozhikode,
              Kerala, India.
              Phone: 7594051437 /+91-495-2431432</h4>
          <h4>ICT ACADEMY-CENTRAL REGION
              Ground Floor,Rajamally Building,
              Infopark, Koratty,
              Thrissur, Kerala, India.
              Phone: 7594051437 /+91-481-2731050</h4>
          <h4>ICT ACADEMY HQ
             G1,Ground Floor, Thejaswini Building,
             Technopark, Thiruvananthapuram,
             Kerala, India.
             Mobile: 7594051437
             Phone: +91-471-2700811</h4> 
        </div>
      </div>
      <div className="col-md-9">
        <div className="contact-form">
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
            <div className="col-sm-10">          
              <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
            <div className="col-sm-10">          
              <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
            <div className="col-sm-10">
              <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
            </div>
          </div>
          <div className="form-group">        
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
