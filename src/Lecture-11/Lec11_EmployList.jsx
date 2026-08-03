import React from 'react'
import { useNavigate } from 'react-router-dom';

function Lec11_EmployList() {
    const navigate = useNavigate();

    const employs = [
        { id: 1, EmployName: "Kavy" },
        { id: 2, EmployName: "Het" },
        { id: 3, EmployName: "Harshit" },
        { id: 4, EmployName: "Harsh" },
    ];
    return (
        <div>
            <h2>Employ List</h2>

            {employs.map((employ) => (
                <div key={employs.id}>
                    <h3>{employs.name}</h3>

                    <button onClick={() => navigate(`/product/${product.id}`)}>
                        View Details
                    </button>

                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Lec11_EmployList