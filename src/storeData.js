const addToLocalStorage = (obj) => {
    // Get the existing local storage data
    const existingData = localStorage.getItem("jobDetails");

    if (existingData) {
        // If there is existing data, parse it into an array
        const existingArray = JSON.parse(existingData);

        // Check if the object already exists in the array
        const existingObjIndex = existingArray.findIndex((existingObj) => {
            return existingObj.id === obj.id; // Replace "id" with the property you want to use for comparison
        });

        if (existingObjIndex === -1) {
            // If the object doesn't exist in the array, add it
            existingArray.push(obj);

            // Stringify the updated array and save it to local storage
            const updatedData = JSON.stringify(existingArray);
            localStorage.setItem("jobDetails", updatedData);
        }
    } else {
        // If there is no existing data, create a new array with the new object and save it to local storage
        const newArray = [obj];
        const newArrayStringified = JSON.stringify(newArray);
        localStorage.setItem("jobDetails", newArrayStringified);
    }
};


export {
    addToLocalStorage
}