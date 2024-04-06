"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Meet_Greet, Set_Time}) {
      Artist.hasMany(Meet_Greet, {
        foreignKey: "artist_id",
        as: "meet_greets"
      })

      Artist.hasMany(Set_Time, {
        foreignKey: "artist_id",
        as: "set_times"
      })
    }
  }
  Artist.init({
    artist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists',
    timestamps: false
  })
  return Artist;
};
