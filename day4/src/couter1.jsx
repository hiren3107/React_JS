import Counter2 from "./counter2"

function Counter1(props) {
    return (
        <div>{props.a}
        
        <Counter2 h = {props.a} />
        </div>
    )
}

export default Counter1