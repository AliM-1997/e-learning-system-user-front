import axios from "axios";

export const classRemote = {
  getAllClasses: async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/classes");
      return data;
    } catch (error) {
      throw error;
    }
  },
};
