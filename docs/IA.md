# QA Adaptativo e Inteligencia Artificial

## QA adaptativo

El QA adaptativo busca que las pruebas puedan mantenerse
frente a cambios en la interfaz.

Las SPA presentan dificultades porque el contenido del DOM
puede modificarse dinámicamente sin recargar la página.

Por ejemplo, un elemento puede aparecer después de una
acción realizada por el usuario.

Los selectores basados en estructuras HTML muy específicas
pueden romperse cuando cambia la interfaz.

## Playwright + LLM

Un modelo de lenguaje puede utilizarse como asistente para:

- generar casos de prueba;
- analizar fallos;
- proponer nuevos selectores;
- adaptar casos existentes;
- detectar escenarios que no fueron contemplados.

Por ejemplo, si un test utilizaba:

getByRole("button", { name: "Ingresar" })

y la aplicación cambia el texto del botón a:

"Acceder"

un LLM podría analizar el DOM actualizado y proponer:

getByRole("button", { name: "Acceder" })

La modificación debe ser revisada por una persona antes
de incorporarse al código definitivo.

## Ventajas

La combinación de Playwright y un LLM puede reducir el
tiempo necesario para mantener una suite de pruebas cuando
la interfaz cambia.

La IA funciona como herramienta de asistencia y no reemplaza
la validación del equipo de QA.