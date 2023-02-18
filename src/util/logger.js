import pino from "pino";

const logger = pino({
  name: "Askademia - Learning Web App",
  level: "info",
});

export default logger;
