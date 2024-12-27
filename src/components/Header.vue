<template>
  <header class="nav-header">
    <div class="nav-container">
      <div class="nav-left">
        <div class="nav-brand">
          <img
            class="nav-logo"
            referrerpolicy="no-referrer"
            src="@/views/index/assets/img/SketchPng253939487cc69e2d3210583867c4555f11ab8b7fcd8e2a850ec0171fe7c75e0f.png"
          />
          <img
            class="nav-logo-text"
            referrerpolicy="no-referrer"
            src="@/views/index/assets/img/SketchPngdd49a075fe01db3c84fef761c74d6d1e6f6fe799c41ef687ad3caa870451cec2.png"
          />
        </div>

        <nav class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link
            to="/index"
            class="nav-item"
            :class="{ active: $route.path === '/index' }"
          >
            首页
            <div v-if="$route.path === '/index'" class="nav-indicator"></div>
          </router-link>

          <router-link
            to="/about"
            class="nav-item"
            :class="{
              inactive: $route.path !== '/about',
              active: $route.path === '/about',
            }"
          >
            关于我们
            <div v-if="$route.path === '/about'" class="nav-indicator"></div>
          </router-link>
        </nav>
      </div>

      <div class="nav-burger" @click="toggleMenu">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
    watch: {
      $route() {
        // 路由变化时关闭菜单
        this.closeMenu();
      },
    },
  };
</script>

<style scoped>
  /* 复制原来的header相关样式 */
  .nav-header {
    background-color: rgba(22, 25, 34, 1);
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .nav-container {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 0 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 80px;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-logo {
    width: 53px;
    height: 36px;
  }

  .nav-logo-text {
    width: 159px;
    height: 40px;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .nav-item {
    font-size: 20px;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    text-decoration: none;
    position: relative;
    padding-bottom: 8px;
  }

  .nav-item.inactive {
    color: rgba(255, 255, 255, 0.5);
  }

  .nav-item.active .nav-indicator {
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    background-color: rgba(7, 90, 255, 1);
    border-radius: 4px;
  }

  .nav-burger {
    display: none;
    width: 24px;
    height: 24px;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    padding: 2px;
  }

  .burger-line {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease;
  }

  @media (min-width: 1921px) {
    .nav-container {
      padding: 0;
      margin-left: 360px;
      margin-right: 360px;
    }
  }

  @media (max-width: 1400px) {
    .nav-container {
      padding: 0 4vw;
    }

    .nav-menu {
      gap: 40px;
    }
  }

  @media (max-width: 1200px) {
    .nav-container {
      padding: 0 6vw;
    }

    .nav-logo {
      width: 45px;
      height: 30px;
    }

    .nav-logo-text {
      width: 135px;
      height: 34px;
    }

    .nav-menu {
      gap: 30px;
    }

    .nav-item {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    .nav-header {
      height: 60px;
    }

    .nav-container {
      padding: 0 4vw;
    }

    .nav-logo {
      width: 40px;
      height: 27px;
    }

    .nav-logo-text {
      width: 120px;
      height: 30px;
    }

    .nav-left {
      gap: 24px;
    }

    .nav-menu {
      display: none;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: rgba(22, 25, 34, 0.95);
      flex-direction: column;
      padding: 20px 0;
      gap: 20px;
      align-items: flex-start;
      padding-left: 4vw;
    }

    .nav-menu.active {
      display: flex;
    }

    .nav-burger {
      display: flex;
    }

    .nav-indicator {
      width: 40px;
      margin: 4px auto 0;
    }

    .nav-item {
      font-size: 16px;
      padding: 10px 0;
    }

    .nav-item.active .nav-indicator {
      position: absolute;
      bottom: -4px;
      width: 40px;
    }

    .nav-item {
      padding-bottom: 4px;
    }

    .nav-item.active .nav-indicator {
      bottom: -4px;
    }
  }
</style>
