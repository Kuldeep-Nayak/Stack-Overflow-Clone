import axios from 'axios';

const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://api.stackexchange.com/2.3/questions', {
        params: {
          site: 'stackoverflow',
          sort: filter,
          order: 'desc',
          pagesize: 5,
        },
      });
  
      console.log(response.config.url);  
      setQuestions(response.data.items);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching questions:", err);
      setError('Error fetching questions');
      setLoading(false);
    }
  };
  

export { fetchQuestions };
