'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Artist, Event, Stage}) {
      Set_Time.belongsTo(Artist, {
        foreignKey: "artist_id",
        as: "artists"
      })

      Set_Time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })

      Set_Time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stages"
      })
    }
  }
  
  Set_Time.init({
    set_time_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    stage_id: {
      type: DataTypes.SMALLINT
    },
    event_id: {
      type: DataTypes.SMALLINT
    },
    artist_id: {
      type: DataTypes.SMALLINT
    },
    start_time: {
      type: DataTypes.DATE
    },
    end_time: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_Time;
};