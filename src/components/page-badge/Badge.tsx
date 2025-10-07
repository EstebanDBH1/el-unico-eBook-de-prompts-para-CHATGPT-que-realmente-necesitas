import React from 'react';

/**
 * Componente que muestra el conteo de personas con un estilo de borde rojo brillante.
 * Diseñado para ser completamente responsive y centrado.
 */
export const BadgeConteo: React.FC = () => {
  return (
    // Contenedor principal para el componente.
    // max-w-sm centra el componente dentro de un contenedor más grande si lo hay.
    // mx-auto asegura el centrado horizontal.
    <div className="w-full max-w-sm mx-auto">
      {/* Badge de Estado
        - flex items-center justify-center: Asegura que el contenido interno esté centrado.
        - gap-2: Espacio entre el icono y el texto.
        - border border-red-800: Borde rojo oscuro.
        - text-red-100: Color del texto.
        - text-sm sm:text-base: Pequeño por defecto (móvil) y ligeramente más grande en pantallas 'sm' o superiores.
        - py-2 px-4 sm:px-6: Relleno adaptativo.
        - rounded-full: Esquinas redondeadas completas.
      */}
      <div
        className="
          flex 
          items-center 
          justify-center
          gap-2 
          border 
          border-red-800 
          text-red-100 
          text-sm sm:text-base 
          font-medium
          py-2 
          px-4 sm:px-6 
          rounded-full 
          shadow-2xl 
          shadow-red-900/40
          bg-transparent
          backdrop-blur-sm
          w-full
        "
      >
        {/* Icono de Estrella/Brillo (SVG)
          - w-4 h-4 sm:w-5 sm:h-5: Icono más pequeño en móvil.
        */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 sm:w-5 sm:h-5" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12 1.5l2.25 6.75h7.125l-5.75 4.19 2.25 6.75-5.75-4.19-5.75 4.19 2.25-6.75-5.75-4.19h7.125z"/>
        </svg>

        <span>Más de 1,000 personas ya lo tienen</span>
      </div>
    </div>
  );
}