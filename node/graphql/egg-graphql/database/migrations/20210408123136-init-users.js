'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {INITEGER,DATE,STRING}=Sequelize
    await queryInterface.createTable('users',{
      id:{type:INITEGER,primaryKey:true,autoIncrement:true},
      name:STRING(30),
      age:INITEGER,
      // 保留字段 时间戳
      created_at:DATE,
      updated_at:DATE,
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
