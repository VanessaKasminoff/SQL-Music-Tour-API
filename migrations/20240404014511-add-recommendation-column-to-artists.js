'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn(
    'artists',
    'recommendation',
    Sequelize.STRING
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'artists',
      'recommendation'
    )
  }
};
