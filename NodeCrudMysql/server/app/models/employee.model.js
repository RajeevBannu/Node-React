module.exports = (sequelize, Sequelize) => {
   
    const employee = sequelize.define("employees3s", {
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        published: {
          type: Sequelize.BOOLEAN
        }
      });
    
      return employee;

};