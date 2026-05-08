import http from 'k6/http';
import {sleep,check} from 'k6';
import {htmlReport} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { SharedArray } from 'k6/data';
import { parse } from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

// Cargar CSV una sola vez
const data = new SharedArray('datos', function () {
  return parse(open('./data.csv'), { header: true }).data;
});

const baseUrl='https://fakestoreapi.com/auth/login';

export const options = {
   vus: 5,
   duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<500'],
        checks: ['rate > 0.95']
    },
};

export default function () {
  const row = data[__VU % data.length];
    // Realiza una petición POST al API de pizzas con los parámetros especificados
    const response = http.post(baseUrl,
        JSON.stringify({
            "username": row.user,
            "password": row.password,
        }), {
            headers: {
               // 'Authorization': `Bearer ${Token}`,
                'Content-Type': 'application/json',
            },
        });

    // Ejecuta validaciones sobre la respuesta HTTP
    // Verifica que el status sea 201 y que el tiempo de respuesta sea menor a 600ms
    const checks = check(response, {
    'validacion de status 201': (r) => r.status === 201,
    'validacion de tiempo de respuesta < 600ms': (r) => r.timings.duration < 600,
    });

// Registra en consola si las validaciones pasaron o fallaron
if(!checks){
    console.error(`VU ${__VU} at iteration ${__ITER} failed checks: ${JSON.stringify(checks)}`);
}
else{
    console.log(`VU ${__VU} at iteration ${__ITER} passed checks: ${JSON.stringify(checks)}`);
    console.log(`VU ${__VU} at iteration ${__ITER} STATUS ${response.status}  tiempo ${response.timings.duration} ms`);
}
 // Pausa de 1 segundo entre iteraciones para simular el tiempo de espera del usuario
    sleep(1);



}
//metodo que crea un reporte html
 export function handleSummary(data){
    console.log('Generando el reporte HTML...');
    return  {
    "moduloCSV.html": htmlReport(data),
    };
    }