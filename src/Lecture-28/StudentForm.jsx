
import React, { useState } from "react";

function StudentForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let error = {};

        if (form.name === "") {
            error.name = "Name is required";
        }

        if (form.email === "") {
            error.email = "Email is required";
        }

        if (form.phone === "") {
            error.phone = "Phone is required";
        } else if (form.phone.length !== 10) {
            error.phone = "Phone must be 10 digits";
        }

        if (form.address === "") {
            error.address = "Address is required";
        }

        setErrors(error);

        if (Object.keys(error).length === 0) {
            alert("Form submitted successfully!");
            console.log(form);
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                />
                <p>{errors.name}</p>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />
                <p>{errors.email}</p>

                {/* Phone */}
                <input
                    type="text"
                    placeholder="Enter Phone"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                    }
                />
                <p>{errors.phone}</p>

                {/* Address */}
                <textarea
                    placeholder="Enter Address"
                    value={form.address}
                    onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                    }
                />
                <p>{errors.address}</p>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;

