import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${date.toDateString()} ${hours}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(label({ label: "PERKSS" }), timestamp(), customFormat),
  transports: [new transports.Console()],
});

const errorLogger = createLogger({
  level: "error",
  format: combine(label({ label: "PERKSS-ERROR" }), timestamp(), customFormat),
  transports: [new transports.Console()],
});

export { logger, errorLogger };
