import mongoose from "mongoose";

const lectureSchema = mongoose.Schema({
  course_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course', 
    required: true 
  },
  instructor_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  batch_number: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },

});


const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture;