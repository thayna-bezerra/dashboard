import Image from "next/image";

export default function Home() {
  return (
    <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 dark:text-gray-200">Dark Mode with Tailwind</h1>
    <p class="mt-4 dark:text-gray-300">
      No modo claro, o texto é preto e o fundo é branco. No modo escuro, o texto é branco e o fundo é cinza escuro.
    </p>
  </div>
  );
}
