import Pet from "../models/animalModel.js";

export const createPet = async (req, res) => {
    const { name, especie, age, sexo, owner } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'All fields are required' });
    }
            
    if (!especie ) {
        return res.status(400).json({ message: 'All fields are required' });
    }
            
    if (!owner) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        // const existingPet = await Pet.findOne({ username });
        // if (existingPet) {
        //     return res.status(409).json({ message: 'Username already exists' });
        // }
        const newPet = Pet.create({ name, especie, age, sexo, owner });

        return res.status(201).json({ message: 'User created successfully', pet: newPet });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
