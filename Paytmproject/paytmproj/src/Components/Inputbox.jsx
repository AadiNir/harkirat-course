export default function Inputbox({placehold,onChange}){
    return <div className="p-2"><input className="rounded-lg border-4 border-black text-center" onChange={onChange} placeholder={placehold} /></div>
}