"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "artists",
      [
        {
          name: "Pomme",
          genre: "Chanson",
          available_start_time: new Date(),
          end_time: new Date(),
        },
        {
          name: "Bren Joy",
          genre: "R&B/Soul",
          available_start_time: new Date(),
          end_time: new Date(),
        },
      ],
      {}
    );

    const recentTimestamp = new Date();
    return recentTimestamp;

  },

  async down(queryInterface, Sequelize, recentTimestamp) {
    if (recentTimestamp) {
      await queryInterface.bulkDelete('artists', {
        available_start_time: recentTimestamp
      });
    }
  },
};
