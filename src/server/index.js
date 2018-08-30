const Koa = require('koa');
const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;

//Second updating
// const Koa = require('koa');
// const indexRoutes = require('./routes/index');

// const app = new Koa();
// const PORT = process.env.PORT || 1337;

// app.use(indexRoutes.routes());

// const server = app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

// module.exports = server;


//updating after installin "koa@2.3.0 --save"

// const Koa = require('koa');

// const app = new Koa();
// const PORT = 1337;

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
// });

// const server = app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

// module.exports = server;


// const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
// const session = require('koa-session');
// const passport = require('koa-passport');

// const indexRoutes = require('./routes/index');
// const movieRoutes = require('./routes/movies');
// const authRoutes = require('./routes/auth');
// const store = require('./session');

// const app = new Koa();
// const PORT = process.env.PORT || 1337;

// // sessions
// app.keys = ['super-secret-key'];
// app.use(session({ store }, app));

// // body parser
// app.use(bodyParser());

// // authentication
// require('./auth');
// app.use(passport.initialize());
// app.use(passport.session());

// // routes
// app.use(indexRoutes.routes());
// app.use(movieRoutes.routes());
// app.use(authRoutes.routes());

// // server
// const server = app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// });

// module.exports = server;
