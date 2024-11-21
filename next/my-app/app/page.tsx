import axios from "axios";
interface user{
  name:string,
  email:string
}
export default async function Home() {
  const getdata = async ()=>{
   let val =  await axios.get("http://localhost:3000/api");
    return val.data
  };
  const val= await getdata();
  if(!val){
    return (
      <div>
        Loading..........
      </div>
    )
  }
  return (
    <div>
      <div className="space-x-5 flex items-center justify-center flex-col min-h-screen ">
        <input type="text" placeholder="please enter your email"/>
        <input type="text" placeholder="please enter your password"/>
        <button>Click me</button>

      </div>

    </div>
  );
}
