<script lang="ts">
  import Chart from "chart.js/auto/auto.esm"
  import type { ChartTypeRegistry, ChartDataset, ChartOptions } from "chart.js/auto/auto.esm"
  import { onMount } from "svelte";

  // Props
  export let type: keyof ChartTypeRegistry
  export let labels: Array<string>
  export let datasets: Array<ChartDataset>
  export let options: any

  // Bindings
  let chartCanvas: HTMLCanvasElement
  let ctx: CanvasRenderingContext2D

  onMount(async () => {
    ctx = chartCanvas.getContext('2d') as CanvasRenderingContext2D

    new Chart(ctx, {
      type: type,
      data: {
        labels: labels,
        datasets: datasets
      },
      options: options
    })
  })
</script>

<canvas bind:this="{chartCanvas}"></canvas>
