import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    especie: {
        type: String,
        required: [true, 'especie is required'],
        trim: true
    },
    age: {
        type: String,
    },
    peso: {
        type: Number,
    },
    sexo: {
        type: String,
    },
    owner: {
        type: String,
    }
}, {
    timestamps: true
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;