import axios from "axios";

export const courseRemote = {
  getAllCourses: async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/cources");
      return data;
    } catch (error) {
      throw error;
    }
  },
  enrollClass: async (userId, classId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/enroll/${classId}`,
        { id: userId }
      );
      return data;
    } catch (error) {
      console.error(
        "Error enrolling in class:",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  applyWithdrawal: async (userId, classId, reason) => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/withdraw/${classId}`,
        { userId, reason }
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
};
