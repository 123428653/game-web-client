<template>
  <div class="indexPage">
    <div class="nav-top" style="display: block;">
      <div class="logo" style="display: none;"></div>
      <div
        id="J-pagination-out"
        class="swiper-pagination pagination-out swiper-pagination-clickable swiper-pagination-bullets"
      >
        <!-- "Trang Chủ","Sự Kiện","Tin Tức","Thế Giới Quan","Media","Trung Tâm Hỗ Trợ" -->
        <div class="swiper-pagination-bullet swiper-pagination-bullet-active">
          <span>Trang Chủ</span>
        </div>
        <div class="swiper-pagination-bullet">
          <span>Tin Tức</span>
        </div>
        <div class="swiper-pagination-bullet">
          <span>Thế Giới Quan</span>
        </div>
        <div class="swiper-pagination-bullet">
          <span>Giới Thiệu</span>
        </div>
        <div class="swiper-pagination-bullet">
          <span>Media</span>
        </div>
      </div>
      <router-link :to="token ? '/user' : '/'" class="nav-link">
        {{token ? 'Trung tâm cá nhân' : 'đăng nhập'}}
      </router-link>
      <!-- <a href="https://survey.163.com/htmls/2zqc23/paper.html" class="nav-link">
        {{token ? 'Trung tâm cá nhân' : 'đăng nhập'}}
      </a> -->
    </div>
    <!-- <swiper id="J-page" class="swiper-container swiper-container-out swiper-container-vertical"> -->
    <swiper id="J-page" :options="swiperOption" class="swiper-container-out">
      <!-- <div
        class="swiper-wrapper"
        style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);"
      > -->
        <swiper-slide
          class="swiper-slide slide-index swiper-slide-active"
          data-hash="index"
          style="height: 927px;"
        >
          <div class="section section-index">
            <div class="section-content">
              <div class="video-bg">
                <!--循环-->
                <video
                  autobuffer
                  autoloop
                  autoplay
                  loop
                  class="video-loop"
                  preload="auto"
                  id="loop"
                  muted
                >
                  <source
                    src="@/assets/images/1de564819b0eeda19bcd3ad56ec8b2d0.webm"
                    type="video/webm"
                  />
                  <source
                    src="@/assets/images/29775e2d3f86edd7238a8ce3bb2776af.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div class="content">
                <div class="logo-wrap">
                  <div class="logo"></div>
                </div>
                <div class="btn-wrap">
                  <a
                    href="javascript:;"
                    @click="showLoginAction(true)"
                    class="btn-yuyue BX_Sprite4"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slide-inner slide-news" data-hash="news" style="height: 927px;">
          <div class="section section-inner">
            <div class="section-content">
              <div class="news-content">
                <h2 class="title">
                  <span>Tin Tức</span>
                </h2>
                <div class="tab-wrap">
                  <div class="tab-item tab-active">
                    <span>Tất Cả</span>
                  </div>
                  <div class="tab-item">
                    <span>Tin Tức</span>
                  </div>
                  <div class="tab-item">
                    <span>Sự Kiện</span>
                  </div>
                </div>
                <div class="line"></div>
                <div class="news-list-wrap">
                  <div class="news-wrap news-active" id="js-news-list">
                    <ul class="news-list">
                      <li>
                        <a
                          title="6/4 update phiên bản mới"
                          href="https://www.conquerorsblade.co.kr/news/update/20200407/32595_873855.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>04</span>
                            <span>07</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">6/4 update phiên bản mới</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="6/4 miễn phí update phiên bản mới"
                          href="https://www.conquerorsblade.co.kr/news/update/20200407/32595_873859.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>04</span>
                            <span>05</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">6/4 miễn phí update phiên bản mới</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Mở kênh Youtube！"
                          href="https://www.conquerorsblade.co.kr/news/update/20200331/32595_872431.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>30</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">Mở kênh Youtube！</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Làm sao mở khóa chiến chùy và bộ đội mùa 2"
                          href="https://www.conquerorsblade.co.kr/news/update/20200331/32595_872429.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>30</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">Làm sao mở khóa chiến chùy và bộ đội mùa 2</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Thông Báo update quân sự mùa 2"
                          href="https://www.conquerorsblade.co.kr/news/update/20200331/32595_872421.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>28</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">Thông Báo update quân sự mùa 2</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Thông báo bảo trì và Update 26/3"
                          href="https://www.conquerorsblade.co.kr/news/update/20200327/32595_871683.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>26</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">Thông báo bảo trì và Update 26/3</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="[Thông báo] Thời đại truy cập sớm Kết thúc era Thời đại chơi miễn phí Mở!"
                          href="https://www.conquerorsblade.co.kr/news/update/20200328/32595_871823.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>25</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span
                              class="news-title"
                            >[Thông báo] Thời đại truy cập sớm Kết thúc era Thời đại chơi miễn phí Mở!</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="Conqueror Blade: Khai mạc sự kiện khai mạc!"
                          href="https://www.conquerorsblade.co.kr/news/official/20200328/32594_871805.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>25</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Sự Kiện】</span>
                            <span class="news-title">Conqueror Blade: Khai mạc sự kiện khai mạc!</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="[Thông báo] Phần giới thiệu kỹ năng War Hammer. 2 |"
                          href="https://www.conquerorsblade.co.kr/news/update/20200328/32595_871821.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>23</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span
                              class="news-title"
                            >[Thông báo] Phần giới thiệu kỹ năng War Hammer. 2 |</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          title="[Thông báo] Phần thưởng kết quả mùa 1"
                          href="https://www.conquerorsblade.co.kr/news/update/20200328/32595_871820.html"
                          target="_blank"
                          data-mark="$item.cusattr[&quot;Remark&quot;]"
                        >
                          <div class="time">
                            <span>03</span>
                            <span>21</span>
                          </div>
                          <div class="news-info">
                            <span class="news-type">【Tin Tức】</span>
                            <span class="news-title">[Thông báo] Phần thưởng kết quả mùa 1</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div class="page-number">
                      <a
                        href="javascript:void(0)"
                        data-href="https://www.conquerorsblade.co.kr/inline/20v1/news/index.html"
                        class="page-btn select"
                      >1</a>
                      <a
                        href="javascript:void(0)"
                        data-href="https://www.conquerorsblade.co.kr/inline/20v1/news/index_2.html"
                        class="page-btn"
                      >2</a>
                      <a
                        href="javascript:void(0)"
                        class="next_page_url next-page page-btn"
                        data-href="https://www.conquerorsblade.co.kr/inline/20v1/news/index_2.html"
                      >下一页</a>
                      <div class="goto">
                        <input type="text" />
                        <div class="btn-goto">跳转</div>
                      </div>
                      <div class="total_page" data-page="2">共2页</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slide-inner slide-game" data-hash="game" style="height: 927px;">
          <div class="section section-inner">
            <div class="section-content">
              <swiper
                :options="gameSwiper.options"
                id="J-game"
                class="swiper-container swiper-container-game swiper-container-fade swiper-container-horizontal"
              >
                <!-- <div class="swiper-wrapper"> -->
                  <swiper-slide
                    class="swiper-slide slide-game swiper-slide-active"
                    style="width: 1815px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                  >
                    <div class="video-wrap">
                      <video
                        autobuffer
                        autoplay
                        loop
                        class="video-loop"
                        id="J-video-0"
                        preload="auto"
                        muted
                      >
                        <source
                          src="https://z.v.netease.com/2019/1203/ae90b9cfbde10ca0a7f5ad8500f4e766.webm"
                          type="video/webm"
                        />
                        <source
                          src="https://z.v.netease.com/2019/1203/4ad53615f4fc2c603e593884fe041466qt.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div class="slide-content">
                      <h2 class="title">Khai Mạc chiến trường Trung Thế Kỷ</h2>
                      <h3
                        class="sub-title"
                      >Được nhóm phát triển trong 2 năm, mô tả những hình ảnh cực kỳ rõ nét về chiến trường</h3>
                    </div>
                  </swiper-slide>
                  <swiper-slide
                    class="swiper-slide slide-game swiper-slide-next"
                    style="width: 1815px; opacity: 0; transform: translate3d(-1815px, 0px, 0px);"
                  >
                    <div class="video-wrap">
                      <video
                        autobuffer
                        autoplay
                        loop
                        class="video-loop"
                        id="J-video-1"
                        preload="auto"
                        muted
                      >
                        <source
                          src="https://z.v.netease.com/2019/1203/2212238ad8dfa27ee5696ce6a2cfc4d3.webm"
                          type="video/webm"
                        />
                        <source
                          src="https://z.v.netease.com/2019/1203/3e69f33ec52e71539111d337757f13d2qt.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div class="slide-content">
                      <h2 class="title">Cuộc bao vây lớn</h2>
                      <h3
                        class="sub-title"
                      >Chỉ đạo những người lính cổ đại của riêng bạn và bắt các đồng minh và lâu đài của kẻ thù</h3>
                    </div>
                  </swiper-slide>
                  <swiper-slide
                    class="swiper-slide slide-game"
                    style="width: 1815px; opacity: 0; transform: translate3d(-3630px, 0px, 0px);"
                  >
                    <div class="video-wrap">
                      <video
                        autobuffer
                        autoplay
                        loop
                        class="video-loop"
                        id="J-video-2"
                        preload="auto"
                        muted
                      >
                        <source
                          src="https://z.v.netease.com/2019/1203/141c179d238d40e9b676ab26d09232d2.webm"
                          type="video/webm"
                        />
                        <source
                          src="https://z.v.netease.com/2019/1203/e807521e73479cafac88b9e3ca091459qt.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div class="slide-content">
                      <h2 class="title">Chinh Phục Thế Giới</h2>
                      <h3
                        class="sub-title"
                      >Trong địa hình phe Phương tây tạo Quân Đoàn，độc chiếm tài nguyên，Chinh phục thế giới</h3>
                    </div>
                  </swiper-slide>
                  <swiper-slide
                    class="swiper-slide slide-game"
                    style="width: 1815px; opacity: 0; transform: translate3d(-5445px, 0px, 0px);"
                  >
                    <div class="video-wrap">
                      <video
                        autobuffer
                        autoplay
                        loop
                        class="video-loop"
                        id="J-video-3"
                        preload="auto"
                        muted
                      >
                        <source
                          src="https://z.v.netease.com/2019/1203/9c7f6e3ffe5d17ce59a2edeb900aa5a5.webm"
                          type="video/webm"
                        />
                        <source
                          src="https://z.v.netease.com/2019/1203/bbd2bdf592ec721a02bcc268d777cc0eqt.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                    <div class="slide-content">
                      <h2 class="title">Thao tác vũ khí trên mặt đất</h2>
                      <h3
                        class="sub-title"
                      >Đánh chiếm lâu đài của kẻ thù bằng cách sử dụng súng máy, pháo binh dã chiến, xe bao vây, v.v.</h3>
                    </div>
                  </swiper-slide>
                <!-- </div> -->
                <div class="pagination-game-wrap">
                  <div
                    id="J-pagination-game"
                    class="swiper-pagination pagination-game swiper-pagination-clickable swiper-pagination-bullets"
                  >
                  </div>
                  <div class="pagination-game-num">
                    <span class="num">0{{gameSwiper.currentIndex}}</span>
                  </div>
                </div>
              </swiper>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slide-inner slide-arms" data-hash="arms" style="height: 927px;">
          <div class="section section-inner">
            <div class="section-content">
              <div
                id="J-pagination-arms"
                class="swiper-pagination pagination-arms swiper-pagination-clickable swiper-pagination-bullets"
              >
                <div class="swiper-pagination-bullet swiper-pagination-bullet-active">
                  <span>Vũ Khí</span>
                </div>
                <div class="swiper-pagination-bullet">
                  <span>Quân đoàn</span>
                </div>
                <div class="swiper-pagination-bullet">
                  <span>pháp lệnh</span>
                </div>
              </div>
              <div class="top-wrap"></div>
              <swiper
                id="J-arms"
                :options="arms.options"
                class="swiper-container-arms"
              >
                  <swiper-slide
                    class="swiper-slide swiper-slide-active"
                    style="width: 1815px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                  >
                    <div class="section-weapon">
                      <div class="weapon-content">
                        <div
                          id="J-pagination-weapon"
                          class="swiper-pagination pagination-weapon"
                        >
                          <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                          <span class="swiper-pagination-bullet"></span>
                        </div>
                        <swiper
                          id="J-weapon"
                          :options="weapon.options"
                          class="swiper-container-weapon"
                        >
                            <swiper-slide
                              class="swiper-slide swiper-slide-active"
                              style="width: 1700px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Khiên kiếm</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Khiên kiếm tiêu chuẩn phương Tây.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>Cân bằng tổng thể của thanh kiếm là tốt, nó có tác dụng bảo vệ khiên và độ ổn định của đường trung tâm là tuyệt vời. Phương pháp tấn công chính là giữ khiên và đâm kẻ thù, và bạn có thể sử dụng nó theo nhiều cách khác nhau để thay đổi kỹ năng của mình.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/jd1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/jd2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv1"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide swiper-slide-next"
                              style="width: 1700px; opacity: 0; transform: translate3d(-1700px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Rìu Dài</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc Tính vũ khí</h3>
                                      <div class="text">
                                        <p>Rìu Dài tàn bạo.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>Nó dài khoảng 6 đến 10 inch và kết hợp rìu, giáo và gai thành một, giúp dễ dàng thổi bay quân địch trong một cuộc tấn công, biến nó thành vũ khí chiến đấu yêu thích của hiệp sĩ trên chiến trường.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/zf1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/zf2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv2"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-3400px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">cửa sổ</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Cửa sổ hình độc đáo.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Thiết kế phức tạp hơn Changchang truyền thống. Có những cái gai sắc nhọn phía sau đầu cửa sổ cong, có thể chọc vào đầu cửa sổ, đánh bằng giáo và có nhiều ứng dụng kỹ thuật, cả tuyệt vời trong tấn công và chiến đấu.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/zm1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/zm2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv3"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-5100px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Tay ngắn</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Tay ngắn</h3>
                                      <div class="text">
                                        <p>
                                          Không giống như longbow, tập trung vào sức mạnh khi chế tạo, shortbow là di động và được xáo trộn. Tốc độ là quan trọng.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Vì lý do này, cung ngắn đơn giản hơn nhiều so với cung dài, và mũi tên nhẹ hơn.
                                          Longbows rất tốt cho các cuộc tấn công tầm xa, nhưng shortbows có xu hướng liên tục tấn công các điểm tương đối gần, gắn trên áo giáp nhẹ.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/dg1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/dg2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv4"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-6800px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Yacal</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Yakal đầy hung dữ.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Nó có chiều dài từ 4 đến 7 tàu với thân kiếm cong và chủ yếu được sản xuất bởi các bậc thầy gốm. Khi bạn vung một chiếc yaklar, có vẻ như một thợ gặt đang nhảy, và kẻ thù hít thở. Đó là một vũ khí có thể.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/td1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/td2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv5"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-8500px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">lửa</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Súng nhiệt hung dữ Hwaseunggun</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Nó có nhiều đồng hơn sắt và hầu hết đều có hình dạng ống. Nó tự hào có sức mạnh khủng khiếp và có thể bắn lựu đạn khi bạn đặt nó vào. Nó không ổn định cao, nhưng không có vũ khí có thể so sánh với sức mạnh giết chóc.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/hc1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/hc2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv6"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-10200px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Nhị nguyên</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>
                                          Dao găm là ánh sáng và thuận tiện để sử dụng, và nó dễ dàng mở ra các công nghệ khác nhau, nhưng nó là xảo quyệt và thiếu sức mạnh.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Để sử dụng thanh kiếm hai đầu làm vũ khí, không chỉ cần có những chuyển động cơ thể kỳ quái và sự kiên nhẫn bình tĩnh, mà còn phải chuẩn bị và tấn công từng người một cách hoàn hảo. Điều quan trọng nhất là phải có một giá đỡ không tiếng ồn và ẩn an toàn để làm mịn quá trình ủ của bạn.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/sd1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/sd2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv7"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-11900px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Cung</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Longbow có thể bắn cung một cách ổn định.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Chất liệu nơ mềm mại, cứng cáp và có độ đàn hồi tuyệt vời. Mặt khác, đầu mũi tên phẳng, đầu mũi tên có lá, chúng có thể bắn kẻ thù bên ngoài hàng trăm bước và phù hợp để chiến đấu tầm xa, và chỉ những người có sức mạnh và sự nhanh nhẹn mới có thể sử dụng sức mạnh thực sự của nỏ.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/cg1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/cg2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv8"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-13600px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Kwando</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Kwando thể hiện sức mạnh nặng nề.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Nó là một vũ khí dài rất sắc bén được làm bằng bao tải gỗ dài, thẳng và cứng với lưỡi dao hơi cong. Nó tự nhiên có thể gây ra tác động to lớn đến kẻ thù, một vũ khí được yêu thích bởi các chỉ huy cần sức mạnh mạnh mẽ.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/gd1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/gd2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv9"></div>
                                </div>
                              </div>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide"
                              style="width: 1700px; opacity: 0; transform: translate3d(-15300px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap">
                                  <div class="title-wrap">
                                    <span class="title">Liều dùng</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">Đặc điểm vũ khí</h3>
                                      <div class="text">
                                        <p>Dosun, một vũ khí nổi tiếng trên chiến trường phía đông.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">Lịch sử</h3>
                                      <div class="text">
                                        <p>
                                          Một thanh kiếm sắc bén và một chiếc khiên chắc chắn là sự kết hợp rất thiết thực trên chiến trường, thích hợp cho việc đi bộ và nếu được trang bị áo giáp hạng nặng, tỷ lệ sống sót sẽ cao hơn trên chiến trường. Hình dạng vũ khí ấn tượng đã trở thành biểu tượng của chiến binh.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="skill-wrap">
                                  <div class="skill-video">
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/dd1.mp4"
                                    >
                                      <span></span>
                                    </div>
                                    <div
                                      class="btn-video player"
                                      mp4="https://www.conquerorsblade.co.kr/video/2020/0323/dd2.mp4"
                                    >
                                      <span></span>
                                    </div>
                                  </div>
                                </div>
                                <div class="kv-wrap">
                                  <span class="circle"></span>
                                  <div class="kv kv10"></div>
                                </div>
                                <div class="btn-switch-wrap">
                                  <span
                                    class="btn-switch switch-active"
                                    data-gender="m"
                                    data-text="男"
                                  ></span>
                                  <span class="btn-switch" data-gender="f" data-text="女"></span>
                                </div>
                              </div>
                            </swiper-slide>
                          <div class="num">{{weapon.currentIndex}}</div>
                        </swiper>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide
                    class="swiper-slide swiper-slide-next"
                    style="width: 1815px; opacity: 0; transform: translate3d(-1815px, 0px, 0px);"
                  >
                    <div class="section-corps">
                      <div class="corps-content">
                        <div
                          id="J-pagination-corps"
                          class="swiper-pagination pagination-corps swiper-pagination-clickable swiper-pagination-bullets"
                        >
                        </div>
                        <swiper
                          id="J-corps"
                          :options="corps.options"
                          class="swiper-container swiper-container-corps swiper-container-fade swiper-container-horizontal"
                        >
                            <swiper-slide
                              class="swiper-slide corps-slide swiper-slide-active"
                              style="width: 1815px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                            >
                              <div class="slide-content">
                                <div class="intro-wrap corps-intro-1 corps-intro-show">
                                  <div class="title-wrap">
                                    <span class="title">Baekwol Sanmin</span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-left">
                                      <div class="intro-item intro-item-1">
                                        <h3 class="intro-title">Hoạt động chính</h3>
                                        <div class="text-wrap">
                                          <em>
                                            Tham gia vào các trận chiến bằng cách sử dụng bia mộ và dao củi.
                                          </em>
                                          <p>
                                            Bạn có thể gây sát thương hiệu quả cho kẻ địch không được trang bị hoặc bọc thép nhẹ, nhưng chúng không đủ tốt để đối phó với áo giáp thứ cấp hoặc cao hơn.
                                          </p>
                                          <p>Không có hình thức tấn công phân cấp bằng cách cầm dao</p>
                                          <p>Toàn bộ mục tiêu không thể được chọn và kỹ năng chiến thuật không thể được sử dụng.</p>
                                        </div>
                                      </div>
                                      <div class="intro-item intro-item-2">
                                        <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                        <div class="text-wrap">
                                          <em>채집 숙련가：</em>
                                          <p>
                                            Dân quân chủ yếu là trang trại và tập hợp để cung cấp tài nguyên trong trận chiến.
                                          </p>
                                          <em>총알받이：</em>
                                          <p>
                                            Mặc dù chi phí tuyển dụng tương đối thấp, sức mạnh chiến đấu tương đối thấp và hầu hết được sử dụng làm đạn.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-right">
                                      <div class="intro-item intro-item-3">
                                        <h3 class="intro-title">kỹ năng</h3>
                                        <div class="text-wrap">
                                          <em>dược liệu:</em>
                                          <p>Các loại thảo mộc được sử dụng để từ từ hồi phục HP trong một khoảng thời gian.</p>
                                        </div>
                                      </div>
                                      <div class="intro-item intro-item-4">
                                        <h3 class="intro-title">Sự hình thành</h3>
                                        <div class="text-wrap">
                                          <em>núi</em>
                                          <div class="img">
                                            <i class="dot-1-1-1"></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="intro-wrap corps-intro-2">
                                  <div class="title-wrap">
                                    <span class="title">Cystosis</span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-left">
                                      <div class="intro-item intro-item-1">
                                        <h3 class="intro-title">Hoạt động chính</h3>
                                        <div class="text-wrap">
                                          <em>
                                            Nó có hiệu quả trong việc phá vỡ đội hình của kẻ thù bằng cách tiến hành một số cuộc tấn công tầm ngắn.
                                            <p></p>
                                            <p>Thời gian hồi chiêu và khoảng cách của cuộc tấn công ngắn và tốc độ nhanh.</p>
                                            <p>
                                              Đội hình là tuyệt vời, nhưng mỗi trận chiến tương đối yếu.
                                            </p>
                                          </em>
                                        </div>
                                        <em></em>
                                      </div>
                                      <div class="intro-item intro-item-2">
                                        <em>
                                          <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                          <div class="text-wrap">
                                            <em>Chiến thắng:</em>
                                            <p>Nó là một đơn vị lực lượng tấn công xuất sắc.</p>
                                            <em>
                                              Ngã:
                                            </em>
                                            <p>
                                              Bạn rất giỏi trong việc tấn công kẻ thù và tấn công kẻ thù ở vị trí hàng đầu trong trận chiến.
                                            </p>
                                          </div>
                                        </em>
                                      </div>
                                      <em></em>
                                    </div>
                                    <em>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">kỹ năng</h3>
                                          <div class="text-wrap">
                                            <em>sạc điện:</em>
                                            <p>
                                              Khoảng cách không xa, nhưng sức tấn công mạnh mẽ, thời gian mát mẻ ngắn.
                                            </p>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">Sự hình thành</h3>
                                          <div class="text-wrap">
                                            <em>Sangaejin Chungsijin Sunjangjin</em>
                                            <div class="img">
                                              <i class="dot-1-2-1"></i>
                                              <i class="dot-1-2-2"></i>
                                              <i class="dot-1-2-3"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </em>
                                  </div>
                                  <em></em>
                                </div>
                                <em>
                                  <div class="intro-wrap corps-intro-3">
                                    <div class="title-wrap">
                                      <span class="title">Cuộc tấn công của Chuck</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">Hoạt động chính</h3>
                                          <div class="text-wrap">
                                            <em>
                                              Bạn rất giỏi trong việc nhanh chóng tấn công kẻ thù và bắn hạ kẻ thù.
                                            </em>
                                            <p>Tốt trong việc ngăn chặn các cuộc tấn công tầm xa với khiên khi tấn công.</p>
                                            <p>Bạn có thể bảo vệ phần thân trên của mình tốt với một bộ giáp nửa thân.</p>
                                            <em>
                                              Tấn công có thể gây sát thương cho nhiều kẻ thù.
                                            </em>
                                            <em>
                                              Nó nhanh.
                                            </em>
                                            <em>
                                              Khi chọn kẻ thù, họ sử dụng các đòn tấn công và chiến thuật tầm xa ưu tiên các tướng.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                          <div class="text-wrap">
                                            <em>Chuck：</em>
                                            <p>Chuck có thể gây sát thương lên kẻ thù bằng cách chiếu.</p>
                                            <em>Một vô song：</em>
                                            <p>
                                              Bạn rất giỏi trong việc tấn công kẻ thù và tấn công kẻ thù ở vị trí hàng đầu trong trận chiến.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">kỹ năng</h3>
                                          <div class="text-wrap">
                                            <em>sạc điện：</em>
                                            <p>
                                              Sức mạnh của cuộc tấn công là mạnh mẽ và khoảng cách được tính phí là dài.
                                              <em>Chuck：</em>
                                            </p>
                                            <p>
                                              Thiệt hại AOE có thể xảy ra trong một khoảng thời gian nhất định.
                                            </p>
                                            <em>Bảo vệ chung</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">Sự hình thành</h3>
                                          <div class="text-wrap">
                                            <em>Tướng núi</em>
                                            <div class="img">
                                              <i class="dot-1-3-1"></i>
                                              <i class="dot-1-3-2"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="kv-wrap">
                                    <div
                                      class="kv kv1"
                                      data-kv="1"
                                      data-name1="Baekwol Sanmin"
                                      data-name2="Cystosis"
                                      data-name3="Cuộc tấn công của Chuck"
                                    ></div>
                                    <div class="switch-button-wrap">
                                      <div class="switch-button" data-thumb="2">
                                        <p class="kv-name">Cystosis</p>
                                      </div>
                                      <div class="switch-button" data-thumb="3">
                                        <p class="kv-name">Cuộc tấn công của Chuck</p>
                                      </div>
                                    </div>
                                  </div>
                                </em>
                              </div>
                              <em></em>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide corps-slide swiper-slide-next"
                              style="width: 1815px; opacity: 0; transform: translate3d(-1815px, 0px, 0px);"
                            >
                              <em>
                                <div class="slide-content">
                                  <div class="intro-wrap corps-intro-1 corps-intro-show">
                                    <div class="title-wrap">
                                      <span class="title">Gamju thay đổi cư dân</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">Hoạt động chính</h3>
                                          <div class="text-wrap">
                                            <em>Đây là một lính đánh thuê tạm thời.</em>
                                            <em>
                                              Chiến đấu với một cây cột gỗ cắt mạnh.
                                            </em>
                                            <p>
                                              Những ngọn giáo của họ có giá trị đối với những người lính không được trang bị hoặc bọc thép nhẹ, nhưng chúng không hoạt động cho áo giáp thứ cấp hoặc cao hơn.
                                            </p>
                                            <p>
                                              Phương pháp chiến đấu ném kẻ thù phía trước mà không có hệ thống.
                                            </p>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                          <div class="text-wrap">
                                            <em>Không có mô tả tài sản.</em>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">kỹ năng</h3>
                                          <div class="text-wrap">
                                            <em>Không có kỹ năng X</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">Sự hình thành</h3>
                                          <div class="text-wrap">
                                            <em>núi</em>
                                            <div class="img">
                                              <i class="dot-2-1-1"></i>
                                            </div>
                                            <p>
                                              Sau khi phát triển bên trong cho đến giữa kỳ, có thể sử dụng các đường ngang dày đặc.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="intro-wrap corps-intro-2">
                                    <div class="title-wrap">
                                      <span class="title">Spearmen cuốn sách màu xanh</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">Hoạt động chính</h3>
                                          <div class="text-wrap">
                                            <em>
                                              Tương đối nhiều đội hình có sẵn, và họ rất giỏi trong việc xây dựng các đội hình và vận hành như những chướng ngại vật.
                                            </em>
                                            <p>Anh ấy có khả năng hoạt động tuyệt vời trong khi hình thành.</p>
                                            <p>Tốc độ hình thành nhanh.</p>
                                            <p>
                                              Sự hình thành chướng ngại vật ổn định và không dễ dàng phá vỡ.
                                            </p>
                                            <em>
                                              Kỹ năng chiến đấu của mỗi người lính là không đủ, vì vậy nếu đội hình của anh ta bị phá vỡ, khả năng hoạt động của anh ta sẽ giảm.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                          <div class="text-wrap">
                                            <em>Sự phát triển khác nhau：</em>
                                            <p>
                                              Chiến thuật khác nhau có thể được đào tạo và hướng phát triển rất đa dạng.
                                            </p>
                                            <em>Đạn：</em>
                                            <p>
                                              Mặc dù chi phí tuyển dụng tương đối thấp, sức mạnh chiến đấu tương đối thấp và hầu hết được sử dụng làm đạn.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">kỹ năng</h3>
                                          <div class="text-wrap">
                                            <em>rào chắn</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">Sự hình thành</h3>
                                          <div class="text-wrap">
                                            <em>Rải rác</em>
                                            <div class="img">
                                              <i class="dot-2-2-1"></i>
                                              <i class="dot-2-2-2"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="intro-wrap corps-intro-3">
                                    <div class="title-wrap">
                                      <span class="title">Lực lượng bệnh Harvard Thụy Sĩ</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">Hoạt động chính</h3>
                                          <div class="text-wrap">
                                            <em>
                                              Chúng rất giỏi trong việc tấn công kẻ thù bằng các chiến thuật dùng giáo như đâm vào cuối ngọn giáo và chém bằng rìu.
                                            </em>
                                            <p>
                                              Đội hình tương đối thoải mái, vì vậy thuận tiện cho những người lính ruột thể hiện khả năng chiến đấu của họ.
                                            </p>
                                            <p>Tốt cho chiến đấu tầm ngắn.</p>
                                            <em>
                                              Có thể làm hỏng các đơn vị áo giáp hạng nặng.
                                            </em>
                                            <em>
                                              Trong các cuộc chạm trán của kỵ binh, một chất chống rung tương đối dày đặc lan truyền chống lại các chướng ngại vật, nhưng nó kém hiệu quả hơn một cây giáo.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                          <div class="text-wrap">
                                            <em>Đội tiên phong chống kỵ binh：</em>
                                            <p>
                                              Chiến đấu tốt với kỵ binh, gây ra thiệt hại tương đối lớn cho kỵ binh.
                                            </p>
                                            <em>Sự xâm nhập bùng nổ：</em>
                                            <p>
                                              Xâm nhập áo giáp của kẻ thù, gây sát thương hiệu quả cho kẻ thù bằng áo giáp cao.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">kỹ năng</h3>
                                          <div class="text-wrap">
                                            <em>sạc điện</em>
                                            <em>rào chắn</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">Sự hình thành</h3>
                                          <div class="text-wrap">
                                            <em>Bụi lan</em>
                                            <div class="img">
                                              <i class="dot-2-3-1"></i>
                                              <i class="dot-3-2-2"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="kv-wrap">
                                    <div
                                      class="kv kv2"
                                      data-kv="1"
                                      data-name1="감주 변경 주민"
                                      data-name2="청서 창병 부대"
                                      data-name3="스위스 할버드병 부대"
                                    ></div>
                                    <div class="switch-button-wrap">
                                      <div class="switch-button" data-thumb="2">
                                        <p class="kv-name">Spearmen cuốn sách màu xanh</p>
                                      </div>
                                      <div class="switch-button" data-thumb="3">
                                        <p class="kv-name">Lực lượng bệnh Harvard Thụy Sĩ</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </em>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide corps-slide"
                              style="width: 1815px; opacity: 0; transform: translate3d(-3630px, 0px, 0px);"
                            >
                              <em>
                                <div class="slide-content">
                                  <div class="intro-wrap corps-intro-1 corps-intro-show">
                                    <div class="title-wrap">
                                      <span class="title">Hwang Hyang-súng</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">Hoạt động chính</h3>
                                          <div class="text-wrap">
                                            <em>
                                              Họ giỏi cả về chiến đấu tầm xa và tầm gần, nhưng đặc biệt giỏi trong chiến đấu tầm gần.
                                            </em>
                                            <p>
                                              Số lượng lao được tổ chức là nhỏ. (2-3 chiếc) Tầm ném của người ném bóng không xa, nhưng nhờ sức mạnh mạnh mẽ, nó có thể xuyên thủng lớp giáp nặng.
                                            </p>
                                            <p>
                                              Bằng cách hoạt động với khiên và giáo, khả năng chiến đấu cận chiến kém hơn một chút so với Do-sun.
                                            </p>
                                            <em>
                                              Nếu kẻ địch tiếp cận trong khi đang trong quá trình javelin, nó sẽ tham gia vào một trận chiến đấu gần.
                                            </em>
                                            <em>
                                              Nó không có mục đích trong javelin và tấn công kẻ thù gần nhất.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                          <div class="text-wrap">
                                            <em>Cận chiến:</em>
                                            <p>Khả năng chiến đấu tầm gần tương đối tốt.</p>
                                            <em>Số lượng trung bình:</em>
                                            <p>
                                              Sức mạnh của ngọn giáo tương đối cao, nhưng số lượng giáo rất ít.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">kỹ năng</h3>
                                          <div class="text-wrap">
                                            <em>Búa:</em>
                                            <p>Để kẻ thù ở phía trước.</p>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">Sự hình thành</h3>
                                          <div class="text-wrap">
                                            <em>Rải rác</em>
                                            <div class="img">
                                              <i class="dot-3-1-1"></i>
                                              <i class="dot-3-1-2"></i>
                                              <i class="dot-1-2-3"></i>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="intro-wrap corps-intro-2">
                                    <div class="title-wrap">
                                      <span class="title">Trở về nhà</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">Hoạt động chính</h3>
                                          <div class="text-wrap">
                                            <em>
                                              Chặn phía trước và che cho phi hành đoàn với vệt dễ dàng.
                                            </em>
                                            <em>
                                              Nó rất dễ bị tổn thương và mất khả năng hoạt động trong địa hình mở.
                                            </em>
                                            <em>
                                              Sau khi khiên bị phá hủy, khả năng phòng thủ bị giảm đáng kể.
                                            </em>
                                            <em>
                                              Sắp xếp các hàng tương đối chậm.
                                            </em>
                                            <em>
                                              Dễ bị tấn công từ phía sau.
                                            </em>
                                            <em>
                                              Khả năng tấn công rất kém./em&gt;
                                            </em>
                                          </div>
                                          <em></em>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <em>
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Phòng thủ mặt trận:</em>
                                              <p>
                                                Các lá chắn phía trước rất phòng thủ, nhưng phòng thủ phía sau tương đối yếu.
                                              </p>
                                              <em>
                                                Điểm yếu tấn công trở lại:
                                              </em>
                                              <p>
                                                Các cuộc tấn công trở lại có nhiều thiệt hại.
                                              </p>
                                            </div>
                                          </em>
                                        </div>
                                        <em></em>
                                      </div>
                                      <em>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Không có kỹ năng</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Jang Jang Jin</em>
                                              <div class="img">
                                                <i class="dot-3-2-1"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </em>
                                    </div>
                                    <em></em>
                                  </div>
                                  <em>
                                    <div class="intro-wrap corps-intro-3">
                                      <div class="title-wrap">
                                        <span class="title">Baeksan Nước đen Cheolbudo</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Phân tán và có khả năng tấn công quân địch và gây sát thương AOE.
                                              </em>
                                              <em>
                                                Tấn công một đội để tăng cường khả năng va chạm để tạo ra một bước đột phá của quân địch đánh vào đội phòng thủ.
                                              </em>
                                              <em>
                                                Anh ấy giỏi trong việc bảo vệ đội hình bằng cách sử dụng đội hình.
                                              </em>
                                              <p>
                                                Một loạt các đội hình phòng thủ, chẳng hạn như các đội thành viên và đội hình, có sẵn, và đội phòng thủ được duy trì.
                                              </p>
                                              <em>
                                                Con sáo đánh bật kẻ thù trở lại, gây sát thương.
                                              </em>
                                              <em>
                                                Những thanh kiếm dài xuyên thấu và gây sát thương lớn cho kẻ thù.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Vũ khí hai chiều:</em>
                                              <p>
                                                Nó có hai vũ khí và nó được sử dụng theo tình hình.
                                              </p>
                                              <em>Sốc cùn</em>
                                              <p>Tấn công kẻ thù bằng sát thương cùn, gây sát thương.</p>
                                              <em>Áo giáp hạng nặng:</em>
                                              <p>
                                                Bộ giáp tương đối cao với áo giáp dày.
                                              </p>
                                              <em>Tiến lên cẩn thận:</em>
                                              <p>
                                                Tính cơ động của nó tương đối thấp, vì vậy nó không thể vào nhanh.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Không có kỹ năng.</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Suối núi</em>
                                              <div class="img">
                                                <i class="dot-3-3-1"></i>
                                                <i class="dot-3-3-2"></i>
                                                <i class="dot-3-3-3"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="kv-wrap">
                                      <div
                                        class="kv kv3"
                                        data-kv="1"
                                        data-name1="Hwang Hyang-súng"
                                        data-name2="Trở về nhà"
                                        data-name3="Baeksan Nước đen Cheolbudo"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">Trở về nhà</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">Baeksan Nước đen Cheolbudo</p>
                                        </div>
                                      </div>
                                    </div>
                                  </em>
                                </div>
                                <em></em>
                              </em>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide corps-slide"
                              style="width: 1815px; opacity: 0; transform: translate3d(-5445px, 0px, 0px);"
                            >
                              <em>
                                <em>
                                  <div class="slide-content">
                                    <div class="intro-wrap corps-intro-1 corps-intro-show">
                                      <div class="title-wrap">
                                        <span class="title">Nỏ Norman</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Sức mạnh của nỏ thấp vì bạn đang xử lý nỏ bằng tay.
                                              </em>
                                              <p>Phạm vi là ngắn.</p>
                                              <p>
                                                Khả năng thâm nhập không phải là xấu và đe dọa kẻ thù cuối cùng.
                                              </p>
                                              <em>
                                                Tốc độ tải tương đối nhanh.
                                              </em>
                                              <em>
                                                Độ chính xác tương đối thấp.
                                              </em>
                                              <em>
                                                Không có khả năng chiến đấu tầm gần.
                                              </em>
                                              <em>
                                                Khi bắn từ điểm cao trở xuống, khả năng bắn là nổi bật, nhưng khả năng bắn parabol không được trang bị.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Lửa thẳng:</em>
                                              <p>Thiếu khả năng chụp parabol.</p>
                                              <em>
                                                Sinh sản lửa:
                                              </em>
                                              <p>Độ chính xác chụp tương đối thấp.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Chỉ định chữa cháy</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Đội bắn súng Sanggyejin Samdanjin Nhật Bản</em>
                                              <div class="img">
                                                <i class="dot-4-1-1"></i>
                                                <i class="dot-4-1-2"></i>
                                                <i class="dot-4-1-3"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-wrap corps-intro-2">
                                      <div class="title-wrap">
                                        <span class="title">Cung thủ được đào tạo Jeonseo</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>Tôi chưa được huấn luyện về lửa.</em>
                                              <p>Tầm ngắn và độ chính xác thấp.</p>
                                              <p>
                                                Nó thiếu khả năng biết chính xác cách bắn một mũi tên và bắn chính xác.
                                              </p>
                                              <p>
                                                Không cần phải nhắm, nên tốc độ bắn tương đối nhanh.
                                              </p>
                                              <p>
                                                Chiến đấu cận chiến là không thể, và bạn bỏ chạy trong trận chiến gần với kẻ thù.
                                              </p>
                                              <em>
                                                Số lượng người tương đối lớn.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Hoạt động tập thể:</em>
                                              <p>Số lượng tổ chức tương đối lớn.</p>
                                              <em>Thâm nhập yếu:</em>
                                              <p>
                                                Sự thâm nhập tương đối thấp, và chỉ có thể gây sát thương hiệu quả cho các đơn vị bọc thép.
                                              </p>
                                              <em>Bắn định mệnh:</em>
                                              <p>Độ chính xác chụp rất thấp.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Không có kỹ năng.</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Bộ dạng cánh mảng nhỏ</em>
                                              <div class="img">
                                                <i class="dot-4-2-1"></i>
                                                <i class="dot-4-2-2"></i>
                                                <i class="dot-4-2-3"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-wrap corps-intro-3">
                                      <div class="title-wrap">
                                        <span class="title">Chu thần thông</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Sử dụng hợp chất nặng tái diễn.
                                              </em>
                                              <p>Tần suất bắn tương đối thấp.</p>
                                              <p>
                                                Một mũi tên sắc nhọn làm bằng kim tự tháp hình tam giác có sức xuyên thấu rất cao và sát thương cao.
                                              </p>
                                              <p>
                                                Phạm vi tương đối ngắn do mũi tên nặng.
                                              </p>
                                              <em>
                                                Không có khả năng chiến đấu tầm gần.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Chụp chính xác:</em>
                                              <p>Độ chính xác chụp tương đối cao.</p>
                                              <em>Mũi tên thâm nhập:</em>
                                              <p>
                                                Mũi tên xuyên đặc biệt có thể xuyên qua áo giáp hạng nặng và gây sát thương.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Chỉ định chữa cháy</em>
                                              <em>Mũi tên thâm nhập</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Miền núi</em>
                                              <div class="img">
                                                <i class="dot-4-3-1"></i>
                                                <i class="dot-4-3-2"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="kv-wrap">
                                      <div
                                        class="kv kv4"
                                        data-kv="1"
                                        data-name1="노르만 석궁수"
                                        data-name2="Cung thủ được đào tạo Jeonseo"
                                        data-name3="Chu thần thông"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">Cung thủ được đào tạo Jeonseo</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">Chu thần thông</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </em>
                              </em>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide corps-slide"
                              style="width: 1815px; opacity: 0; transform: translate3d(-7260px, 0px, 0px);"
                            >
                              <em>
                                <em>
                                  <div class="slide-content">
                                    <div class="intro-wrap corps-intro-1 corps-intro-show">
                                      <div class="title-wrap">
                                        <span class="title">Một vòm dày đặc</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Tiến tới khu vực an toàn và kích hoạt đám cháy phụ trợ.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Điều động</em>
                                              <em>
                                                Khả năng cơ động nhanh
                                              </em>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Không có kỹ năng</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Giảm nhẹ</em>
                                              <div class="img">
                                                <i class="dot-5-1-1"></i>
                                                <i class="dot-5-1-2"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-wrap corps-intro-2">
                                      <div class="title-wrap">
                                        <span class="title">Ký hiệu Yurim</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Thực hiện một cuộc tấn công dày đặc với ba bước (3 đường) và đâm và hạ gục kẻ thù bằng một ngọn giáo kỵ binh.
                                              </em>
                                              <em>
                                                Mục đích chính của nó là làm mờ đội hình sau khi tiếp cận kẻ thù.
                                              </em>
                                              <em>
                                                Phải mất một thời gian tương đối dài để biến sau cuộc tấn công.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Quân đoàn huyết khối:</em>
                                              <p>
                                                Ngoài tấn công, đây là một đội kỵ binh có thể sử dụng vũ khí để tham gia vào các trận chiến của kẻ thù và trên bộ.
                                              </p>
                                              <em>Khả năng cơ động nhanh：</em>
                                              <p>
                                                Khoảng cách lực đẩy tương đối ngắn, và thời gian ngắn.
                                              </p>
                                              <em>Vũ khí phòng thủ:</em>
                                              <p>Nó có khả năng kháng cao với các loại chai súng Hwaseung.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Tấn công (thời gian mát mẻ là ngắn)</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Chống bụi giảm nhẹ Seol Hyeong-jin</em>
                                              <div class="img">
                                                <i class="dot-5-2-1"></i>
                                                <i class="dot-5-2-2"></i>
                                                <i class="dot-5-2-3"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-wrap corps-intro-3">
                                      <div class="title-wrap">
                                        <span class="title">Kỵ sĩ sắt Gwanyeong</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Bạn có thể sử dụng các cuộc tấn công lửa để giết kẻ thù và sau đó kích hoạt chiến đấu tầm ngắn.
                                              </em>
                                              <em>
                                                Đánh bại đội hình của kẻ thù bằng cách sử dụng Snow Hyung-Jin để gây sát thương.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Tấn công:</em>
                                              <p>Bạn có thể bắn bằng súng ba nòng khi tấn công.</p>
                                              <em>Sốc cùn:</em>
                                              <p>Tấn công kẻ thù với thiệt hại cùn.</p>
                                              <em>Áo giáp nặng:</em>
                                              <p>Bộ giáp tương đối cao với áo giáp dày.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>sạc điện</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Lan truyền hình tròn</em>
                                              <div class="img">
                                                <i class="dot-5-3-1"></i>
                                                <i class="dot-5-3-2"></i>
                                                <i class="dot-5-3-3"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="kv-wrap">
                                      <div
                                        class="kv kv5"
                                        data-kv="1"
                                        data-name1="Một vòm dày đặc"
                                        data-name2="Ký hiệu Yurim"
                                        data-name3="Kỵ sĩ sắt Gwanyeong"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">Ký hiệu Yurim</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">Kỵ sĩ sắt Gwanyeong</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </em>
                              </em>
                            </swiper-slide>
                            <swiper-slide
                              class="swiper-slide corps-slide"
                              style="width: 1815px; opacity: 0; transform: translate3d(-9075px, 0px, 0px);"
                            >
                              <em>
                                <em>
                                  <div class="slide-content">
                                    <div class="intro-wrap corps-intro-1 corps-intro-show">
                                      <div class="title-wrap">
                                        <span class="title">Hộ tống bọc thép</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Bộ giáp được trang bị rất nhẹ và cơ động trong khi có khả năng phòng thủ tương tự như áo giáp.
                                              </em>
                                              <p>Bạn có thể ngăn chặn đâm và cầm.</p>
                                              <p>
                                                Yếu chống lại các cuộc tấn công lửa. Nếu bị tấn công bằng lửa, có khả năng cao bị phá vỡ.
                                              </p>
                                              <em>
                                                Áo giáp nhẹ và thoải mái có thể chặn vũ khí hạng nhẹ, nhưng dễ bị tấn công nặng.
                                              </em>
                                              <p>Khi tấn công, phòng thủ lá chắn nhất định là có thể.</p>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Ba lô:</em>
                                              <p>
                                                Bộ giáp này rất nhẹ và thoải mái, có khả năng chống lại các cuộc tấn công đâm và cầm, nhưng dễ bị hỏa hoạn.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>sạc điện</em>
                                              <p>
                                                Sức đẩy là bình thường, nhưng khoảng cách lực đẩy dài và tốc độ nhanh.
                                              </p>
                                              <p>Thời gian mát mẻ là bình thường.</p>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Suối núi</em>
                                              <div class="img">
                                                <i class="dot-6-1-1"></i>
                                                <i class="dot-6-1-2"></i>
                                                <i class="dot-6-1-3"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-wrap corps-intro-2">
                                      <div class="title-wrap">
                                        <span class="title">Paju Chang Chang-young</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hoạt động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Phần lớn là chấp nhận huấn luyện chiến đấu hình thành. nhưng cuộc chiến của họ khá yếu.
                                              </em>
                                              <em>
                                                Mặc dù giáp của đá caramel có thể giống như giáp saphire, nhưng nó có ít trọng lượng.
                                              </em>
                                              <p>
                                                Có thể ngăn việc đâm và vẫy tay không chống lại hỏa hoạnKhi bị tấn công bởi lửa, có nhiều khả năng sụp đổ.
                                              </p>
                                              <p>
                                                Vũ khí hạng nhẹ có thể bị chặn, nhưng dễ bị tấn công nặng.
                                              </p>
                                              <p>
                                                Nó có khả năng cơ động tuyệt vời, thuận lợi cho chiến đấu ở vùng núi.
                                              </p>
                                              <em>
                                                Bỏ mũi giáo vào bát súp vàng và chiến đấu chống lại kẻ thù để làm kẻ thù bị đầu độc và yếu đuối.
                                              </em>
                                              <p>Giảm tốc độ tấn công và hư hại.</p>
                                              <p>
                                                Đầu của một ngọn giáo luộc ở Geumtang rất dễ bị rỉ sét và có độ xuyên thấu kém, nhưng thiệt hại là trong tiêu chuẩn.
                                              </p>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Đặc điểm lực lượng</h3>
                                            <div class="text-wrap">
                                              <em>Giáp:</em>
                                              <p>
                                                Bộ giáp lưng nhẹ và thoải mái, mạnh mẽ chống lại những vụ đâm và vẫy tay, yếu đuối chống lại lửa.
                                              </p>
                                              <em>Ngộ độc vàng Đường:</em>
                                              <p>
                                                Áp dụng vàng vào vũ khí làm suy yếu kẻ thù và gây sát thương liên tục.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kỹ năng</h3>
                                            <div class="text-wrap">
                                              <em>Không có kỹ năng.</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>Phân tán vị trí</em>
                                              <div class="img">
                                                <i class="dot-6-2-1"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-wrap corps-intro-3">
                                      <div class="title-wrap">
                                        <span class="title">Lưu Châu.</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">Hành động chính</h3>
                                            <div class="text-wrap">
                                              <em>
                                                Sau khi nhiều mũi tên được nạp trong một thời gian dài (3-5 giây), hãy bắn một lần.
                                              </em>
                                              <p>
                                                Sức mạnh của cái nỏ thấp và khả năng thâm nhập của nó rất thấp.Nó tốt cho việc tấn công nhóm giáp nhẹ, nhưng nó hơi miễn cưỡng chống lại bộ giáp trung bình.
                                              </p>
                                              <p>Tầm bắn rộng, nổ tung tấn công.</p>
                                              <em>
                                                Phòng vệ của bộ giáp ánh sáng rất gần gạo nếp, rất nhẹ và tiện lợi.
                                              </em>
                                              <p>Để tránh đâm và vẫy tay.</p>
                                              <p>
                                                Không giỏi bắn lửa.Khi bị tấn công bởi lửa, có nhiều khả năng sụp đổ.
                                              </p>
                                              <p>
                                                Mặc dù nó có thể chống lại những vũ khí nhẹ, nhưng tấn công trung tâm rất yếu.
                                              </p>
                                              <em>
                                                Không có khả năng cận chiến.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">Hệ thống bảo mật</h3>
                                            <div class="text-wrap">
                                              <em>Ba lô:</em>
                                              <p>
                                                Bộ giáp lưng nhẹ và thoải mái, mạnh mẽ để đâm và cắt, yếu đuối để bắn.
                                              </p>
                                              <em>Vô tuyến khai hỏa:</em>
                                              <p>
                                                Bắn nhiều mũi tên mỗi lần. Dùng tên mưa để gây tổn thương kẻ thù.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">kĩ năng</h3>
                                            <div class="text-wrap">
                                              <em>Quỷ xanh tấn công</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">Sự hình thành</h3>
                                            <div class="text-wrap">
                                              <em>núi</em>
                                              <div class="img">
                                                <i class="dot-6-3-1"></i>
                                                <i class="dot-6-3-2"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="kv-wrap">
                                      <div
                                        class="kv kv6"
                                        data-kv="1"
                                        data-name1="Hộ tống bọc thép"
                                        data-name2="Paju Chang Chang-young"
                                        data-name3="Paju Yeon Ro-young"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">Paju Chang Chang-young</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">Paju Yeon Ro-young</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </em>
                              </em>
                            </swiper-slide>
                          <div class="num">0{{corps.currentIndex}}</div>
                        </swiper>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide
                    class="swiper-slide"
                    style="width: 1815px; opacity: 0; transform: translate3d(-3630px, 0px, 0px);"
                  >
                    <div class="section-apparatus">
                      <div class="apparatus-content">
                        <div class="pagination-apparatus-wrap">
                          <div class="circle-wrap">
                            <div class="circle"></div>
                            <div class="nav-wrap">
                              <div
                                id="J-pagination-apparatus"
                                ref="J-pagination-apparatus"
                                class="swiper-pagination pagination-apparatus swiper-pagination-clickable swiper-pagination-bullets"
                              >
                              </div>
                            </div>
                            <div class="button-wrap">
                              <div class="button-prev swiper-button-disabled"></div>
                              <div class="button-next"></div>
                            </div>
                          </div>
                        </div>
                        <div class="apparatus-wrap">
                          <swiper
                            id="J-apparatus"
                            :options="apparatus.options"
                            class="swiper-container swiper-container-apparatus swiper-container-fade swiper-container-horizontal"
                          >
                              <swiper-slide
                                class="swiper-slide swiper-slide-active"
                                style="width: 1300px; opacity: 1; transform: translate3d(0px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Tháp vây hãm</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Chúng tôi dựng một cái lều bên ngoài lâu đài và sử dụng quân đội để tiến lên. Sau khi chạm vào tường, vách ngăn sẽ tự động hạ xuống và binh lính có thể sử dụng nó để trèo qua tường. Tuy nhiên, tháp bao vây có thể bị phá hủy bởi pháo trong khi di chuyển về phía trước.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img1"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide swiper-slide-next"
                                style="width: 1300px; opacity: 0; transform: translate3d(-1300px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Viên mãn</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Được làm bằng gỗ đồ sộ, vẻ đẹp của những người lính đè bẹp cổng. Trần nhà làm bằng mào, v.v., có thể ngăn mũi tên của kẻ thù tấn công.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img2"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-2600px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Ilwabongchong</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Trong Cung nhà Tống, cung và mũi tên được nạp bằng thuốc súng xuất hiện, và trong triều nhà Minh, chúng lại phát triển trở lại.Theo biên niên sử phim, khi quay phim, nó nổi tiếng với sự xuất hiện liên tục của ong như những con ong ra khỏi tổ ong.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img3"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-3900px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Đại bác Uruba</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Trong cuộc bao vây Constantinople ở 143, pháo đài khổng lồ dùng bởi đế chế Ottoman còn dài 52 mét, 17 tấn nặng và!Vũ khí được đặt theo tên nhà thiết kế và vô tình bị giết khi đại bác nổ súng.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img4"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-5200px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Lò lọc máu</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Một lò lọc máu là sự kết hợp giữa Sangno và máy phóng, và nó sử dụng một lực xoay lớn để bắn một khối đá. Tinh vi, tiện lợi và mảnh đạn có thể gây sát thương trên diện rộng cho kẻ địch ở gần điểm rơi.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img5"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-6500px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Một bức tranh riêng</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Nó là một loại vải bạt thời nhà Minh với pháo tương đối ngắn và nạp lửa, sỏi và cát. Tầm bắn tương đối ngắn, nhưng nó có thể gây sát thương cho các mục tiêu trong phạm vi khá rộng và là kẻ thù tự nhiên của các đơn vị cận chiến hạng nhẹ.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img6"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-7800px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Máy đốt ống đốt</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Nó là sự phát triển của một lò lọc máu sử dụng lực quay mùa xuân của Thời đại La Mã thần thánh. Cấu trúc nhỏ và tinh vi, nên khả năng phòng thủ tương đối yếu, nhưng tốc độ tải khá cao.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img7"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-9100px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Tên lửa Congreave</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Trong những ngày đầu, nó thường được sử dụng trong các trận hải chiến và nó có thể đốt cháy những con tàu lớn với 'Reaper trên biển' trong thời kỳ chiến hạm. Bằng cách phóng các tên lửa của bệ phóng theo trình tự, các tên lửa bay trong parabola đã có thể đốt cháy hoàn toàn kẻ thù.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img8"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-10400px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Nỏ bão Florence</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Nó được làm theo thiết kế của Da Vinci, và là một chiếc nỏ hình xe hơi với một cây gậy mạnh mẽ. Khi khai hỏa, động năng khổng lồ của mũi tên có thể xuyên thủng hệ thống phòng thủ và vũ khí chung của kẻ thù.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img9"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-11700px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Áo khoác bạc Description</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Khẩu súng chống máy bay để bắn than có một thân hình có thanh sắt phía trước và một buồng y tế được làm từ thép phía sau. Cần phải sử dụng một thanh chắn đặc biệt.Lớp vỏ có thể phóng đường rất cao để tấn công thành phố.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img10"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-13000px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Nô lệ buôn bán</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Cũng đã có thời kỳ của hiệp ước.Trong Cung nhà Tống, ba hay nhiều cung được dùng để bắn tên cùng nhau.Với cự ly nhiều hơn 500m, rất dễ sử dụng và rất tốt trong phạm vi và trong việc lắp đặt.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img11"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-14300px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Bình đá</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Nó được sử dụng rộng rãi trong trận vây thành, ném đá cuội để tấn công kẻ thù và tường thành.Tuy nó có sức mạnh, vì độ chính xác thấp, nhưng tốt hơn là tập hợp nhiều đội để tấn công cùng lúc.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img12"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-15600px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Đại bác đỏ</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Trong thế kỷ mười sáu, người Châu Âu lần đầu sử dụng súng trường nòng súng nặng, được đưa vào Trung Quốc vào thời Minh.The body of the gun is covered with red vải, which is called "red Cannon".Sau khi cải tiến và tái tạo, một số lượng nhỏ được triển khai ở pháo đài duyên hải và cửa chính bị đóng lại.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img13"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                              <swiper-slide
                                class="swiper-slide"
                                style="width: 1300px; opacity: 0; transform: translate3d(-16900px, 0px, 0px);"
                              >
                                <div class="slide-content">
                                  <div class="intro-wrap">
                                    <div class="title-wrap">
                                      <span class="title">Đại bác Pháp</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            Những khẩu súng trường và đạn rắn của bọn đại bàng trực tiếp bắn pháo tấn công kẻ thù với độ chính xác cao.Nhưng có giới hạn trong việc giết người.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="img-wrap">
                                    <div class="img img14"></div>
                                  </div>
                                </div>
                              </swiper-slide>
                          </swiper>
                        </div>
                        <div class="num">{{weapon.currentIndex}}</div>
                      </div>
                    </div>
                  </swiper-slide>
              </swiper>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide slide-inner slide-video" data-hash="video" style="height: 927px;">
          <div class="section section-inner">
            <div class="section-content">
              <div class="title-wrap">
                <div class="num">0{{video.currentIndex}}</div>
                <h2 class="title">{{video.title}}</h2>
                <h3 class="sub-title">{{video.subTitle}}</h3>
              </div>
              <div class="video">
                <swiper
                  id="J-video"
                  :options="video.options"
                  class="swiper-container swiper-container-video swiper-container-coverflow swiper-container-3d swiper-container-horizontal"
                >
                    <swiper-slide
                      class="swiper-slide slide-video"
                      data-mp4="N6hH6fGTwdY"
                      data-swiper-slide-index="0"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img1"></div>
                        <span class="btn-play" data-mp4="N6hH6fGTwdY"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video"
                      data-mp4="NRGLSWvmJs8"
                      data-swiper-slide-index="1"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img2"></div>
                        <span class="btn-play" data-mp4="NRGLSWvmJs8"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video"
                      data-mp4="2MjO8WKFFWE"
                      data-swiper-slide-index="2"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img3"></div>
                        <span class="btn-play" data-mp4="2MjO8WKFFWE"></span>
                      </div>
                    </swiper-slide>
                </swiper>
                <div
                  id="J-pagination-video"
                  class="swiper-pagination pagination-video swiper-pagination-clickable swiper-pagination-bullets"
                >
                  <span class="swiper-pagination-bullet"></span>
                  <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                  <span class="swiper-pagination-bullet"></span>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="footer">
              <div class="footer-wrap">
                <div class="footer-content">
                  <div class="footer-logo">
                    <a target="_blank" class="nie-logo nie-logo1"></a>
                    <a target="_blank" class="nie-logo nie-logo2"></a>
                    <a target="_blank" class="nie-logo nie-logo3"></a>
                  </div>
                  <div class="footer-text">
                    <p>
                      1997-
                      <span id="copyright-year">2020</span> NetEase,Inc All Rights Reserved
                    </p>
                    <p>Contact Us：</p>
                    <p>cbf_steam_support@boominggames.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      <!-- </div> -->
    </swiper>
    <div class="share-wrap">
            <div class="btn-side"></div>
            <div class="share">
                <a href="https://www.facebook.com/%EC%BB%A8%EC%BB%A4%EB%9F%AC%EC%8A%A4-%EB%B8%94%EB%A0%88%EC%9D%B4%EB%93%9C-102618004723092/?modal=admin_todo_tour"
                    class="facebook" target="_blank"></a>
                <a href="https://www.youtube.com/channel/UCdZKR9vsQslTj1pMS8Xo8wA" class="youtube" target="_blank"></a>
                <a href="https://cafe.naver.com/conquerorsblade" class="navercafe" target="_blank"></a>
            </div>
        </div>
        <div class="pop pop-video" style="display: none">
            <div class="mask"></div>
            <div class="pop-wrap">
                <div class="close"></div>
                <div class="pop-content">
                    <div class="video-box">

                    </div>
                </div>
            </div>
    </div>
    <login
      :cssShow="cssShow"
      @close="close()"
      :isShow="showLogin"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getStorage } from '@/utils/storage'
