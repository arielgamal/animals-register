import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    petCode: {
        type: String,
        unique: true
    },
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
    sexo: {
        type: String,
    },
    owner: {
    type: mongoose.Schema.Types.ObjectId, // referência para o _id do User
    ref: 'User', // nome do model User
    required: [true, 'Owner is required']
  }
}, {
    timestamps: true
});

petSchema.pre('save', async function (next) {
  // se já existe petCode, não faz nada
  if (this.petCode) return next();

  try {
    // Conta quantos animais já existem no banco
    const count = await mongoose.model('Animal').countDocuments();

    // Gera o código no formato PET-0001, PET-0002, etc.
    const newCode = `PET-${String(count + 1).padStart(4, '0')}`;

    this.petCode = newCode;
    next();
  } catch (err) {
    next(err);
  }
});

const Pet = mongoose.model('Animal', petSchema);

export default Pet;