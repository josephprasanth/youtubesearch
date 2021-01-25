import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.term);
        // Section for call back from parent component -- The searchterm
    };

    render() {
        return (
            <div class="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;