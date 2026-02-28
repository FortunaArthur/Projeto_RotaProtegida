Projeto, rota protegida com TypeScript
iniciar projeto: npm start

fluxo inicial:
index.ts
↓
server.ts
↓
routes.ts

fluxo login:
index.ts
↓
server.ts
↓
routes.ts
↓
auth.controller.ts (loginController)
↓
auth.service.ts (loginService)
↓
auth.controller.ts
↓
Resposta ao cliente

fluxo da rota protegida:
index.ts
↓
server.ts
↓
routes.ts
↓
auth.middleware.ts (rotaProtegida)
↓
dashboard.controller.ts
↓
Resposta ao cliente