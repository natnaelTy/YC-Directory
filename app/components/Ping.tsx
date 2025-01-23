

const Ping = () => {
    return (  
        <div className="relative">
            <div className="absolute -left-4 top-1">
                <span className="flex size-[11px]">
                   <span className="absolute inline-flex h-full w-full rounded-full animate-ping bg-red-500">
                     
                   </span>
                   <span className="relative inline-flex size-[11px] bg-red-500 rounded-full"></span>
                </span>
            </div>
        </div>
    );
}
 
export default Ping;