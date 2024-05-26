export default function Button({label, onClick}){
    return <div className="p-3"><button onClick={onClick} className='shadow-stone-800 shadow-xl rounded-lg px-5 py-2 text-slate-50 bg-slate-900 hover:text-black hover:bg-white'>{label}</button></div>
}