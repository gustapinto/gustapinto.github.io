<script lang="ts">
  import Chart from "./templates/Chart.svelte"
</script>

<div class="w-[95vw] md:w-[55vw] mx-auto">
  <div class="w-100 sm:grid sm:grid-cols-2 gap-x-8">
    <div class="grid place-items-center mb-8 sm:my-0">
      <div>
        <p class="my-0 sm:my-4 text-white">
          Um jardineiro de software que vive cada amanhã melhor que o ontem, buscando novos conhecimentos e experiências
        </p>

        <p class="my-0 sm:my-4 text-white">
          Minhas ferramentas favoritas para o cultivo de softwares e arquiteturas são: <strong>Linux + Docker</strong>, uma combinação que me apaixonou a primeira vista, <strong>Go</strong>, a linguagem que mais uso para estruturar backends e microsserviços , e <strong>Python</strong>, para a extração e transformação de dados
        </p>
      </div>
    </div>

    <div class="block text-white">
      <Chart
        type={'radar'}
        labels={['Python', 'Go', 'Linux', 'PHP', 'Docker', 'SQL', 'Javascript']}
        datasets={[
          {
            label: '',
            data: [90, 75, 60, 60, 50, 60, 40],
            fill: true,
            backgroundColor: 'rgba(246, 212, 40, 0.2)',
            borderColor: 'rgb(246, 212, 40)',
            pointBackgroundColor: 'rgb(246, 212, 40)',
          }
        ]}
        options={{
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            r: {
              beginAtZero: true,
              ticks: {
                display: false,
              }
            }
          }
        }}
      />
    </div>
  </div>
</div>
