function Navbar() {
    return ( 
        <div className="w-[90%] mx-auto flex justify-between mt-4 border-b">
            <div>
                Todo
            </div>
            <div>
                <button className="mx-3 mb-3 border rounded-full px-3 py-1">sign up</button>
                <button className="mx-3 mb-3 border rounded-full px-3 py-1">log in</button>
            </div>
        </div>
     );
}

export default Navbar;