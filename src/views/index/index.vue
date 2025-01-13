<template>
  <div class="page flex-col">
    <Header />
    <div class="group_59 flex-col">
      <div class="group_2 flex-col">
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb895987c19ffc3e559e93066f42964b34addb7a4f4ea542f590c8b6c9ab801a4.png"
        />
        <span class="text_3">全场景专业酒店管理平台&nbsp;&nbsp;提供智能化、数字化解决方案</span>
        <!-- <div class="section_1 flex-row">
          <div class="image-text_38 flex-row justify-between">
            <img
              class="image_4"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng09a9867468919ded31ab7c08bce0935fc2d5be63a17e28d65c17798e63bd6154.png"
            />
            <span class="text-group_1">在线咨询</span>
          </div>
        </div> -->
        <img
          class="image_5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngac392c9846e8bd8c510e25a31cb9a5aa9e986fcb185c871aa93f7c2b45e16e09.png"
        />
      </div>
      <div class="group_3 flex-col">
        <div class="section-title advantage"></div>
        
        <div class="box_advance flex-col justify-end">
          <div class="group_4 flex-col">
              <div class="group_5 flex-col">
                <div class="text-wrapper_1">
                  <div class="advantage-section">
                    <span class="advance_title">系统优势</span>
                    <span class="paragraph_1">
                      <span>专业系统功能完备，管理界面简单明晰</span>
                      <span>手机端直接下单、优惠、查单等</span>
                      <span>高层管理人员实时查看门店经营</span>
                    </span>
                  </div>
                  <div class="advantage-section">
                    <span class="advance_title">其他优势</span>
                    <span class="paragraph_1">
                      <span>专开发团队经验丰富、技术卓越</span>
                      <span>人工客服24小时在线，售后无忧</span>
                      <span>系统版本维护更新，保障系统与时俱进</span>
                      <span>酒吧定制化开发功能</span>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
        <div class="advance_items flex-col justify-end"> 
          <div class="box_53 flex-row justify-between">
            <div class="image-text_39 flex-col justify-between">
              <img
                class="image_6"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng148e2a44605b3b73db3ca3398e69d5c893c9a88df96fd4a54b6cb2cb3eb55bdb.png"
              />
              <span class="text-group_2">精准的成本控制</span>
            </div>
            <div class="image-text_40 flex-col justify-between">
              <img
                class="image_7"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngb7ba686d591483a0340a14716395c41a07367067534194923c19c28b6d351857.png"
              />
              <span class="text-group_3">完善的财务管理</span>
            </div>
          </div>
          <div class="box_54 flex-row justify-between">
            <div class="image-text_41 flex-col justify-between">
              <img
                class="image_8"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngf67e2e054213b203cd6a31b9df9b6ebce5bf63b48ae0742ad9256c7923a5063c.png"
              />
              <span class="text-group_4">灵活的会员方案</span>
            </div>
            <div class="image-text_middle flex-col justify-between">
              <img
                class="image_8"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng9ebf4e1824fc32e7a26e08f055ea019b463fae944eb43b73a7eafb4550330f1c.png"
              />
              <span class="text-group_4">便捷的网络支付</span>
            </div>
            <div class="image-text_42 flex-col justify-between">
              <img
                class="image_8"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng1995a4b8286753a8eaf7e400d422f4d74b1c274c9925c12ca1b7d82f4d21b172.png"
              />
              <span class="text-group_5">丰富的策略支持</span>
            </div>
          </div>
        </div>
        <div class="advance_items_mobile">
          <div class="top-row">
            <div class="advance_item" v-for="(item, index) in advance_items_mobile.slice(0, 2)" :key="index">
              <img :src="item.src" />
              <span>{{ item.title }}</span>
            </div>
          </div>
          <div class="bottom-row">
            <div class="advance_item" v-for="(item, index) in advance_items_mobile.slice(2, 5)" :key="index + 2">
              <img :src="item.src" />
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        
      </div>
      <div class="group_product flex-col">
        <div class="section-title product"></div>
        <div class="product-container flex-row justify-between">
          <div class="product-item flex-row">
            <div
              class="image-text_6 flex-col"
              :style="{ background: item.lanhuBg0 }"
              v-for="(item, index) in loopData0"
              :key="index"
            >
              <!-- <div v-if="item.slot3 === 3" class="group_7 flex-row">
                <div class="image-text_43 flex-col justify-between">
                  <img
                    class="label_5"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng5bc8a246fddc6470be5dfe5eaec4c2165973ad76c22f8f7badc0c13dc9468b75.png"
                  />
                  <div class="text-group_31 flex-col justify-between">
                    <span class="text_7">营销手机端</span>
                    <span class="text_8">在线赠送、业绩查询、现抽查询等</span>
                  </div>
                </div>
              </div> -->
              <img
                v-if="item.slot2 === 2"
                class="image_11"
                referrerpolicy="no-referrer"
                :src="item.specialSlot2.lanhuimage0"
              />
              <span v-if="item.slot1 === 1" class="text-group_7" v-html="item.specialSlot1.lanhutext0"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="group_8 flex-col">
        <div class="section-title solution"></div>
        <div class="solution-container">
          <div class="solution-tags">
            <!-- 左侧标签 -->
            <div class="tags-left">
              <div class="tag-item left-radius blue">
                <div class="dot"></div>
                注册大礼包
              </div>
              <div class="tag-item left-radius pink" style="right:100%">
                <div class="dot"></div>
                在线订座
              </div>
              <div class="tag-item left-radius pink" style="right:10%">
                <div class="dot"></div>
                线上开台
              </div>
              <div class="tag-item left-radius pink" style="right:160%">
                <div class="dot"></div>
                扫码点单
              </div>
              <div class="tag-item left-radius blue" style="right:70%">
                <div class="dot"></div>
                存取酒
              </div>
              <div class="tag-item left-radius blue" style="right:20%">
                <div class="dot"></div>
                叫号大屏
              </div>
              <div class="tag-item left-radius blue" style="right:150%">
                <div class="dot"></div>
                客户营销
              </div>
              <div class="tag-item left-radius pink" style="right:18%">
                <div class="dot"></div>
                业绩查询
              </div>
              <div class="tag-item left-radius blue" style="right:-120%">
                <div class="dot"></div>
                联动企微
              </div>
            </div>
            
            <!-- 右侧标签 -->
            <div class="tags-right" style="margin-top: -2vw;">
              <div class="tag-item right-radius pink" style="left: 60%;">
                <div class="dot"></div>
                会员价
              </div>
              <div class="tag-item right-radius blue" style="left: -25%;">
                <div class="dot"></div>
                客户标签
              </div>
              <div class="tag-item right-radius blue" style="left: 10%;">
                <div class="dot"></div>
                生日提醒
                <span class="tag-desc">筛选即将生日的客户，发送祝福或卡券等；唤醒客户</span>
              </div>
              <div class="tag-item right-radius blue" style="left: 150%; margin-top: 0.5vw;">
                <div class="dot"></div>
                卡券核销
              </div>
              <div class="tag-item right-radius blue" style="left: 40%;">
                <div class="dot"></div>
                数据报表
              </div>
              <div class="tag-item right-radius pink" style="left: 110%;">
                <div class="dot"></div>
                线上充值赠送
              </div>
              <div class="tag-item right-radius pink" style="left: 40%;">
                <div class="dot"></div>
                定时任务
                <span class="tag-desc">门店创建定时任务，到指定时间后，系统自动下发任务到员工企业微信</span>
              </div>
              <div class="tag-item right-radius blue" style="left: 100%; margin-top: 0.5vw;">
                <div class="dot"></div>
                日志管理
              </div>
              <div class="tag-item right-radius pink" style="left: -15%;">
                <div class="dot"></div>
                进销存
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="group_31 flex-col">
        <div class="section-title hardware"></div>
        <div class="grid_11 flex-row">
          <div class="hd_item">
            <div class="hd_left">
              <span class="title_hd">一体机</span>
              <span class="desc_hd">外观美观，节省空间</span>
            </div>
            <div class="hd_right">
              <img
              class="image_hd"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng925610d465c48e3d7d8c654f9461dc27d51cee2b0496ab556e3068d909ac892c.png"
            />
            </div>
          </div>
          <div class="hd_item">
            <div class="hd_left">
              <span class="title_hd">台式机</span>
              <span class="desc_hd">X86架构运行Win10系统的PC机，兼容现有设备</span>
            </div>
            <div class="hd_right">
              <img
              class="image_hd"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng8719128cddfb44ac8595662f4f820cbb75f9ead32ce71bec96eba2048c3da506.png"
            />
            </div>
          </div>
          <div class="hd_item">
            <div class="hd_left">
              <span class="title_hd">出品打印机</span>
              <span class="desc_hd">不管是针式还是热敏，我们统统支持打印纸宽度80充满，即插即用</span>
            </div>
            <div class="hd_right">
              <img
              class="image_hd"
              referrerpolicy="no-referrer"
              src="./assets/img/printer.png"
            />
            </div>
          </div>
          <div class="hd_item">
            <div class="hd_left">
              <span class="title_hd">安卓平板</span>
              <span class="desc_hd">方便快捷，提升门店形象</span>
            </div>
            <div clas="hd_right">
              <img
              class="image_hd"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngf3b2e874ac9f85cb48ee89fea3b4926b30e69cf4cebc57703fbbf83b3312ae7f.png"
            />
            </div>
          </div>
        </div>
      </div>
      <div class="group_36 flex-col">
        <div class="section-title partner"></div>
        <div class="logos">
          <div class="logo-item" v-for="(item, index) in partnerLogos" :key="index">
            <img
              class="logo-item-img"
              referrerpolicy="no-referrer"
              :src="item.src"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
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
    return {
      loopData0: [
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:

              require('./assets/img/houtaiguanli.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '后台管理' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              require('./assets/img/zike.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '咨客系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/paddd.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: 'iPad点单' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/weixin.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '微信扫码点单' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/shouyin.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '收银系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/huiyuan.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '会员系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/cangku.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '仓库系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/cunjiu.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '存酒系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/baobiao.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '报表系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/gadmin.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '线上管理平台' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/dzshouji.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '店长手机端' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/zikeshouji.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '咨客手机端' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/yxshouji.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '营销手机端' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0: require('./assets/img/fwyshouij.png')
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '服务员手机端' },
          slot1: 1
        },
        // { lanhuBg0: 'transparent' }
      ],
      partnerLogos: [
        {
          type: 'image',
          class: 'image-wrapper_1',
          src: require('./assets/img/SketchPng728b5e5cba5c5e06838a20da92c8a37d77d37c68c47f070b6c599069275439c1.png'),
          imageClass: 'image_16'
        },
        {
          type: 'image',
          class: 'image-wrapper_2',
          src: require('./assets/img/SketchPngc6b6bf1dbaa3b926f6d25c25096dc64110be2aa272ce736988408340b330a2ed.png'),
          imageClass: 'image_17'
        },
        {
          type: 'image',
          class: 'image-wrapper_3',
          src: require('./assets/img/SketchPng527fcf8fae840207bf3bfc9e99e3a108432011f02b93bf1b86d719c95baa6537.png'),
          imageClass: 'image_18'
        },
        //future
        {
          type: 'image',
          class: 'image-wrapper_3',
          src: require('./assets/img/logo_future.png'),
          imageClass: 'image_18'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_zuanshi.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/SketchPngda9347a11a3faa7e64b35092e9c62d8a9ad1aad92abbe4882d078407783645f5.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_5',
          src: require('./assets/img/SketchPng6d2a22ef41e61aed89f52fc3170e113a366e4f207858ba5275e8ae0d3358c6d1.png'),
          imageClass: 'image_20'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_space.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_muse.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_cusion.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_true_color.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_clubbm.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_bailemen.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_uclub.png'),
          imageClass: 'image_19'
        },
        {
          type: 'image',
          class: 'image-wrapper_4',
          src: require('./assets/img/logo_sos.png'),
          imageClass: 'image_19'
        },
      ],
      advance_items_mobile: [
        {
          src: require('./assets/img/SketchPng148e2a44605b3b73db3ca3398e69d5c893c9a88df96fd4a54b6cb2cb3eb55bdb.png'),
          title: '精准的成本控制'
        },
        {
          src: require('./assets/img/SketchPngb7ba686d591483a0340a14716395c41a07367067534194923c19c28b6d351857.png'),
          title: '完善的财务管理'
        },
        {
          src: require('./assets/img/SketchPngf67e2e054213b203cd6a31b9df9b6ebce5bf63b48ae0742ad9256c7923a5063c.png'),
          title: '灵活的会员方案'
        },
        {
          src: require('./assets/img/SketchPng9ebf4e1824fc32e7a26e08f055ea019b463fae944eb43b73a7eafb4550330f1c.png'),
          title: '便捷的网络支付'
        }, 
        {
          src: require('./assets/img/SketchPng1995a4b8286753a8eaf7e400d422f4d74b1c274c9925c12ca1b7d82f4d21b172.png'),
          title: '丰富的策略支持'
        },

      ],
      constants: {}
    };
  },
  methods: {
  },
  watch: {
    $route() {
      // 路由变化时关闭菜单
      this.closeMenu();
    }
  }
};
</script>
<style scoped lang="css" src="./assets/index.css" />