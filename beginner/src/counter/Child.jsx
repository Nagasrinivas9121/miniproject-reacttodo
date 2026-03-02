function Child({onIncrease,onDecrease}){
    return (
        <div>
            <button onClick={onIncrease}> Like </button>
            <button onClick={onDecrease}> DisLike </button>
        </div>
    )
}
export default Child;