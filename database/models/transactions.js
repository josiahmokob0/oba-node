"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "Transactions",
    {
      transaction: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      transaction_date: DataTypes.STRING,
      due_date: DataTypes.STRING,
      supplier: DataTypes.STRING,
      item: DataTypes.STRING,
      quantity: DataTypes.STRING,
      unit_amount: DataTypes.STRING,
      amount: DataTypes.STRING,
    },
    {}
  );
  Transactions.associate = function (models) {
    // associations can be defined here
  };
  return Transactions;
};

