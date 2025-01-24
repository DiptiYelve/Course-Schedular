import mongoose from 'mongoose';

const instructorAvailabilitySchema = mongoose.Schema({
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  assignedCourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
});

const InstructorAvailability = mongoose.model('InstructorAvailability', instructorAvailabilitySchema);

export default InstructorAvailability;
