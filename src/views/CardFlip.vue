<script setup lang="ts" name="CardFlip">
import {} from "vue";
</script>

<template>
  <main>
    <div class="card_1">
      <div class="card-side front"></div>
      <div class="card-side back"></div>
    </div>
    <div class="card_2">
      <div class="card-side front"></div>
      <div class="card-side back"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  height: 100%;
  display: flex;
}
.card_1 {
  position: relative;
  height: 40rem;
  width: 400px;
  margin: 4rem auto;
  perspective: 60rem;

  .front {
    background-image: url(@/assets/images/anime_1.jpg);
    background-size: cover;
  }
  .back {
    transform: rotateY(-180deg);
    background-image: url(@/assets/images/anime_2.jpg);
    background-size: cover;
  }
  &:hover {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }
}
.card_2 {
  position: relative;
  height: 40rem;
  width: 400px;
  margin: 4rem auto;
  perspective: 60rem;

  .front {
    background-image: url(@/assets/images/anime_3.jpg);
    background-size: cover;
  }
  .back {
    transform: rotateY(-180deg);
    background-image: url(@/assets/images/anime_4.jpg);
    background-size: cover;
  }
  &:hover {
    .front {
      transform: rotateY(180deg);
    }
    .back {
      transform: rotateY(0deg);
    }
  }
}
.card-side {
  height: 100%;
  border-radius: 15px;
  width: 100%;
  padding: 2rem;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transition: all 0.8s ease;
}
</style>
