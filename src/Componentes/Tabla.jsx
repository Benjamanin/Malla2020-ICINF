import { Table } from '@mantine/core';
import { useState } from 'react';
import ramos from './Mocks/Ramos.json';

export default function Tabla() {
  const [ramoSeleccionado, setRamoSeleccionado] = useState(null);

  const manejarClickCelda = (subject) => {
    setRamoSeleccionado(subject);
  };

  const obtenerClase = (subject) => {
    if (!subject) return 'table-cell';
    if (!ramoSeleccionado) return 'table-cell';
    if (ramoSeleccionado.name === subject.name) return 'table-cell current';
    if (ramoSeleccionado.next.includes(subject.name)) return 'table-cell next';
    if (ramoSeleccionado.prev.includes(subject.name)) return 'table-cell prev';
    return 'table-cell';
  };

  const obtenerRamoPorNombre = (name) => {
    return ramos.subjects.find(subject => subject.name === name) || null;
  };

  const ramosPorSemestre = ramos.subjects.reduce((acc, subject) => {
    if (!acc[subject.semester]) {
      acc[subject.semester] = [];
    }
    acc[subject.semester].push(subject);
    return acc;
  }, {});

  const maxRamos = Math.max(...Object.values(ramosPorSemestre).map(sem => sem.length));

  return (
    <>
      <h1 className='Title'> MALLA CURRICULAR 2020 - ICINF</h1>
      <Table withTableBorder withColumnBorders>
        <Table.Thead className='header'>
          <Table.Tr>
            {Object.keys(ramosPorSemestre).map(semestre => (
              <Table.Th key={semestre} className="celda-encabezado">{semestre} Semestre</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Array.from({ length: maxRamos }).map((_, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {Object.keys(ramosPorSemestre).map(semestre => (
                <Table.Td
                  key={semestre}
                  className={obtenerClase(ramosPorSemestre[semestre][rowIndex])}
                  onClick={() => ramosPorSemestre[semestre][rowIndex] && manejarClickCelda(ramosPorSemestre[semestre][rowIndex])}
                >
                  {ramosPorSemestre[semestre][rowIndex] ? ramosPorSemestre[semestre][rowIndex].name : ''}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}