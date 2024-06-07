import { useState } from "react"

function NewLocation({addLocation}) {
    const [newLocation, setNewLocation] = useState('')
    return (
        <div>
            <h1>Add new location</h1>
            <div>
            <input 
                value={newLocation}
                onChange={(event) => setNewLocation(event.target.value)}
            />
            </div>
            <button onClick={()=> {
                addLocation(newLocation)
                setNewLocation('')
            }} className="btn btn-primary mt-2" >Add</button>
        </div>
    )

}

export default NewLocation