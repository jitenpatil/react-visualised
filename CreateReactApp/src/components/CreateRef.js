import React from 'react';

export default class CreateRef extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.countryRef = React.createRef();
        this.submit = this.submit.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }


    submit () {
        const id = document.querySelector("#id").value;
        this.setState({id: id});
        this.setState({country: this.countryRef.current.value});
    }

    nameChange(event){
        console.log(event.target.value);
        this.setState({name:event.target.value})
    }
    render (){
        return (
            <>
                <div>
                    <input id = "id"/>
                    <input onChange={this.nameChange}/>
                    <input ref={this.countryRef}/>
                    <button onClick={this.submit}>Click</button>
                </div>
                <div>
                    {this.state.id} - {this.state.name} - {this.state.country}
                </div>
            </>
        );
    }
}