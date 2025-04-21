import React from 'react';

function MiComponente() {
    const estilos = {
        contenedor: {
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        },
        titulo: {
            color: '#333',
            marginBottom: '10px'
        },
        parrafo: {
            color: '#666',
            fontSize: '16px'
        }
    };

    return (
        <div style={estilos.contenedor}>
            <h2 style={estilos.titulo}>Este es mi primer componente</h2>
            <p style={estilos.parrafo}>Este es un párrafo de ejemplo dentro de mi componente React.</p>
        </div>
    );
}

export default MiComponente;