'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Artist, Event}) {
      Meet_Greet.belongsTo(Artist, {
        foreignKey: "artist_id",
        as: "artists"
      })

      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })
    }
  }
  Meet_Greet.init({
    meet_greet_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    event_id: {
      type: DataTypes.SMALLINT
    },
    artist_id: {
      type: DataTypes.SMALLINT
    },
    meet_start_time: {
      type: DataTypes.DATE
    },
    meet_end_time: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_Greet;
};