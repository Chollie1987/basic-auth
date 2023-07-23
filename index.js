const sequelize = require('./models')

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  })
  .catch((e) => {
    console.error('Could not start server', e.message);
  });
