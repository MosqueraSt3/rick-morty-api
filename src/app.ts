import { AppRoutes } from './presentation/routes';
import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentation/server';

(async () => {
    main();
})();

function main() {
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });
    server.start();
}