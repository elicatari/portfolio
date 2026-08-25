# Eliezer Segundo Rojas Catari

Desarrollador Full-Stack (React / TypeScript + Java / Spring Boot) · Venezolano · Visa Definitiva · Iquique, Chile · disponible para presencial o remoto.

[linkedin.com/in/elicatari](https://linkedin.com/in/elicatari) · [github.com/elicatari](https://github.com/elicatari) · [elicatari.com](https://elicatari.com) · +56 9 38620108 · [dev@elicatari.com](mailto:dev@elicatari.com)

## Perfil

Desarrollador fullstack con tres sistemas en producción que sostienen la operación diaria de negocios reales: un ERP vertical de operaciones automotriz (inventario, ventas, taller), un WMS con inventario por lote/FEFO y una agenda de autoservicio. Trabajo el frontend en React y TypeScript y el backend en Java y Spring Boot, construyendo APIs REST sobre PostgreSQL con autenticación JWT.

Antes de programar operé inventario y ERPs (SAP, SIRA) en planta. Ese dominio es el que uso para diseñar las herramientas que el negocio realmente necesita, no pantallas genéricas. TSU en Informática y Diseñador Gráfico. Busco un rol de desarrollo web frontend, backend o fullstack.

## Proyectos

*Los sistemas en producción tienen código privado; los repositorios enlazados son muestras de la arquitectura.*

### [Real Motors — ERP automotriz](https://www.realmotors.cl/)

*En producción · Fullstack · muestra de arquitectura: [backend](https://github.com/elicatari/automotive-erp-core-api) · [frontend](https://github.com/elicatari/automotive-erp-web)*

Catálogo público de vehículos y panel interno para inventario (vehículos con VIN, repuestos/SKU), notas de venta, reservas, órdenes de trabajo y usuarios con acceso por rol. En uso diario por +14 personas de la empresa sobre un inventario de +200 vehículos y +300 accesorios; las notas de venta, antes en papel, hoy se emiten desde el sistema.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS · Java 21, Spring Boot, Spring Security (JWT), JPA, PostgreSQL, Flyway · JasperReports, Cloudinary · Cloudflare Pages + Railway.

### BR Logística — WMS

*En producción · Fullstack · muestra de arquitectura: [backend](https://github.com/elicatari/warehouse-wms-core-api) · [frontend](https://github.com/elicatari/warehouse-wms-web)*

WMS de bodega: el stock no se edita a mano, se mueve con documentos (recepción, picking, devoluciones, ajustes) en flujo DRAFT → CONFIRMADO. Inventario por lote y vencimiento; al confirmar un picking se asigna lote por FEFO. Maestros de productos, proveedores, clientes y usuarios. Reemplazó el control en papel: antes no se seguían lotes ni fechas de vencimiento (producto que vencía en bodega) y los ajustes no dejaban historial, así que el stock se descuadraba sin forma de auditarlo.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS, TanStack Query · Java 21, Spring Boot, Spring Security (JWT), JPA, PostgreSQL, Flyway · Cloudflare + Railway.

### Happy Pet — Agenda de autoservicio

*En producción · Fullstack · muestra de arquitectura: [backend](https://github.com/elicatari/grooming-scheduler-api)*

Agenda pública para peluquería canina: el cliente ve cupos reales, reserva horario, registra mascota y puede solicitar traslado. La disponibilidad y el cupo de traslados se garantizan en PostgreSQL para que dos reservas concurrentes no se pisen. Reemplazó la agenda en papel y la coordinación por WhatsApp: el cliente reserva solo, sin ida y vuelta de mensajes.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS, TanStack Query, Zustand · Java 21, Spring Boot, Spring Security (JWT), JPA, PostgreSQL, Flyway · Cloudflare Pages + Railway.

### [DTE Issuer — Microservicio de emisión](https://github.com/elicatari/dte-issuer-core)

*Proyecto propio · Backend · [código fuente completo](https://github.com/elicatari/dte-issuer-core)*

Microservicio de emisión de DTE (Chile) para que un POS/ERP emita boletas sin conocer el SII. Arquitectura hexagonal, multi-tenant con Keycloak (el tenant sale del JWT), folio como recurso escaso, `Idempotency-Key` obligatorio y outbox hacia RabbitMQ tras el commit. PostgreSQL con RLS. El SII está simulado: no es homologación fiscal.

**Stack:** Java 21, Spring Boot, arquitectura hexagonal, Keycloak, RabbitMQ, PostgreSQL (RLS), Flyway, OpenAPI, Docker, Testcontainers.

Más detalle de cada proyecto en [elicatari.com](https://elicatari.com).

## Experiencia profesional

### Real Motors — Desarrollador y Diseñador Web

*Marzo 2026 – Actualidad*

- Responsable de punta a punta del ERP de operaciones en producción ([realmotors.cl](https://www.realmotors.cl)): levantamiento con el negocio, modelo de datos, desarrollo, despliegue y soporte a los usuarios.
- Frontend en React, TypeScript, Vite y Tailwind; API en Java 21, Spring Boot, Spring Security (JWT) y PostgreSQL, con migraciones Flyway.
- Informes PDF (JasperReports), carga de imágenes (Cloudinary), importación/exportación CSV, acceso por rol y despliegue en Cloudflare Pages y Railway.

### Freelance — Desarrollador fullstack

*2025 – 2026*

- Encargos independientes, en paralelo a otros roles: sistemas entregados a clientes reales y publicados al cerrar el alcance.
- BR Logística: WMS en producción con inventario por lote y FEFO automático; +5 usuarios, reemplazó Excel y papel.
- Happy Pet: agenda de autoservicio en producción; +3 usuarios y +140 reservas al mes, reemplazó WhatsApp y papel.

### Dicata — Encargado IT / Control de inventario

*Diciembre 2024 – Febrero 2026*

- Participé en la implementación del ERP SIRA y di soporte a usuarios (hardware y software).
- Operé el inventario sobre ese mismo sistema: stock, entradas/salidas e inventarios cíclicos.

### SECAM — Diseñador Gráfico

*Noviembre 2022 – Noviembre 2024 · Septiembre 2017 – Julio 2018*

- Identidades visuales y material publicitario impreso y digital.
- Edición de imagen y video adaptada a cada cliente.

### Friex — Jefe de Control de Stock

*Agosto 2018 – Julio 2021*

- Inventario de productos Nestlé sobre SAP ERP: disponibilidad, mermas, entradas/salidas e inventarios cíclicos.

### 42 Motors — Técnico de Soporte / Encargado IT

*Febrero 2015 – Julio 2017*

- Implementación del ERP de la empresa y soporte a usuarios por tickets (hardware y software).
- Administración básica-intermedia de redes, capacitación a usuarios e instalación de cámaras.

## Educación

**Instituto Universitario Tecnológico Industrial Rodolfo Loero Arismendi** — Barquisimeto, Venezuela

- **TSU en Informática** · Agosto 2026 · Técnico Superior Universitario, equivalente a Técnico de Nivel Superior (TNS) en Chile.
- **Diseñador Gráfico** · Julio 2017

## Skills

**Frontend:** HTML5, CSS, Tailwind CSS, JavaScript, TypeScript, React, Vite, Astro.

**Backend:** Java 21, Spring Boot, Spring Security, JPA / Hibernate, API REST, Flyway, OpenAPI, RabbitMQ, Keycloak.

**Bases de datos:** PostgreSQL (SQL), MongoDB.

**Testing y CI/CD:** pruebas unitarias y de integración (JUnit, Testcontainers), Playwright, Postman, GitHub Actions, Docker.

**Herramientas y prácticas:** Git y GitHub, trabajo por ramas y pull requests, metodologías ágiles (Scrum, Kanban), documentación de API con OpenAPI.

**Diseño:** Illustrator, Photoshop, Premiere Pro, GIMP, Blender.

**Complementarias:** redes, mantenimiento de hardware, Windows / GNU/Linux / macOS.

**Idiomas:** español nativo · inglés: lectura técnica y comprensión intermedio-alto, conversación básica.

## Referencias

Disponibles a solicitud.