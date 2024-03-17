export function VideoCard(){
    return(
        <>
        <img src ="image.png"></img>
        <div className="grid grid-flow-row-dens grid-cols-12">
            <img className="rounded-full pt-2 pl-1 "src="image2.png"></img>
            <div className="col-span-10 pt-2">
                <h1>We Don't talk anyomore | Charlie puth</h1>
                <h2>Charlie Puth</h2>
                <p>2.1 B | 2 years ago</p>
            </div>
        </div>
        </>
    )

}