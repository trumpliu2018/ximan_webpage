<template>
  <div class="page flex-col">
    <header class="nav-header">
      <div class="nav-container">
        <div class="nav-brand">
          <img
            class="nav-logo"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng253939487cc69e2d3210583867c4555f11ab8b7fcd8e2a850ec0171fe7c75e0f.png"
          />
          <img
            class="nav-logo-text"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngdd49a075fe01db3c84fef761c74d6d1e6f6fe799c41ef687ad3caa870451cec2.png"
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
            :class="{ inactive: $route.path !== '/about', active: $route.path === '/about' }"
          >
            关于我们
            <div v-if="$route.path === '/about'" class="nav-indicator"></div>
          </router-link>
        </nav>

        <div class="nav-burger" @click="toggleMenu">
          <div class="burger-line"></div>
          <div class="burger-line"></div>
          <div class="burger-line"></div>
        </div>
      </div>
    </header>
    <div class="box_1 flex-col">
      <div class="group_57 flex-row">
        <img
          class="image_1"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng253939487cc69e2d3210583867c4555f11ab8b7fcd8e2a850ec0171fe7c75e0f.png"
        />
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngdd49a075fe01db3c84fef761c74d6d1e6f6fe799c41ef687ad3caa870451cec2.png"
        />
        <span class="text_1">首页</span>
        <span class="text_2">关于我们</span>
      </div>
      <div class="group_58 flex-row"><div class="group_1 flex-col"></div></div>
    </div>
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
                    <span class="text_4">系统优势</span>
                    <span class="paragraph_1">
                      <span>专业系统功能完备，管理界面简单明晰</span>
                      <span>手机端直接下单、优惠、查单等</span>
                      <span>高层管理人员实时查看门店经营</span>
                    </span>
                  </div>
                  <div class="advantage-section">
                    <span class="text_4">其他优势</span>
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
        <div class="box_4 flex-col justify-end"> 
          <!-- <div class="box_52 flex-row">
            <div class="group_4 flex-col">
              <div class="group_5 flex-col">
                <div class="text-wrapper_1 flex-col">
                  <span class="text_4">其他优势</span>
                  <span class="paragraph_1">
                    专业系统功能完备，管理界面简单明晰
                    <br />
                    手机端直接下单、优惠、查单等
                    <br />
                    高层管理人员实时查看门店经营
                  </span>
                  <span class="text_4">其他优势</span>
                  <span class="paragraph_1">
                    专业系统功能完备，管理界面简单明晰
                    <br />
                    手机端直接下单、优惠、查单等
                    <br />
                    高层管理人员实时查看门店经营
                  </span>
                </div>
                
              </div>
            </div>
          </div> -->
          <div class="box_53 flex-row justify-between">
            <div class="image-text_39 flex-col justify-between">
              <img
                class="image_6"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng148e2a44605b3b73db3ca3398e69d5c893c9a88df96fd4a54b6cb2cb3eb55bdb.png"
              />
              <span class="text-group_2">精准的成本控制</span>
            </div>
            <!-- <div class="text-wrapper_31 flex-col justify-between">
              <span class="text_4">其他优势</span>
              <span class="paragraph_2">
                开发团队经验丰富、技术卓越
                <br />
                人工客服24小时在线，售后无忧
                <br />
                系统版本维护更新，保障系统与时俱进
                <br />
                酒吧定制化开发功能
              </span>
            </div> -->
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
              <div v-if="item.slot3 === 3" class="group_7 flex-row">
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
              </div>
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
        <!-- <div class="box_57 flex-row"><div class="block_3 flex-col"></div></div> -->
        <div class="section-title solution"></div>
        <!-- <div class="box_58 flex-row">
          <div class="box_59 flex-col justify-between">
            <div class="text-wrapper_4 flex-col">
              <span class="text_9">筛选即将生日的客户，发送祝福或卡券等；唤醒客户</span>
            </div>
            <div class="text-wrapper_5 flex-col">
              <span class="text_10">门店创建定时任务，���指定时间后，系统自动下发任何到员工企业微信</span>
            </div>
          </div>
          <div class="group_10 flex-col">
            <div class="box_60 flex-row justify-between">
              <div class="section_7 flex-col">
                <div class="box_6 flex-col">
                  <div class="block_5 flex-col"></div>
                  <div class="text-wrapper_6 flex-col"><span class="text_11">线上开台</span></div>
                </div>
                <div class="text-wrapper_7 flex-col"><span class="text_12">在线订座</span></div>
              </div>
              <div class="box_61 flex-col justify-between">
                <div class="section_13 flex-row justify-between">
                  <div class="block_6 flex-col"></div>
                  <div class="text-wrapper_8 flex-col"><span class="text_13">会员价</span></div>
                </div>
                <div class="group_12 flex-col">
                  <div class="group_13 flex-col">
                    <div class="block_17 flex-row"><div class="group_15 flex-col"></div></div>
                    <div class="block_18 flex-row"><div class="box_7 flex-col"></div></div>
                  </div>
                  <div class="group_17 flex-row">
                    <div class="group_18 flex-col"></div>
                    <div class="text-wrapper_9 flex-col"><span class="text_14">数据报表</span></div>
                    <div class="group_19 flex-col"></div>
                  </div>
                  <div class="group_20 flex-col">
                    <div class="text-wrapper_10 flex-col"><span class="text_15">联动企微</span></div>
                    <div class="section_9 flex-col">
                      <div class="group_21 flex-col"></div>
                      <div class="group_22 flex-col"></div>
                    </div>
                  </div>
                  <div class="group_23 flex-col"><div class="section_10 flex-col"></div></div>
                  <div class="group_24 flex-col"><div class="group_25 flex-col"></div></div>
                  <div class="text-wrapper_11 flex-col"><span class="text_16">客户标签</span></div>
                </div>
              </div>
            </div>
            <div class="box_62 flex-row"><div class="box_8 flex-col"></div></div>
            <div class="box_63 flex-row justify-between">
              <div class="section_11 flex-col"></div>
              <div class="text-wrapper_12 flex-col"><span class="text_17">卡券核销</span></div>
            </div>
            <div class="box_64 flex-row">
              <div class="box_9 flex-col"><div class="box_10 flex-col"></div></div>
              <div class="box_11 flex-col"></div>
              <div class="text-wrapper_13 flex-col"><span class="text_18">线上充值赠送</span></div>
            </div>
            <div class="box_65 flex-row">
              <div class="group_26 flex-col">
                <div class="group_27 flex-col"></div>
                <div class="group_28 flex-col">
                  <div class="text-wrapper_14 flex-col"><span class="text_19">存取酒</span></div>
                  <div class="group_29 flex-col"></div>
                </div>
                <div class="text-wrapper_15 flex-col"><span class="text_20">业绩查询</span></div>
              </div>
              <div class="group_30 flex-col"></div>
              <div class="text-wrapper_16 flex-col"><span class="text_21">日志管理</span></div>
            </div>
            <div class="block_11 flex-col"><div class="block_12 flex-col"></div></div>
            <div class="text-wrapper_17 flex-col"><span class="text_22">注册大礼包</span></div>
            <div class="text-wrapper_18 flex-col"><span class="text_23">叫号大屏</span></div>
            <div class="text-wrapper_19 flex-col"><span class="text_24">生日提醒</span></div>
            <div class="text-wrapper_20 flex-col"><span class="text_25">定时任务</span></div>
            <div class="text-wrapper_21 flex-col"><span class="text_26">进销存</span></div>
            <div class="text-wrapper_22 flex-col"><span class="text_27">扫码点单</span></div>
            <div class="text-wrapper_23 flex-col"><span class="text_28">客户营销</span></div>
          </div>
        </div> -->
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
              <span class="desc_hd">不管是针式还是热敏，我们统统支持打印纸宽度80��满，即插即用</span>
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
      <div class="group_38 flex-col">
        <div class="section-title contact"></div>
        <div class="contact-container">
          <!-- 电话 -->
          <div class="contact-info-item">
            <img
              class="contact-icon"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng16d0665d181919fdda48ddbe647aa8003d4054ac42eed6cfe9d478ab37d13302.png"
            />
            <div class="contact-content">
              <div class="contact-label">联系电话：</div>
              <div class="contact-value">18276765363</div>
            </div>
          </div>

          <!-- 地址 -->
          <div class="contact-info-item">
            <img
              class="contact-icon"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng6717dd8d4f83e9138d5578592a2bc2364917f8fe43b800b09c72822f1ccc23be.png"
            />
            <div class="contact-content">
              <div class="contact-label">地址：</div>
              <div class="contact-value">上海市闵行区1688号可视对讲凹回</div>
            </div>
          </div>

          <!-- 邮箱 -->
          <div class="contact-info-item">
            <img
              class="contact-icon"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPng89b1280114c2f514f53bf135ff000a02e03da1e4f2885c68f5f59c4f578c81b2.png"
            />
            <div class="contact-content">
              <div class="contact-label">邮箱：</div>
              <div class="contact-value">18276765363@xmsj.com</div>
            </div>
          </div>

          <!-- 二维码 -->
          <div class="contact-qr">
            <div class="qr-item">
              <img
                class="qr-image"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngcd8e450b5c62f460137112bb10b6bf6bac477563d4d3e8fc4cf3a085ba517581.png"
              />
              <span class="qr-text">客服1微信</span>
            </div>
            <div class="qr-item">
              <img
                class="qr-image"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngcd8e450b5c62f460137112bb10b6bf6bac477563d4d3e8fc4cf3a085ba517581.png"
              />
              <span class="qr-text">客服2微信</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng15165c32bdff872729caa6debd13e00e44b7050e091456786d981136732c203b'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '后台管理' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng7565ccf0f7024691e63f7e3715b88419282a3019811351b3482eff56044ba57c'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '咨客系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng04bc6ca303f872c1515ab456a1f5f0a51a8a7d9bc95c25a554bc36b4f781f21d'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: 'iPad点单' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPngad1a8876ec37822044dd026689fbfaa4a357bb5bf4d5c8135cac3fb055fc1954'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '微信扫码点单' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng2d321f048432fa588391da41687fd524d5d70a98abd2b820a16aced9adaa06ee'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '收银系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng4751680a2abfda20f890316ff49241c7c7bd347d430d346dc0df6047010deb3c'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '会员系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng320e40b998cfe49c04fe458d89eb20f7911944087849db248383115433928bb8'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '仓库系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPngd73b69b887ac8ac67b122990225d65539bf4398665a8d9d20d9133c2f7d71fc0'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '存酒系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPngb3727c7da75b441683e87ff50d19484bf9b63a582b0bc8e2c54568afac434942'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '报表系统' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng838bd97cdc520dd814abb9d09547cd9c9a47ed0f568cd26ea824212725b24867'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '线上管理平台' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPng87441f8615802997bdc4d1c14315cbf10b3b5cc176f2d0a90cef02723e81728f'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '店长手机端' },
          slot1: 1
        },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPngbef5f2087ca4638666d006a764c245221e8a33b7914b74fed3ffba6526291008'
          },
          slot2: 2,
          specialSlot1: { lanhutext0: '咨客手机端' },
          slot1: 1
        },
        { lanhuBg0: 'rgba(35,39,54,1.000000)', slot3: 3 },
        {
          lanhuBg0: 'rgba(35,39,54,1.000000)',
          specialSlot2: {
            lanhuimage0:
              'https://lanhu-oss.lanhuapp.com/SketchPngd05da827d1826475c2188a7f2aab5c59ec946f38830eb0a2ee3342197557636e'
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
      constants: {},
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
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