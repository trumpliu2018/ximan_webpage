<template>
  <div class="about-page">
    <Header />
    <main class="about-content">
      <div class="about-container">
        <div class="image-content">
          <img src="./assets/img/introduce.png" alt="公司介绍" class="introduce-image">
        </div>
        <div class="content-section">
          <div class="text-content">
            <p><span class="indent"></span>希曼世纪智能网络科技有限公司是一家专注于酒吧行业收银系统开发与运营的科技公司，由原八点半酒吧系统技术团队组成。他们深入了解酒吧行业的运营模式和需求，能够精准把握客户的核心需求，为客户提供定制化的解决方案。</p>
            <p><span class="indent"></span>公司拥有丰富的酒吧收银软件开发运营经验，通过多年的技术积累和业务理解，他们成功开发出一系列高效、精准、可靠的酒吧服务软件，为酒吧行业提供了全面的信息化解决方案。</p>
            <p><span class="indent"></span>希曼世纪智能网络科技有限公司始终坚持以客户为中心的服务理念，通过不断创新和完善服务，满足客户的需求。他们致力于为酒吧行业提供最优质的收银软件和服务，帮助客户提高工作效率、优化管理流程、提升服务质量。</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  },
  methods: {
  },
};
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: url('./assets/img/about_bg.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.about-content {
  flex: 1;
  padding: 4.17vw 0;
}

.about-container {
  max-width: 62.5vw;
  margin: 0 auto;
  padding: 0 1.04vw;
}

.title-section {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

.content-section {
  display: flex;
  justify-content: flex-start;
}

.text-content {
  width: 50%;
  font-family: PingFangSC, 'PingFang SC';
  font-weight: 400;
  font-size: 1.04vw;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.875vw;
  text-align: left;
  font-style: normal;
}

.indent {
  display: inline-block;
  width: 2em;
}

.text-content p {
  margin-bottom: 1.56vw;
}

.text-content p:last-child {
  margin-bottom: 0;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4.17vw;
}

.introduce-image {
  margin-top: 3vw;
  max-width: 62.5vw;
  height: auto;
}

@media (max-width: 1024px) {
  .about-container {
    max-width: 80vw;
  }

  .text-content {
    font-size: 1.8vw;
    line-height: 3.2vw;
  }
}

@media (max-width: 768px) {
  .about-content {
    padding: 5.21vw 0;
  }

  .about-container {
    max-width: 90vw;
  }

  .text-content {
    width: 100%;
    font-size: 2.4vw;
    line-height: 4vw;
  }

  .introduce-image {
    margin-top: 20vw;
    max-width: 90vw;
  }
}

@media (max-width: 480px) {
  .about-content {
    padding: 6.25vw 0;
  }

  .text-content {
    font-size: 3.5vw;
    line-height: 5.5vw;
  }
}
</style>