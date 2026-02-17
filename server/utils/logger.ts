import { createLogger, format, transports } from "winston";
import path from "path";

const logDir = path.join(process.cwd(), "logs");

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.json(),
    ),
    defaultMeta: { service: "portfolio-api" },
    transports: [
        new transports.File({ filename: path.join(logDir, "all.log") }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.Console({
        format: format.simple(),
    }));
}

export default logger;
