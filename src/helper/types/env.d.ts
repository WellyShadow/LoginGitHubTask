export {};

declare global {
    namespace NodeJS{
        interface ProccesEnv{
            GITHUB_USERNAME: string,
            GITHUB_PASSWORD: string
        }
    }
}