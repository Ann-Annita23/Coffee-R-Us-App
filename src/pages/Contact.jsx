export default function ContactPage(){
    return(
        <div className="container my-5">
            <div className="card shadow-sm border border-secondary-subtle mx-auto" style={{maxWidth:'450px'}}>
            <div className="card-header bg-dark text-white text-center fw-bold h5 py-3">Get to know us!
            <div className="card-body p-4 text-center">
                <div className="mb-4">
                   <span className="text-muted small text-uppercase d-block mb-1"><strong>Name:</strong></span> 
                    <h4 className="fw-bold text-dark m-0">Coffee R Us</h4>
                </div>
                <div className="mb-4">
                    <span className="text-muted small text-uppercase d-block mb-1"><strong>Description:</strong></span>
                    <p className="m-0">The go to store for coffee</p>
                </div>
                <div className="mb-4">
                    <span className="text-muted small text-uppercase d-block mb-1"><strong>Phone Number:</strong></span>
                    <p className="m-0">555-5555</p>
                </div>
            </div>
            </div>
            </div>    
        </div>
    )
}