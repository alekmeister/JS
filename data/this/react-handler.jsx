export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.appName = "App";
    }

    readName() {
        console.log(this.appName);
    }

    render() {
        return <button onClick={this.readName}>Read Props</button>; // undefined
    }
}

// решение
// constructor(props) {
//     super(props);
//     this.appName = "App";
//     this.readName = this.readName.bind(this);
// }
// либо
//
// readName = () => {
//     console.log(this.appName);
// }
// либ
//  render() {
//         return <button onClick={() => this.readName()}>Read Props</button>
//     }
