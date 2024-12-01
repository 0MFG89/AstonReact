import './Form.css';
import React from 'react';

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         input: this.props.startValue
      };
      this.input = React.createRef();
      this.sendButton = React.createRef();
      this.inputHandler = this.inputHandler.bind(this);
      this.sendButtonHandler = this.sendButtonHandler.bind(this);
      this.focusButtonHandler = this.focusButtonHandler.bind(this);
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
      const inputValue = e.target.value;
      if (inputValue.includes('реакт')) this.sendButton.current.disabled = true;
      else this.sendButton.current.disabled = false;
      this.setState({input: inputValue});
   }

   sendButtonHandler(e) {
      e.preventDefault();
      console.log('Отправка формы');
   }

   focusButtonHandler(e) {
      e.preventDefault();
      this.input.current.focus();
   }

   render() {
      return <div className="form">
         <form>
            <div className="form__container">
               <input 
                  type="text" 
                  value={this.state.input}
                  ref={this.input}
                  onChange={this.inputHandler} 
               />
               <button 
                  type="submit"
                  ref={this.sendButton}
                  onClick={this.sendButtonHandler}
               >
                  SEND
               </button>
               <button
                  onClick={this.focusButtonHandler}
               >
                  Focus
               </button>
            </div>
         </form>
      </div>
   }
}

export default Form;