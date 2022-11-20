declare const _default: (() => {
    type: string;
    name: string;
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
    autoLoadEntities: boolean;
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    name: string;
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
    autoLoadEntities: boolean;
    synchronize: boolean;
}>;
export default _default;
