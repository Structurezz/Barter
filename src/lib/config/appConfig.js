import { config } from "dotenv";


class AppConfig {
    constructor() {
        config();
        this.server = {
            port: process.env.PORT || 34092,
            mode: process.env.NODE_ENV
        };
        this.providers = {
            notifications: {
                mail: {},
                sms: {}
            },
            paystack: {},
            security: {
                jwt: {},
                tokens: {}
            },
            storage: {
                s3: {}
            }
        };
    }
}

export default new AppConfig();
