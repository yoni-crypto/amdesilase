// studentModel.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    churchName: { type: String, required: true },
    sex: { type: String, enum: ['Male', 'Female'], required: true },
    birthDate: { type: Date, required: true },
    age: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    parentName: { type: String, required: true },
    parentPhoneNumber: { type: String, required: true },
    subCity: { type: String, required: true },
    wereda: { type: String, required: true },
    class: { type: String, enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], required: true },
});

module.exports = mongoose.model('Student', StudentSchema);
// const mongoose = require('mongoose');

// const StudentSchema = new mongoose.Schema({
//     ሙሉስም: { type: String, required: true },
//     የክርስትናስም: { type: String, required: true },
//     ጾታ: { type: String, enum: ['ወንድ', 'ሴት'], required: true },
//     የትውልድቀን: { type: Date, required: true },
//     ዕድሜ: { type: Number, required: true },
//     ስልክቁጥር: { type: String, required: true },
//     የወላጅስም: { type: String, required: true },
//     የወላጅስልክቁጥር: { type: String, required: true },
//     ክፍለከተማ: { 
//         type: String, 
//         enum: ['አዲስ ከተማ', 'አቃቂ ቃሊቲ', 'አራዳ', 'ቦሌ', 'ጉለሌ', 'ቂርቆስ', 'ኮልፌ ቀራኒዮ', 'ልደታ', 'ንፋስ ስልክ-ላፍቶ', 'የካ'], 
//         required: true 
//     },
//     ወረዳ: { type: String, required: true },
//     ክፍል: { type: String, enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], required: true },
// });

// module.exports = mongoose.model('Student', StudentSchema);
