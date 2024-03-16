
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom,  isEvenSelector } from './store/atom/count';





function App() {
  return (
     <div>
      <RecoilRoot>
      <Count/>  
      </RecoilRoot>
    </div>
  
 
  )
}
function Count(){
  return(
    <div>
      
      <CountRender/>
      <Button/>
      <MyComponent/>
    </div>
  )

}
function MyComponent() {
  const isEven = useRecoilValue(isEvenSelector);
  return <div>{isEven ? 'Even' : 'Odd'}</div>;
}

function CountRender(){
  const count = useRecoilValue(countAtom)
  return(
    <div>
      {count}
    </div>
  )
}



function Button(){
const [count, setCount] = useRecoilState(countAtom)
return (
  <div>
     <button onClick ={()=>{
    setCount(count+1);
  }}>increament</button>

<button onClick ={()=>{
    setCount(count-1);
  }}>Decrement</button>
  </div>
)
  
}



export default App
