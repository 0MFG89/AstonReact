import './List.css';

const List = ({ data }) => {
   return <>
      <ul class="list">
         {data.map(el => <li class="list__element" key={el.name} >{ el.name }</li>)}
      </ul>
   </>
}

export default List;