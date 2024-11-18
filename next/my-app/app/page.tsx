import axios from "axios";
interface user{
  name:string,
  email:string
}
export default async function Home() {
  const getdata = async ()=>{
   let val =  await axios.get("http://localhost:3000/api");
    return await val.data
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
      {val.name}
      {val.email}

    </div>
  );
}
