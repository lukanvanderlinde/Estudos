/* Modulos utilizados nessa aplicação:
|* - express: https://www.npmjs.com/package/express
|* - joi: https://www.npmjs.com/package/joi
|* 
|* O express facilita o gerenciamento de requisições REST.
|* O joi facilita a validação de objetos.
*/
const Joi = require('joi'); // Object schema description language and validator for JavaScript objects.
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express();

// Objeto que simula um conjunto de dados que viria de um banco de dados
let courses = [
  { id: 1, name:'course1'},
  { id: 2, name:'course2'},
  { id: 3, name:'course3'},
  { id: 4, name:'course4'},
];

// Express midleware
app.use(express.json());

// Rotas e requests
// Get Raiz
app.get('/', (request, response) => {
  response.send('Hello World!');
});

// Get API > Courses
app.get('/api/courses', (request, response) => {
  response.send(courses);
});

// Post API > Courses
app.post('/api/courses', (request, response) => {
  const { error } = validateCourse(request.body);
  if (error) {
    response.status(400).send(error.details);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: request.body.name
  }
  courses.push(course);
  response.send(course);
});

// Put API > Courses : ID
app.put('/api/courses/:id', (request, response) => {
  const course = courses.find(c => c.id === parseInt(request.params.id));
  if (!course) return response.status(404).send('ERROR: The course with the given ID was not found.');
  
  const { error } = validateCourse(request.body);
  if (error) return esponse.status(400).send(error.details);

  course.name = request.body.name;
  response.send(course);
});

// Get API > Courses : ID
app.get('/api/courses/:id', (request, response) => {
  const course = courses.find(c => c.id === parseInt(request.params.id));
  if (!course) return response.status(404).send('ERROR: The course with the given ID was not found.');
  
  response.send(course);
});

// Delete API > Courses : ID
app.delete('/api/courses/:id', (request, response) => {
  const course = courses.find(c => c.id === parseInt(request.params.id));
  if (!course) return response.status(404).send('ERROR: The course with the given ID was not found.');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  response.send(course);
});

// Listen port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..!`));

// Validate course
function validateCourse (course)  {
  // Schema que valida usando o modulo joi as informações do post
  const schema = {
    name: Joi.string().min(3).required()
  };
  // Resultado da validação com o Joi
  return Joi.validate(course, schema);
}