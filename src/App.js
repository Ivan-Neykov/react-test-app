import React, {useState, useEffect} from 'react';
import Input from './Input';
import uppercaseE from './utils';

// const App = () => {
//     const [inputValue, setInputValue] = useState('North America');
//     const [resultInput, setResultInput] = useState('');

//     // useEffect(() => {
//     //     console.log('on input value change');
//     //     setResultInput(uppercaseE(inputValue));
//     // }, [inputValue]);

//     const onChange = (value) => {
//         const res = uppercaseE(value);
//         setInputValue(value);
//         setResultInput(res);
//     };

//     return (
//         <div>
//             <h1>Hello React</h1>
//             <Input
//                 label='Country name: '
//                 placeholder='Put some string here'
//                 inputValue={inputValue}
//                 id='nameInput'
//                 onSubmit={onChange}
//             />
//             <br />
//             <br />
//             <span>{resultInput}</span>
//         </div>
//     );
// };

// export default App;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            inputValue: 'North America',
            resultInput: '',
        };
    }

    componentDidUpdate(_prevProps, prevState) {
        if (this.state.inputValue !== prevState.inputValue) {
            this.setState({resultInput: uppercaseE(this.state.inputValue)});
            console.log('on input value change');
        }
    }

    onChange(value) {
        // let res = uppercaseE(value);
        // this.setState({inputValue: value, resultInput: res});
        this.setState({inputValue: value});
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <Input
                    label='Country name: '
                    placeholder='Put some string here'
                    inputValue={this.state.inputValue}
                    id='nameInput'
                    onSubmit={this.onChange}
                />
                <br />
                <br />
                <span>{this.state.resultInput}</span>
            </div>
        );
    }
}

export default App;
