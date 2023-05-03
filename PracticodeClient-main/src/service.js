// import process.env.API_ADDRESS from 'process.env.API_ADDRESS';
//process.env.API_ADDRESS.defaults.baseURL= 'http://localhost:5030'

const apiClient = axios.create({
  baseURL: process.env.API_ADDRESS,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);


export default {
  getTasks: async () => {
    const result = await apiClient.get(`/items`);
    return result.data;
  },

  addTask: async(newToDo)=>{
    console.log('addTask', newToDo)
    await apiClient.post(`/items`, {name:newToDo,isComplete:false});
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete});
    await apiClient.put(`/items/${id}`);
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await apiClient.delete(`/items/${id}`);
  }
};

