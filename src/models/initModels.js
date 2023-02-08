const { Users, Cita, Contacto, People} = require("./index");

const initModels = () => {
  // muchos a muchos --> usuarios y conversaciones
  // Users.belongsToMany(Conversations, { through: "participants" });
  // Conversations.belongsToMany(Users, { through: "participants" });

  // 1 a muchos --> Users --> Tomador
  People.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(People, { as: "people", foreignKey: "user_id" });

  //1 a muchos --> Tomador --> Cita
  Cita.belongsTo(People, { as: "people", foreignKey: "people_id", }); //ConversationId
  People.hasMany(Cita, { as: "cita", foreignKey: "people_id", });

  // 1 a muchos --> Tomador y Cotizacion
  Contacto.belongsTo(People, { as: "people", foreignKey: "people_id" });
  People.hasMany(Contacto, { as: "contacto", foreignKey: "people_id" });

  //1 a muchos --> Tomador --> Cita
  Cita.belongsTo(Users, { as: "Users", foreignKey: "user_id", }); //ConversationId
  Users.hasMany(Cita, { as: "cita", foreignKey: "user_id", });

  // 1 a muchos --> Tomador y Cotizacion
  Contacto.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(Contacto, { as: "contacto", foreignKey: "user_id" });

};

module.exports = initModels;

// hicimos el boiler template
// creamos los modelos
// las relaciones
