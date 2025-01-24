import Lecture from '../models/lectureModel.js';

export const getInstructorLectures = async (req, res) => {
  const instructorId = req.user._id; // Assuming the logged-in user is passed in `req.user`

  try {
    const lectures = await Lecture.find({ instructorId }).populate('courseId');
    const lectureDetails = lectures.map(lecture => ({
      date: lecture.date,
      courseName: lecture.courseId.name,
      batchName: lecture.batchName,
    }));

    res.status(200).json(lectureDetails);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assigned lectures' });
  }
};
