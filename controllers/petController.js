import User from '../models/userModel.js';
import Pet from "../models/animalModel.js";


export const createPet = async (req, res) => {
    const { name, especie, age, sexo, username } = req.body;
    const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(409).json({ message: 'Não encontramos esse usuário na plaforma' });
        }
    const ownerId = existingUser._id
        console.log(ownerId)
    if (!name) {
        return res.status(400).json({ message: 'All fields are required' });
    }
            
    if (!especie ) {
        return res.status(400).json({ message: 'All fields are required' });
    }
            
    if (!ownerId) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const newPet = Pet.create({ name, especie, age, sexo, owner:ownerId });

        return res.status(201).json({ message: 'User created successfully', pet: newPet });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
