// Conexion con la base de datos con mongoose
const mongoose = require("mongoose");
const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB, PORT_SERVER } = require("./config");

// mongoose.set("useFindAndModify", false); // Arreglar error de UPDATE - DELETE - CREATE

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/luisdelaossadiaz`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
        
        app.listen(PORT_SERVER, () => {
            console.log("La conexion a la base de datos es correcta.");
            console.log();
            console.log("######################");
            console.log("###### API REST ######");
            console.log("######################");
            console.log();
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
      });
    }
  }
);
