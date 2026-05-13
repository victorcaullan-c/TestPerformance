# Conclusión

- El proyecto ilustra la aplicación de pruebas de performance automatizadas sobre APIs REST utilizando k6.
- Se emplean dos estrategias de alimentación de datos:
    - **Archivos CSV** para escenarios dinámicos y escalables.
    - **Datos definidos en el script** para pruebas rápidas y controladas.
- La simulación alcanza hasta **20 usuarios virtuales** en escenarios de carga realistas.
-  Se utilizan mecanismos de validación:
    - **check:** Para verificar condiciones específicas sobre las respuestas de las APIs (códigos de estado HTTP y tiempos de respuesta).
    - **thresholds:** Para establecer criterios de éxito globales en el test (porcentaje de respuestas bajo cierto tiempo y la tasa mínima de checks exitosos).
- Cada ejecución produce un **reporte HTML** almacenado en la carpeta `reports` para facilitar el análisis de resultados.
- El almacenamiento organizado de datos y reportes permite la trazabilidad y rápida extensión de las pruebas.
- El uso de k6 promueve la detección temprana de problemas de rendimiento y contribuye a mantener la calidad del servicio expuesto.