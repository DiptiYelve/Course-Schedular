import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  level: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String,
    required: true 
  }, // URL or file path
  lectures: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Lecture' 
  }]
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
