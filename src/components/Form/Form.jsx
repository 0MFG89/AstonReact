import './Form.css';
import React from 'react';

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         input: this.props.startValue
      };
      this.inputHandler = this.inputHandler.bind(this);
   }

   componentDidMount() {
      console.log('Component mounted');
   }

   componentDidUpdate() {
      console.log('Component updated');
      console.log(this.state.input);
   }

   componentWillUnmount() {
      console.log('Component umounted');
   }

   inputHandler(e) {
      this.setState({input: e.target.value});
   }

   render() {
      return <div className="form">
         <form>
            <div className="form__container">
               <input 
                  type="text" 
                  value={this.state.input} 
                  onChange={this.inputHandler} 
               />
               <button>OK</button>
            </div>
         </form>
      </div>
   }
}

export default Form;