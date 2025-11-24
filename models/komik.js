module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define(
    "Komik",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      ImageType: DataTypes.STRING,
      ImageName: DataTypes.STRING,
      ImageData: DataTypes.BLOB("long"),
    },
    {
      tableName: "komiks",
    }
  );
  return Komik;
};
