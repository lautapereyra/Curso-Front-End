

const Child = (props) => {
    function changeto30() {
        props.change()
    }
    return (
        <div>
            <h1>I am from child component</h1>
            <button onClick={changeto30}>Change value of x to 30</button>
        </div>
    );

}

export default Child;