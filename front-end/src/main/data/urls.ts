const protocol: string = "http";
const hostname: string = "localhost";
const port: number = 8020;
const service: string ="user-service"

export const authUrl = `${protocol}://${hostname}:${port}/${service}/login`;
