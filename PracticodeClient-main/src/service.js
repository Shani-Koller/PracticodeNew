// import process.env.API_ADDRESS from 'process.env.API_ADDRESS';
process.env.API_ADDRESS.defaults.baseURL= 'http://localhost:5030'

process.env.API_ADDRESS.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error('An error occurred:', error);
      return Promise.reject(error);
    }
  );

export default {
  getTasks: async () => {
    const result = await process.env.API_ADDRESS.get(`/items`);
    return result.data;
  },

  addTask: async(newToDo)=>{
    console.log('addTask', newToDo)
    await process.env.API_ADDRESS.post(`/items`, {name:newToDo,isComplete:false});
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete});
    await process.env.API_ADDRESS.put(`/items/${id}`);
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await process.env.API_ADDRESS.delete(`/items/${id}`);
  }
};

