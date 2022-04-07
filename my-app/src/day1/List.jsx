// component => function => which takes properties as arguments and return react element.



const List=(props)=>{
    // console.log(props);
    return (<div className="App">
<h1>Mobile Operating System</h1>
 <ul>
      <li>Android</li>
      <li>Blackberry</li>
      <li>iPhone</li>
              <li>Windows Phone</li>
         </ul>
        
    </div>)      
 
}
// default export
export default List;



// named export
export const List2=()=>{
    return (<div className="App">

    <h1>Mobile Manufacturers</h1>
    <ul>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Micromax</li>
      <li>Apple</li>
    </ul>
</div>)  
}