declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            PORT: string
            DB_HOST: string
            DB_NAME: string
            DB_PORT: number
            DB_USER: string
            DB_PASS: string
            WEBHOOK_SECRET: string
        }
    }
}

export { }