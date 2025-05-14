'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departureCityId: {
        type: Sequelize.STRING
      },
      destinationCityId: {
        type: Sequelize.STRING
      },
      airplaneId: {
        type: Sequelize.STRING
      },
      departure: {
        type: Sequelize.STRING
      },
      arrival: {
        type: Sequelize.STRING
      },
      flightNumber: {
        type: Sequelize.STRING
      },
      airportId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};