import { Table } from '@mantine/core';
import { useState } from 'react';
import ramos from './Mocks/Ramos.json'

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



    return(
        <>
            <h1 className='Title'> MALLA CURRICULAR 2020 - ICINF</h1>

            <Table withTableBorder withColumnBorders>
            <Table.Thead className='header'>
            <Table.Tr>
                <Table.Th className="celda-encabezado">1er Semestre</Table.Th>
                <Table.Th className="celda-encabezado">2do Semestre</Table.Th>
                <Table.Th className="celda-encabezado">3er Semestre</Table.Th>
                <Table.Th className="celda-encabezado">4to Semestre</Table.Th>
                <Table.Th className="celda-encabezado">5to Semestre</Table.Th>
                <Table.Th className="celda-encabezado">6to Semestre</Table.Th>
                <Table.Th className="celda-encabezado">7mo Semestre</Table.Th>
                <Table.Th className="celda-encabezado">8vo Semestre</Table.Th>
                <Table.Th className="celda-encabezado">9no Semestre</Table.Th>
                <Table.Th className="celda-encabezado">10mo Semestre</Table.Th>
                <Table.Th className="celda-encabezado">11vo Semestre</Table.Th>
            </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                    <Table.Tr>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Introducción a la Matemática"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Introducción a la Matemática"))}>Introducción a la Matemática</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Introducción al Cálculo"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Introducción al Cálculo"))}>Introducción al Cálculo</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Cálculo Diferencial e Integral"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Cálculo Diferencial e Integral"))}>Cálculo Diferencial e Integral</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Cálculo Multivariable"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Cálculo Multivariable"))}>Cálculo Multivariable</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Ecuaciones Diferenciales"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Ecuaciones Diferenciales"))}>Ecuaciones Diferenciales</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Cálculo Numérico"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Cálculo Numérico"))}>Cálculo Numérico</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Arquitectura de Computadores"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Arquitectura de Computadores"))}>Arquitectura de Computadores</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Investigación Operativa"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Investigación Operativa"))}>Investigación Operativa</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Redes y Comunicaciones"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Redes y Comunicaciones"))}>Redes y Comunicaciones</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Sistemas Distribuidos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Sistemas Distribuidos"))}>Sistemas Distribuidos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Proyecto de Titulo"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Proyecto de Titulo"))}>Proyecto de Titulo</Table.Td>
                </Table.Tr>


                <Table.Tr>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Química"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Química"))}>Química</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Álgebra"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Álgebra"))}>Álgebra</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Álgebra Superior"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Álgebra Superior"))}>Álgebra Superior</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Estructuras Discretas"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Estructuras Discretas"))}>Estructuras Discretas</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Física Moderna y Ondas"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Física Moderna y Ondas"))}>Física Moderna y Ondas</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Taller de Diseño Digital"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Taller de Diseño Digital"))}>Taller de Diseño Digital</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Economía"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Economía"))}>Economía</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Sistemas Operativos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Sistemas Operativos"))}>Sistemas Operativos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inteligencia Artificial"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inteligencia Artificial"))}>Inteligencia Artificial</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Seguridad Informática"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Seguridad Informática"))}>Seguridad Informática</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Práctica Profesional"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Práctica Profesional"))}>Práctica Profesional</Table.Td>
                </Table.Tr>

                        
                <Table.Tr>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Taller de Introducción a la Ingeniería Informática"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Taller de Introducción a la Ingeniería Informática"))}>Taller de Introducción a la Ingeniería Informática</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Introducción a la Física"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Introducción a la Física"))}>Introducción a la Física</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Física Newtoniana"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Física Newtoniana"))}>Física Newtoniana</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electromagnetismo"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electromagnetismo"))}>Electromagnetismo</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Probabilidad y Estadística"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Probabilidad y Estadística"))}>Probabilidad y Estadística</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Bases de Datos Avanzadas"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Bases de Datos Avanzadas"))}>Bases de Datos Avanzadas</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Gestión de Empresas"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Gestión de Empresas"))}>Gestión de Empresas</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Ingeniería de Software"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Ingeniería de Software"))}>Ingeniería de Software</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Taller de Ingeniería de Software"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Taller de Ingeniería de Software"))}>Taller de Ingeniería de Software</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Taller de Integración Tecnológica"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Taller de Integración Tecnológica"))}>Taller de Integración Tecnológica</Table.Td>
                    <Table.Td></Table.Td>
                </Table.Tr>


                <Table.Tr>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Habilidades Comunicativas Para Ingenieros"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Habilidades Comunicativas Para Ingenieros"))}>Habilidades Comunicativas Para Ingenieros</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo AFI I"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo AFI I"))}>Electivo AFI I</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Estructuras de Datos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Estructuras de Datos"))}>Estructuras de Datos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Autómatas y Lenguajes Formales"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Autómatas y Lenguajes Formales"))}>Autómatas y Lenguajes Formales</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Análisis y Diseño de Algoritmos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Análisis y Diseño de Algoritmos"))}>Análisis y Diseño de Algoritmos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Tecnologías Móviles y Web"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Tecnologías Móviles y Web"))}>Tecnologías Móviles y Web</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Sistemas de Información"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Sistemas de Información"))}>Sistemas de Información</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Contabilidad y Costos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Contabilidad y Costos"))}>Contabilidad y Costos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Innovación y Emprendimiento en Informática"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Innovación y Emprendimiento en Informática"))}>Innovación y Emprendimiento en Informática</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Anteproyecto de Titulo"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Anteproyecto de Titulo"))}>Anteproyecto de Titulo</Table.Td>
                    <Table.Td></Table.Td>
                </Table.Tr>

                        
                <Table.Tr>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Programación"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Programación"))}>Programación</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Ciudadanía"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Ciudadanía"))}>Ciudadanía</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Taller de Programación Aplicada"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Taller de Programación Aplicada"))}>Taller de Programación Aplicada</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Modelamiento y Paradigmas de la Programación"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Modelamiento y Paradigmas de la Programación"))}>Modelamiento y Paradigmas de la Programación</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Bases de Datos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Bases de Datos"))}>Bases de Datos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Ingeniería de Sistemas"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Ingeniería de Sistemas"))}>Ingeniería de Sistemas</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Taller de Ingeniería Informática"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Taller de Ingeniería Informática"))}>Taller de Ingeniería Informática</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Formulación y Evaluación de Proyectos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Formulación y Evaluación de Proyectos"))}>Formulación y Evaluación de Proyectos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo Profesional I"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo Profesional I"))}>Electivo Profesional I</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo Profesional III"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo Profesional III"))}>Electivo Profesional III</Table.Td>
                    <Table.Td></Table.Td>
                </Table.Tr>


                <Table.Tr>
                    <Table.Td></Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Programación Orientada a Objetos"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Programación Orientada a Objetos"))}>Programación Orientada a Objetos</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inglés I"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inglés I"))}>Inglés I</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inglés II"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inglés II"))}>Inglés II</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inglés III"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inglés III"))}>Inglés III</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inglés IV"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inglés IV"))}>Inglés IV</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inglés Para Informáticos I"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inglés Para Informáticos I"))}>Inglés Para Informáticos I</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Inglés Para Informáticos II"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Inglés Para Informáticos II"))}>Inglés Para Informáticos II</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo Profesional II"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo Profesional II"))}>Electivo Profesional II</Table.Td>
                    <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo Profesional IV"))}
                        onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo Profesional IV"))}>Electivo Profesional IV</Table.Td>
                    <Table.Td></Table.Td>


                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo AFI II"))}
                                onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo AFI II"))}>Electivo AFI II</Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo AFI III"))}
                                onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo AFI III"))}>Electivo AFI III</Table.Td>
                            <Table.Td className={obtenerClase(obtenerRamoPorNombre("Práctica Intermedia"))}
                                onClick={() => manejarClickCelda(obtenerRamoPorNombre("Práctica Intermedia"))}>Práctica Intermedia</Table.Td>
                            <Table.Td className={obtenerClase(obtenerRamoPorNombre("Electivo AFI IV"))}
                                onClick={() => manejarClickCelda(obtenerRamoPorNombre("Electivo AFI IV"))}>Electivo AFI IV</Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>
                            <Table.Td></Table.Td>
                        </Table.Tr>

                </Table.Tbody>
            </Table>
        </>
    )
}