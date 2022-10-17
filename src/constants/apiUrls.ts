const apiUrls = {
  projects: {
    GET: 'http://localhost:8080/Project',
    POST: 'http://localhost:8080/Project',
    PUT: 'http://localhost:8080/Project',
    DELETE: (id: String) => `http://localhost:8080/Project/${id}`,
  },
  tickets: {
    GET: 'http://localhost:8080/Ticket',
    POST: 'http://localhost:8080/Ticket',
    PUT: 'http://localhost:8080/Ticket',
    DELETE: (id: String) => `http://localhost:8080/Ticket/${id}`,
  },
};

export default apiUrls;
