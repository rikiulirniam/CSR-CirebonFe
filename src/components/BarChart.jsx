import React from "react";
import Chart from "react-apexcharts";

export default function Bar({ text }) {
  const chartConfig = {
    series: [
      {
        data: [
          { x: "Sosial", y: 1000000 },
          { x: "Lingkungan", y: 800000 },
          { x: "Kesehatan", y: 1200000 },
          { x: "Pendidikan", y: 1100000 },
          { x: "Pendidikan", y: 1100000 },
          { x: "Infrastruktur dan lingkungan", y: 1400000 },
          { x: "Infrastruktur dan lingkungan", y: 1400000 },
          { x: "Sarana dan prasarana keagamaan", y: 1000000 },
          { x: "Lainnya", y: 600000 },
        ],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 500,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true, // Untuk warna yang berbeda di setiap bar
          barHeight: "90%", // Sesuaikan tinggi bar
        },
      },
      colors: [
        "#28A0F6",
        "#4E5BA6",
        "#7A5AF8",
        "#EE46BC",
        "#B42121",
        "#F95016",
        "#FAC415",
        "#66C61C",
        "#16B364",
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return (
            opt.w.globals.labels[opt.dataPointIndex] +
            " : Rp. " +
            val.toLocaleString()
          );
        },
        style: {
          colors: ["#fff"], // Warna teks dalam bar
          fontSize: "12px",
        },
      },
      xaxis: {
        labels: {
          show: false, // Menyembunyikan label di sumbu x
        },
        categories: [
          "Sosial",
          "Lingkungan",
          "Kesehatan",
          "Pendidikan",
          "Infrastruktur dan lingkungan",
          "Sarana dan prasarana keagamaan",
          "Sarana dan prasarana keagamaan",
          "Sarana dan prasarana keagamaan",
          "Lainnya",
        ],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false, // Menyembunyikan grid
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-start space-x-4">
      <p className="text-inter text-[1.3em] font-bold w-1/1 ps-10 pt-5">
        {text}
      </p>
      <Chart
        options={chartConfig.options}
        series={chartConfig.series}
        type="bar"
        height="400"
        width="500"
      />
    </div>
  );
}
