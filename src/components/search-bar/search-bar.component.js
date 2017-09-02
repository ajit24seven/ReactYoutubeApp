import React, {Component} from 'react';

export default class SearchBar extends Component{
   
    constructor(props){
        super(props);
        this.state = {term:null};
    };

   
    onInputChange = (e) => {
       // if (e.key === 'Enter') {
            let term = e.target.value;
            this.setState({term});
            this.props.onSearchTermChange(term);
      //  }
    }

    render(){
        return (
            <div className="search-bar col-md-12">
                <input className="form-control" placeholder="Search Videos"
                    value={this.state.term} 
                    onChange = {this.onInputChange} 
                />
            </div>
        )
    };
}