export default {
  name: 'index',
  data () {
    const _this = this
    return {
      token: getStorage('Authorization'),
      swiperOption: {
        allowTouchMove: false,
        direction: 'vertical',
        // autoHeight: true,
        simulateTouch: false,
        mousewheel: true,
        observer: true,
        observeParents: true,
        hashNavigation: true,
        loop: false,
        notNextTick: true,
        grabCursor: true,
        setWrapperSize: true,
        slidesPerView: 1,
        mousewheelControl: true,
        // height: window.innerHeight,
        resistanceRatio: 0,
        pagination: {
          el: '#J-pagination-out',
          clickable: !0,
          renderBullet: function (e, t) {
            const pageTitle = ['Trang Chủ', 'Tin Tức', 'Thế Giới Quan', 'Giới Thiệu', 'Media']
            return '<div class="' + t + '"><span>' + pageTitle[e] + '</span></div>'
          }
        }
      },
      gameSwiper: {
        currentIndex: 1,
        gameArray: [{
          tab: 'Khai mạc',
          video: {
            webm: 'https://z.v.netease.com/2019/1203/ae90b9cfbde10ca0a7f5ad8500f4e766.webm',
            mp4: 'https://z.v.netease.com/2019/1203/4ad53615f4fc2c603e593884fe041466qt.mp4'
          }
        }, {
          tab: 'Cuộc bao vây lớn',
          video: {
            webm: 'https://z.v.netease.com/2019/1203/2212238ad8dfa27ee5696ce6a2cfc4d3.webm',
            mp4: 'https://z.v.netease.com/2019/1203/3e69f33ec52e71539111d337757f13d2qt.mp4'
          }
        }, {
          tab: 'Chinh phục thế giới',
          video: {
            webm: 'https://z.v.netease.com/2019/1203/141c179d238d40e9b676ab26d09232d2.webm',
            mp4: 'https://z.v.netease.com/2019/1203/e807521e73479cafac88b9e3ca091459qt.mp4'
          }
        }, {
          tab: 'Hoạt động vũ khí',
          video: {
            webm: 'https://z.v.netease.com/2019/1203/9c7f6e3ffe5d17ce59a2edeb900aa5a5.webm',
            mp4: 'https://z.v.netease.com/2019/1203/bbd2bdf592ec721a02bcc268d777cc0eqt.mp4'
          }
        }],
        options: {
          effect: 'fade',
          fadeEffect: {
            crossFade: !0
          },
          allowTouchMove: !1,
          simulateTouch: !1,
          mousewheel: !1,
          loop: !1,
          pagination: {
            el: '#J-pagination-game',
            clickable: !0,
            renderBullet: function (e, t) {
              return '<div class="' + t + '"><span>' + _this.gameSwiper.gameArray[e].tab + '</span></div>'
            }
          },
          on: {
            slideChangeTransitionStart: function () {
              _this.gameSwiper.currentIndex = this.activeIndex + 1
            }
          }
        }
      },
      arms: {
        tabArray: ['Vũ Khí', 'Quân đoàn', 'pháp lệnh'],
        options: {
          initialSlide: 0,
          effect: 'fade',
          fadeEffect: {
            crossFade: !0
          },
          allowTouchMove: !1,
          simulateTouch: !1,
          mousewheel: !1,
          observer: !0,
          observeParents: !0,
          loop: !1,
          pagination: {
            el: '#J-pagination-arms',
            clickable: !0,
            renderBullet: function (e, t) {
              return '<div class="' + t + '"><span>' + _this.arms.tabArray[e] + '</span></div>'
            }
          }
        }
      },
      corps: {
        currentIndex: 1,
        corpsTabArray: ['Khiên nhỏ', '긴 자루류 부대', 'Túi dài', 'Quân đội', 'kỵ sĩ', 'Giáp'],
        options: {
          effect: 'fade',
          fadeEffect: {
            crossFade: !0
          },
          allowTouchMove: !1,
          simulateTouch: !1,
          mousewheel: !1,
          loop: !1,
          pagination: {
            el: '#J-pagination-corps',
            clickable: !0,
            renderBullet: function (e, t) {
              return '<div class="' + t + '"><span>' + _this.corps.corpsTabArray[e] + '</span></div>'
            }
          },
          on: {
            init: function () {},
            slideChangeTransitionStart: function () {
              _this.corps.currentIndex = this.activeIndex + 1
            }
          }
        }
      },
      weapon: {
        currentIndex: '01',
        options: {
          effect: 'fade',
          fadeEffect: {
            crossFade: !0
          },
          allowTouchMove: !1,
          simulateTouch: !1,
          mousewheel: !1,
          loop: !1,
          pagination: {
            el: '#J-pagination-weapon',
            clickable: !0
          },
          on: {
            slideChangeTransitionStart: function () {
              let index = this.realIndex + 1
              index = index > 9 ? index : '0' + index
              _this.weapon.currentIndex = index
            }
          }
        }
      },
      apparatus: {
        currentIndex: 1,
        options: {
          effect: 'fade',
          fadeEffect: {
            crossFade: !0
          },
          allowTouchMove: !1,
          simulateTouch: !1,
          mousewheel: !1,
          loop: !1,
          pagination: {
            el: '#J-pagination-apparatus',
            clickable: !0,
            renderBullet: function (e, t) {
              return '<div class="' + t + '"><span></span></div>'
            }
          },
          navigation: {
            nextEl: '.pagination-apparatus-wrap .button-next',
            prevEl: '.pagination-apparatus-wrap .button-prev'
          },
          on: {
            init: function () {},
            paginationRender: function (s, paginationEl) {
              let c = -138 * Math.PI / 180
              const all = document.querySelectorAll('#J-pagination-apparatus .swiper-pagination-bullet')
              for (var e = 0; e < 14; e++) {
                var t = 840 * (1 + Math.cos(c)) + 'px'
                var i = 840 * (1 + Math.sin(c)) + 'px'
                all[e].setAttribute('style', `top: ${i};left:${t}`)
                c += 16 * Math.PI / 180
              }
            },
            slidePrevTransitionStart: function () {
              var e = this.activeIndex
              if (e === 6) {
                _this.$refs['J-pagination-apparatus'].style.transform = 'rotate(0deg)'
              }
            },
            slideNextTransitionStart: function () {
              var e = this.activeIndex
              if (e === 7) {
                _this.$refs['J-pagination-apparatus'].style.transform = 'rotate(-112deg)'
              }
            },
            slideChangeTransitionStart: function () {
              let index = this.realIndex + 1
              index = index > 9 ? index : '0' + index
              _this.weapon.currentIndex = index
            }
          }
        }
      },
      video: {
        videoArray: [{
          title: 'Video phim',
          subTitle: 'Chuẩn bị cho công văn',
          mp4: 'N6hH6fGTwdY'
        }, {
          title: 'Đoạn phim hoạt hình',
          subTitle: 'Sự ra đời của một anh hùng',
          mp4: 'NRGLSWvmJs8'
        }, {
          title: 'Video phim',
          subTitle: 'Bắt đầu cuộc chiến',
          mp4: '2MjO8WKFFWE'
        }],
        currentIndex: 1,
        title: 'Video phim',
        subTitle: 'Chuẩn bị cho công văn',
        options: {
          effect: 'coverflow',
          grabCursor: !0,
          centeredSlides: !0,
          slidesPerView: 'auto',
          simulateTouch: !1,
          roundLengths: !0,
          coverflowEffect: {
            rotate: 0,
            stretch: 250,
            depth: 300,
            modifier: 1,
            slideShadows: !1
          },
          autoplay: !1,
          loop: !0,
          navigation: {
            nextEl: '.slide-video .swiper-button-next',
            prevEl: '.slide-video .swiper-button-prev'
          },
          pagination: {
            el: '#J-pagination-video',
            clickable: !0
          },
          on: {
            init: function () {
            //   var e = n.videoArray[0]
            //   $('.slide-video .title-wrap .title').text(e.title), $('.slide-video .title-wrap .sub-title').text(e.subTitle)
            },
            slideChangeTransitionStart: function () {
              const index = this.realIndex
              const curItem = _this.video.videoArray[index]
              _this.video.currentIndex = (index + 1)
              _this.video.title = curItem.title
              _this.video.subTitle = curItem.subTitle
            }
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['showLogin', 'cssShow'])
  },
  methods: {
    ...mapActions(['showLoginAction', 'showForgotAction']),
    close () {
      this.showLoginAction(false)
      this.showForgotAction(false)
    }
  }
}
</script>
