# Especificación de Testing

## 1. Aplicación

Se seleccionó una Single Page Application (SPA) desarrollada
exclusivamente para esta actividad.

La aplicación permite:

- iniciar sesión;
- buscar usuarios;
- registrar nuevos usuarios;
- cerrar sesión.

La aplicación utiliza JavaScript para modificar dinámicamente
el contenido del DOM sin recargar la página.

## 2. Flujos críticos

### TC-01 - Login exitoso

Dado un usuario con credenciales válidas:

- correo: admin@test.com
- contraseña: Password123

Al presionar "Ingresar", debe mostrarse el panel principal.

### TC-02 - Login incorrecto

Al utilizar credenciales incorrectas debe mostrarse
un mensaje de error.

### TC-03 - Búsqueda

El usuario autenticado debe poder buscar un usuario
por nombre.

El resultado esperado debe aparecer dinámicamente
en la pantalla.

### TC-04 - Alta de usuario

El usuario autenticado debe poder registrar un nuevo usuario.

Al finalizar debe aparecer el mensaje:

"Usuario registrado correctamente".

## 3. Criterios de aceptación

Todos los elementos necesarios deben estar visibles.

Las acciones deben completarse sin errores.

Los mensajes correspondientes deben aparecer.

Los tests deben ejecutarse correctamente en Playwright.

## 4. Restricciones técnicas

Navegadores:

- Chromium
- Firefox

Viewport:

1280 x 720

Datos de prueba:

admin@test.com
Password123

## 5. Evidencia

Se utilizará:

- reporte HTML;
- screenshots en caso de error;
- video en caso de error;
- Trace Viewer.