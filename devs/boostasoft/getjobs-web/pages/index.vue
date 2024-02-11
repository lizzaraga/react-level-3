<template>
  <UContainer class="py-24">
    <div class="grid grid-cols-8 gap-24 items-center">
      <div class="col-span-4">
        <h1 class="text-6xl font-semibold">
          Breathe new life into your career, your talent deserves the best.
        </h1>
        <p class="mt-2 mb-6 opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ipsa! Consequatur quibusdam officiis ipsam dicta et recusandae blanditiis eaque,
          quos facilis dolore cupiditate, maiores non?
        </p>
        <UButton class="font-semibold text-lg" icon="i-heroicons-arrow-long-right-solid" trailing padding="2xl" size="xl" color="black" variant="solid">
          Create your account
          
        </UButton>
      </div>
      <div class="col-span-4 flex flex-row-reverse">
        <img src="../public/images/job-search.png" alt="" srcset="">
      </div>
    </div>
  </UContainer>
  <hr class="opacity-10">
  <UContainer class="py-24">
    <div class="flex flex-col items-center justify-center text-4xl opacity-80">
      <p class="max-w-xl text-center">
        More than just a job search platform, <span class="text-primary opacity-100 font-bold">GetJobs</span> is a true partner 🤗
      </p>
      <img class="mt-3" src="../public/images/handshake.png" width="200px" alt="" srcset="">
    </div>

    <section id="formations" class="mt-20">
      <h2 class="inline-flex items-center font-bold text-sm opacity-85 text-primary  p-2 px-4 bg-gray-800 rounded-md">
        <UIcon name="i-heroicons-academic-cap text-[18px] mr-2" /> Formations
      </h2>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="max-w-xs text-3xl tracking-tight mt-6">
            Invest in your future and boost your skills
          </p>
          <span class="max-w-md  tracking-tight mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla accusantium blanditiis 
            ex error molestias, cum dolorum exercitationem qui?
          </span>
        </div>
        <img  src="../public/images/archive.png" width="200px" alt="" srcset="">
      </div>

      <div class="grid grid-cols-4 gap-6 mt-8">
        <FormationCardPreview title="ChatGPT: Useful tricks" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
        <FormationCardPreview title="How to introduce yourself in at interview ?" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
        <FormationCardPreview title="Mid-Journey: How to use it like a Pro ?" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
        <FormationCardPreview title="[Complete guide] : Master generative AI" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
      </div>
      <div class="flex justify-center mt-14">
        <UButton class="font-semibold" icon="i-heroicons-arrow-long-right-solid" trailing   color="black" variant="solid">
          More formations
        </UButton>
      </div>
    </section>
    <section id="formations" class="mt-20">
      <h2 class="inline-flex items-center font-bold text-sm opacity-85 text-primary  p-2 px-4 bg-gray-800 rounded-md">
        <UIcon name="i-heroicons-code-bracket-16-solid  text-[18px] mr-2" /> No-Code
      </h2>
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="max-w-xs text-3xl tracking-tight mt-6">
            Give life to your ideas without coding
          </p>
          <span class="max-w-md  tracking-tight mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla accusantium blanditiis 
            ex error molestias, cum dolorum exercitationem qui?
          </span>
        </div>
        <img  src="../public/images/computer-engineer.png" width="200px" alt="" srcset="">
      </div>

      <div class="grid grid-cols-2 gap-6 mt-8">
        <FormationCardPreview title="ChatGPT: Useful tricks" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
        <FormationCardPreview title="How to introduce yourself in at interview ?" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
        <FormationCardPreview title="Mid-Journey: How to use it like a Pro ?" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
        <FormationCardPreview title="[Complete guide] : Master generative AI" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque nulla"></FormationCardPreview>
      </div>
      <div class="flex justify-center mt-14">
        <UButton class="font-semibold" icon="i-heroicons-arrow-long-right-solid" trailing   color="black" variant="solid">
          Try it
        </UButton>
      </div>
    </section>
  </UContainer>
 
</template>
<script setup>
import FormationCardPreview from '../components/FormationCardPreview.vue'
</script>
