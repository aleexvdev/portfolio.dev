<script lang="ts">
  import { onDestroy } from "svelte";

  let formattedTime: string;

  // Función para actualizar el tiempo
  const updateTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  // Ejecutar updateTime cada segundo
  const interval = setInterval(updateTime, 1000);

  // Inicializar el tiempo al cargar el componente
  updateTime();

  // Limpiar el intervalo cuando el componente se destruya
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<span class="text-[#22C55E] text-center text-nowrap font-bold text-3xl lg:text-4xl w-max">{formattedTime}</span>
