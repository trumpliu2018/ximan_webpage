<template>
  <div class="group_38 flex-col">
    <div class="section-title contact"></div>
    <div class="contact-section">
<!--       
      <div class="contact-item">
        <img
          class="contact-icon"
          referrerpolicy="no-referrer"
          src="../views/index/assets/img/SketchPng16d0665d181919fdda48ddbe647aa8003d4054ac42eed6cfe9d478ab37d13302.png"
        />
        <div class="contact-content">
          <div class="contact-label">联系电话：</div>
          <div class="contact-value">18276765363</div>
        </div>
      </div>

      <div class="contact-item">
        <img
          class="contact-icon"
          referrerpolicy="no-referrer"
          src="../views/index/assets/img/SketchPng6717dd8d4f83e9138d5578592a2bc2364917f8fe43b800b09c72822f1ccc23be.png"
        />
        <div class="contact-content">
          <div class="contact-label">地址：</div>
          <div class="contact-value">上海市闵行区1688号可视对讲凹回</div>
        </div>
      </div>

      <div class="contact-item">
        <img
          class="contact-icon"
          referrerpolicy="no-referrer"
          src="../views/index/assets/img/SketchPng89b1280114c2f514f53bf135ff000a02e03da1e4f2885c68f5f59c4f578c81b2.png"
        />
        <div class="contact-content">
          <div class="contact-label">邮箱：</div>
          <div class="contact-value">18276765363@xmsj.com</div>
        </div>
      </div> -->

      <div class="qr-text" style="color: rgba(255, 255, 255, 0.7)">您可扫描以下二维码联系我们：咨询、合作、了解更多</div>
      <!-- 二维码 -->
      <div class="contact-qr">
        <div class="qr-item">
          <img
            class="qr-image"
            referrerpolicy="no-referrer"
            src="../views/index/assets/img/zeng.png"
          />
          <div class="qr-text">曾总</div>
        </div>
        <div class="qr-item">
          <img
            class="qr-image"
            referrerpolicy="no-referrer"
            src="../views/index/assets/img/xiong.png"
          />
          <div class="qr-text">熊总</div>
        </div>
      </div>
      <!-- 添加备案信息 -->
      <div class="beian-info">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
          沪ICP备2023016828号-1
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
  };
</script>

<style scoped>
  /* 添加section-title相关样式 */
  .section-title {
    width: 12.71vw; /* 244px / 1920px */
    height: 3.54vw; /* 68px / 1920px */
    margin: 4.2vw auto 2.08vw; /* 80px auto 40px */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .section-title.contact {
    background-image: url(../views/index/assets/img/e8379734b5804637a2f886ef2459123e_mergeImage.png);
  }

  /* 响应式样式 */
  @media (min-width: 1921px) {
    .section-title {
      width: 244px;
      height: 68px;
      margin: 80px auto 40px;
    }
  }

  @media (max-width: 1400px) {
    .section-title {
      width: 15vw;
      height: 4.18vw;
      margin: 5vw auto 3vw;
    }
  }

  @media (max-width: 1200px) {
    .section-title {
      width: 18vw;
      height: 5.01vw;
      margin: 6vw auto 4vw;
    }
  }

  @media (max-width: 768px) {
    .section-title {
      width: 30vw;
      height: 5.01vw;
      margin: 6vw auto 4vw;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      width: 35vw;
      height: 9.75vw;
      margin: 8vw auto 5vw;
    }
  }

  /* 复制原来的footer相关样式 */
  .group_38 {
    width: 100%;
    background-color: rgba(22, 25, 34, 1);
    padding: 40px 0;
  }

  .contact-section {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 4vw;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .contact-icon {
    width: 24px;
    height: 24px;
  }

  .contact-content {
    /* display: flex; */
    gap: 10px;
    align-items: center;
  }

  .contact-label {
    color: rgba(255,255,255,0.5);
    font-size: 16px;
  }
  .contact-value {
    color: white;
    font-size: 16px;
  }

  .contact-qr {
    display: flex;
    justify-content: center;
    gap: 60px;
    margin-top: 20px;
  }

  .qr-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .qr-image {
    width: 120px;
    height: 120px;
  }

  .qr-text {
    color: white;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .contact-section {
      gap: 20px;
    }

    .contact-item {
      gap: 15px;
    }

    .contact-icon {
      width: 20px;
      height: 20px;
    }

    .contact-label,
    .contact-value {
      font-size: 14px;
    }

    .contact-qr {
      gap: 30px;
    }

    .qr-image {
      width: 100px;
      height: 100px;
    }

    .qr-text {
      font-size: 12px;
    }
  }

  .beian-info {
    text-align: center;
    margin-top: 2vw;
    padding-bottom: 1vw;
  }

  .beian-info a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8vw;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .beian-info a:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  /* 移动端适配 */
  @media (max-width: 768px) {
    .beian-info {
      margin-top: 4vw;
      padding-bottom: 2vw;
    }

    .beian-info a {
      font-size: 2.5vw;
    }
  }

  /* 大屏幕适配 */
  @media (min-width: 1921px) {
    .beian-info {
      margin-top: 40px;
      padding-bottom: 20px;
    }

    .beian-info a {
      font-size: 14px;
    }
  }
</style>
