<template>
  <div class="px-6">
      <template slot="body" slot-scope="props">
        <div>
          <a class="title">
            {{ props.item.title }}
          </a>
          <a class="close" @click="props.close">
            <i class="fa fa-fw fa-close"></i>
          </a>
          <div v-html="props.item.text"></div>
        </div>
      </template>
    </notifications>
    <h1 class="text-6xl text-center font-thin">Under construction</h1>
    <img :src="require(`../../assets/road-barrier.svg`)" class="m-auto p-2" />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
