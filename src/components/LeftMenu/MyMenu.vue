<script setup lang="ts" name="MyMenu">
import routes from "@/router/routes";
import { menuState } from "@/store/states";

const store = menuState();

const { isCollapse } = storeToRefs(store);

function changeState(state: boolean) {
  store.changeState(state);
}

const list = computed(() => {
  return routes[1].children;
});

const state = ref(false);

onMounted(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");

  menuToggle?.addEventListener("click", () => {
    navigation?.classList.toggle("open");
    state.value = !state.value;
  });

  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      listItems.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

function getColor() {
  var str = "#";
  var arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  for (var i = 0; i < 6; i++) {
    var num: number = parseInt(String(Math.random() * 16));
    str += arr[num];
  }
  return str;
}
</script>

<template>
  <div class="container" :style="{ width: state ? '300px' : '75px' }">
    <div class="navigation">
      <div class="menu-toggle"></div>
      <ul class="list">
        <!-- <li class="list-item active" :style="{ '--color': getColor() }">
          <a href="#">
            <span class="icon">
              <Menu />
            </span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="list-item" :style="{ '--color': getColor() }">
          <a>
            <span class="icon"><Menu /></span>
            <span class="text">Home</span>
          </a>
        </li>
        <li class="list-item" :style="{ '--color': getColor() }">
          <a>
            <span class="icon"><Menu /></span>
            <span class="text">Home</span>
          </a>
        </li> -->
        <li
          class="list-item"
          v-for="item in list"
          :key="item.path"
          :style="{ '--color': getColor() }"
        >
          <a :href="'http://127.0.0.1:5173/#' + item.path">
            <span class="icon"><Menu /></span>
            <span class="text">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  // margin: 0;
  // padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #3d4152;
  transition: 0.5s;
}

.navigation {
  position: fixed;
  // inset: 20px 0 20px 20px;
  inset: 0;
  width: 75px;
  min-height: 500px;
  background: #fff;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation.open {
  width: 250px;
}

.navigation .menu-toggle {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.navigation .menu-toggle::before {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(-8px);
  transition: 0.5s;
}

.navigation.open .menu-toggle::before {
  transform: translateY(0) rotate(45deg);
}

.navigation .menu-toggle::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(8px);
  transition: 0.5s;
  box-shadow: 0 -8px 0 #333;
}

.navigation.open .menu-toggle::after {
  transform: translateY(0) rotate(-45deg);
  box-shadow: none;
}

.navigation ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.navigation ul li {
  list-style: none;
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.5s;
}

.navigation ul li.active {
  transform: translateX(30px);
}

.navigation.open ul li.active {
  transform: translateX(10);
}

.navigation ul li a {
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 55px;
  height: 55px;
  line-height: 60px;
  color: #222;
  border-radius: 10px;
  font-size: 1.75rem;
  transition: 0.5s;
}

.navigation ul li.active a .icon {
  color: #fff;
  background: var(--color);
}

.navigation ul li a .icon::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: var(--color);
  filter: blur(8px);
  opacity: 0;
  transition: 0.5s;
}

.navigation ul li.active a .icon::before {
  opacity: 0.5;
}

.navigation ul li a .text {
  position: relative;
  padding: 0 15px;
  height: 60px;
  display: flex;
  align-items: center;
  color: #333;
  opacity: 0;
  visibility: hidden;
  transition: 0.5px;
}

.navigation.open ul li a .text {
  opacity: 1;
  visibility: visible;
}

.navigation ul li.active a .text {
  color: var(--color);
}
</style>
