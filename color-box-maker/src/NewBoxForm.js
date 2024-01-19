import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ createBox }){
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = e => {
        const { name, val } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: val
        }))
    };

    const gatherInput = e => {
        e.preventDefault();
        createBox({...formData, id: uuid()});
        setFormData({
            height: "",
            width: "",
            backgroundColor: ""
        });
    };

    return(
        <div>
			<form onSubmit={gatherInput}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input
                    onChange={handleChange}
                    type="text"
					id="height"
                    name="height"
                    value={formData.height}
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                    onChange={handleChange}
                    type="text"
					id="width"
                    name="width"
                    value={formData.width}
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input
                    onChange={handleChange}
                    type="text"
					id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    />
                </div>
                <button id="newBoxButton">Add Box!</button>
            </form>
      </div>
    );
}

export default NewBoxForm;