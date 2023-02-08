const { Users, Cita, Tomador, Cotizacion, Asegurado, CitaCoti, Contacto} = require("./index");

const initModels = () => {
  // muchos a muchos --> usuarios y conversaciones
  // Users.belongsToMany(Conversations, { through: "participants" });
  // Conversations.belongsToMany(Users, { through: "participants" });

  // 1 a muchos --> Users --> Tomador
  Tomador.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Tomador, { as: "tomador", foreignKey: "user_id" });

  //1 a muchos --> Tomador --> Cita
  CitaCoti.belongsTo(Tomador, { as: "tomador", foreignKey: "tomador_id", }); //ConversationId
  Tomador.hasMany(CitaCoti, { as: "cita", foreignKey: "tomador_id", });

  // 1 a muchos --> Tomador y Cotizacion
  Contacto.belongsTo(Tomador, { as: "tomador", foreignKey: "tomador_id" });
  Tomador.hasMany(Contacto, { as: "contacto", foreignKey: "tomador_id" });

  // 1 a muchos --> Tomador y Asegurado
  Asegurado.belongsTo(Tomador, { as: "tomador", foreignKey: "tomador_id"});
  Tomador.hasMany(Asegurado, {as:"asegurados", foreignKey:"tomador_id"});

  //1 a muchos --> Tomador --> Cita
  CitaCoti.belongsTo(Users, { as: "Users", foreignKey: "user_id", }); //ConversationId
  Users.hasMany(CitaCoti, { as: "cita", foreignKey: "user_id", });

  // 1 a muchos --> Tomador y Cotizacion
  Contacto.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(Contacto, { as: "contacto", foreignKey: "user_id" });

  // 1 a muchos --> Tomador y Asegurado
  Asegurado.belongsTo(Users, { as: "Users", foreignKey: "user_id"});
  Users.hasMany(Asegurado, {as:"asegurados", foreignKey:"user_id"});
};

module.exports = initModels;
