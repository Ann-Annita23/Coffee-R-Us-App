import React, {useId} from 'react';

export default function SearchBar({searchTerm, setSearchTerm}){
    return(
        <div className="row justify-content-center mb-4">
            <div className="col-md-6">
                <div className="input-group shadow-sm">
            <label htmlFor="search-input" className="input-group-text bg-warning text-dark border-secondary"><strong>Search for Coffee</strong></label>
            <input
            id="search-input"
            type="text"
            className="form-control border-secondary"
            placeholder="Type a coffee name or Origin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
       </div>

            </div>
        </div>
        
    );
}