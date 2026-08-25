# Eliezer Segundo Rojas Catari

Full-Stack Developer (React / TypeScript + Java / Spring Boot) · Venezuelan · Chilean permanent residency · Iquique, Chile · open to on-site or remote.

[linkedin.com/in/elicatari](https://linkedin.com/in/elicatari) · [github.com/elicatari](https://github.com/elicatari) · [elicatari.com](https://elicatari.com) · +56 9 38620108 · [dev@elicatari.com](mailto:dev@elicatari.com)

## Profile

Fullstack developer with three systems in production running the day-to-day operations of real businesses: a vertical ERP for automotive operations (inventory, sales, workshop), a WMS with lot/FEFO inventory and a self-service booking system. I build the frontend with React and TypeScript and the backend with Java and Spring Boot, shipping REST APIs on PostgreSQL with JWT authentication.

Before writing code I ran inventory and ERPs (SAP, SIRA) on the shop floor. That domain knowledge is what I use to design the tools a business actually needs instead of generic screens. Associate degree in Computer Science and Graphic Design. Looking for a web development role: frontend, backend or fullstack.

## Projects

*The production systems have private codebases; the linked repositories are architecture samples.*

### [Real Motors — Automotive ERP](https://www.realmotors.cl/)

*In production · Fullstack · architecture sample: [backend](https://github.com/elicatari/automotive-erp-core-api) · [frontend](https://github.com/elicatari/automotive-erp-web)*

Public vehicle catalogue plus an internal panel for inventory (vehicles with VIN, parts/SKU), sales notes, reservations, work orders and role-based user access. Used daily by 14+ people across an inventory of 200+ vehicles and 300+ accessories; sales notes used to be handwritten and are now issued from the system.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS · Java 21, Spring Boot, Spring Security (JWT), JPA, PostgreSQL, Flyway · JasperReports, Cloudinary · Cloudflare Pages + Railway.

### BR Logística — WMS

*In production · Fullstack · architecture sample: [backend](https://github.com/elicatari/warehouse-wms-core-api) · [frontend](https://github.com/elicatari/warehouse-wms-web)*

Warehouse management system: stock is never edited by hand, it moves through documents (receipts, picking, returns, adjustments) in a DRAFT → CONFIRMED flow. Inventory tracked by lot and expiry date; confirming a picking assigns the lot by FEFO. Product, supplier, customer and user masters. It replaced paper-based control: lots and expiry dates were not tracked at all (stock expiring in the warehouse) and adjustments left no history, so inventory drifted with no way to audit it.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS, TanStack Query · Java 21, Spring Boot, Spring Security (JWT), JPA, PostgreSQL, Flyway · Cloudflare + Railway.

### Happy Pet — Self-service booking

*In production · Fullstack · architecture sample: [backend](https://github.com/elicatari/grooming-scheduler-api)*

Public booking system for a dog grooming salon: customers see real availability, book a slot, register their pet and can request pickup. Availability and the pickup quota are enforced in PostgreSQL so two concurrent bookings cannot collide. It replaced the paper agenda and WhatsApp coordination: customers book on their own, with no back-and-forth messaging.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS, TanStack Query, Zustand · Java 21, Spring Boot, Spring Security (JWT), JPA, PostgreSQL, Flyway · Cloudflare Pages + Railway.

### [DTE Issuer — Invoicing microservice](https://github.com/elicatari/dte-issuer-core)

*Personal project · Backend · [full source code](https://github.com/elicatari/dte-issuer-core)*

Microservice that issues Chilean electronic tax documents (DTE) so a POS/ERP can emit receipts without knowing anything about the tax authority (SII). Hexagonal architecture, multi-tenant with Keycloak (tenant resolved from the JWT), folio numbers modelled as a scarce resource, mandatory `Idempotency-Key` and an outbox to RabbitMQ after commit. PostgreSQL with RLS. The SII is simulated: this is not a tax-certified integration.

**Stack:** Java 21, Spring Boot, hexagonal architecture, Keycloak, RabbitMQ, PostgreSQL (RLS), Flyway, OpenAPI, Docker, Testcontainers.

More detail on each project at [elicatari.com](https://elicatari.com).

## Professional experience

### Real Motors — Web Developer and Designer

*March 2026 – Present*

- End-to-end owner of the operations ERP in production ([realmotors.cl](https://www.realmotors.cl)): requirements gathering with the business, data model, development, deployment and user support.
- Frontend in React, TypeScript, Vite and Tailwind; API in Java 21, Spring Boot, Spring Security (JWT) and PostgreSQL, with Flyway migrations.
- PDF reports (JasperReports), image uploads (Cloudinary), CSV import/export, role-based access and deployment on Cloudflare Pages and Railway.

### Freelance — Fullstack developer

*2025 – 2026*

- Independent paid work, in parallel with other roles: systems delivered to real clients and published when the scope was closed.
- BR Logística: WMS in production with lot-level inventory and automatic FEFO; 5+ users, replaced spreadsheets and paper.
- Happy Pet: self-service booking in production; 3+ users and 140+ bookings a month, replaced WhatsApp and paper.

### Dicata — IT Lead / Inventory Control

*December 2024 – February 2026*

- Took part in the SIRA ERP rollout and provided user support (hardware and software).
- Ran inventory on that same system: stock levels, goods in/out and cycle counts.

### SECAM — Graphic Designer

*November 2022 – November 2024 · September 2017 – July 2018*

- Visual identities and advertising material, both print and digital.
- Image and video editing tailored to each client.

### Friex — Stock Control Manager

*August 2018 – July 2021*

- Nestlé product inventory on SAP ERP: availability, shrinkage, goods in/out and cycle counts.

### 42 Motors — Support Technician / IT Lead

*February 2015 – July 2017*

- Company-wide ERP rollout and ticket-based user support (hardware and software).
- Basic-to-intermediate network administration, user training and security camera installation.

## Education

**Instituto Universitario Tecnológico Industrial Rodolfo Loero Arismendi** — Barquisimeto, Venezuela

- **Associate Degree in Computer Science (TSU en Informática)** · August 2026 · equivalent to a Chilean Técnico de Nivel Superior (TNS).
- **Graphic Designer** · July 2017

## Skills

**Frontend:** HTML5, CSS, Tailwind CSS, JavaScript, TypeScript, React, Vite, Astro.

**Backend:** Java 21, Spring Boot, Spring Security, JPA / Hibernate, REST API, Flyway, OpenAPI, RabbitMQ, Keycloak.

**Databases:** PostgreSQL (SQL), MongoDB.

**Testing and CI/CD:** unit and integration testing (JUnit, Testcontainers), Playwright, Postman, GitHub Actions, Docker.

**Tooling and practices:** Git and GitHub, branch-based workflow and pull requests, agile methodologies (Scrum, Kanban), API documentation with OpenAPI.

**Design:** Illustrator, Photoshop, Premiere Pro, GIMP, Blender.

**Additional:** networking, hardware maintenance, Windows / GNU/Linux / macOS.

**Languages:** Spanish (native) · English: upper-intermediate reading and comprehension, basic speaking.

## References

Available on request.