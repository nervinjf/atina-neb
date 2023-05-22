const { Users, Cita, Tomador, Cotizacion, Asegurado, CitaCoti, Contacto, Empresas, Empleado, CitaEmpresa, ContactoEmpresa, Cargo, TypoEmpresa, SPersonas, SContacto, SCotizacion } = require("./index");

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
  Asegurado.belongsTo(Tomador, { as: "tomador", foreignKey: "tomador_id" });
  Tomador.hasMany(Asegurado, { as: "asegurados", foreignKey: "tomador_id" });

  //1 a muchos --> Tomador --> Cita
  CitaCoti.belongsTo(Users, { as: "Users", foreignKey: "user_id", }); //ConversationId
  Users.hasMany(CitaCoti, { as: "cita", foreignKey: "user_id", });

  // 1 a muchos --> Tomador y Cotizacion
  Contacto.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(Contacto, { as: "contacto", foreignKey: "user_id" });

  // 1 a muchos --> Tomador y Asegurado
  Asegurado.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(Asegurado, { as: "asegurados", foreignKey: "user_id" });

  // 1 a muchos --> Usuario y Empresas
  Empresas.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(Empresas, { as: "empresa", foreignKey: "user_id" });

   // 1 a muchos --> Usuario y Empresas
   Empleado.belongsTo(Empresas, { as: "empresas", foreignKey: "empresa_id" });
   Empresas.hasMany(Empleado, { as: "empleado", foreignKey: "empresa_id" });

  // 1 a muchos --> Usuario y Empresas
  Empleado.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(Empleado, { as: "empleado", foreignKey: "user_id" });

  // 1 a 1 --> Usuario y Empresas
  Empleado.belongsTo(Cargo, { as: "cargo", foreignKey: "cargo_id" });
  Cargo.hasMany(Empleado, { as: "empleado", foreignKey: "cargo_id" });

   // 1 a 1 --> Usuario y Empresas
   Empleado.hasOne(CitaEmpresa, { as: "citae", foreignKey: "empleado_id" });
   CitaEmpresa.belongsTo(Empleado, { as: "empleadoci", foreignKey: "empleado_id" });

  //1 a muchos --> Tomador --> Cita
  CitaEmpresa.belongsTo(Empresas, { as: "empresasci", foreignKey: "empresa_id", }); //ConversationId
  Empresas.hasMany(CitaEmpresa, { as: "citae", foreignKey: "empresa_id", });

  // 1 a muchos --> Tomador y Cotizacion
  ContactoEmpresa.belongsTo(Empresas, { as: "empresasco", foreignKey: "empresa_id" });
  Empresas.hasMany(ContactoEmpresa, { as: "contacto", foreignKey: "empresa_id" });

  //1 a muchos --> Tomador --> Cita
  CitaEmpresa.belongsTo(Users, { as: "Users", foreignKey: "user_id", }); //ConversationId
  Users.hasMany(CitaEmpresa, { as: "citau", foreignKey: "user_id", });

  // 1 a muchos --> Tomador y Cotizacion
  ContactoEmpresa.belongsTo(Users, { as: "Users", foreignKey: "user_id" });
  Users.hasMany(ContactoEmpresa, { as: "contactoe", foreignKey: "user_id" });

  // 1 a muchos --> User y Persona-Seguimiento
  SPersonas.belongsTo(Users, {as: "userss", foreignKey: "user_id"});
  Users.hasMany(SPersonas, {as: "spersonau", foreignKey: "user_id"});

  // 1 a  muchos --> persona-Seguimiento y contacto-segiuimiento
  SContacto.belongsTo(SPersonas, {as: "spersonacta", foreignKey: "spersona_id"});
  SPersonas.hasMany(SContacto, {as: "scontactop", foreignKey: "spersona_id"});

   // 1 a  muchos --> persona-Seguimiento y cotizacion-segiuimiento
   SCotizacion.belongsTo(SPersonas, {as: "spersonacti", foreignKey: "spersona_id"});
   SPersonas.hasMany(SCotizacion, {as: "scotizacionp", foreignKey: "spersona_id"});

   // 1 a muchos --> User y Persona-Seguimiento
  SContacto.belongsTo(Users, {as: "userctos", foreignKey: "user_id"});
  Users.hasMany(SContacto, {as: "scontactou", foreignKey: "user_id"});


  // 1 a muchos --> User y Persona-Seguimiento
  SCotizacion.belongsTo(Users, {as: "usersctis", foreignKey: "user_id"});
  Users.hasMany(SCotizacion, {as: "scotizacionu", foreignKey: "user_id"});
};

module.exports = initModels;
