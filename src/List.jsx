function Lists(){
    const fruits=["apple", "banana", "orange", "coconut"];
    fruits.sort();
    const ListItems = fruits.map(f => <li>{f}</li>)
    return(
        <ol>{ListItems}</ol>
    );
}
export default Lists