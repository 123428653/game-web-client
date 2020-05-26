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
      <a href="https://survey.163.com/htmls/2zqc23/paper.html" target class="nav-link">
        <!-- đăng nhập -->
        Trung tâm cá nhân
      </a>
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
                                    <span class="title">창</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>독특한 형태의 창.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          기존 장창에 비해 디자인이 복잡하다. 곡선 형태의 창끝 뒤에
                                          날카로운 가시들이 박혀 있다.창끝으로 찌르고 창자루로 타격할 수
                                          있으며 기술 응용 방식이 다양하다.돌격과 격투에서 모두 뛰어난
                                          활약을 한다.
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
                                    <span class="title">단궁</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>
                                          제작할 때 위력에 중점을 두는 장궁과 달리 단궁은 휴대성과 출격
                                          속도를 중시한다.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          이러한 이유로 단궁은 장궁보다 훨씬 더 간편하며 화살도 더 가볍다.
                                          장궁은 초장거리 공격에 적합하지만 단궁은 비교적 가까운 곳을
                                          끊임없이 지속적으로 공격하는 경향이 있다.경량 갑옷에 장착한다.
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
                                    <span class="title">야칼</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>야성이 넘치는 야칼.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          4척~7척 길이에 활처럼 휘어진 칼 몸을 지녔으며 주로 도공
                                          마스터들이 제작한다.야칼을 크게 휘두를 때면 그 모습이 마치
                                          사신이 춤을 추는 것과 같아 적들이 숨을 죽인다.검술에 정통한
                                          무사나 휘두를 수 있는 병기다.
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
                                    <span class="title">화승총</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>사나운 열병기 화승총</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          철제보다 구리제가 더 많으며 대부분 파이프 형태를 띈다.엄청난
                                          위력을 자랑하며 철사를 넣으면 유산탄을 발사할 수 있다.안정성은
                                          높지 않지만 살상력만큼은 견줄 만한 무기가 없다.
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
                                    <span class="title">쌍도</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>
                                          단도는 가볍고 사용하기에 편리할 뿐더러 다양한 기술을 펼치는 데
                                          용이하지만 교활하고 위력이 부족하다.
                                        </p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          쌍단도를 무기로 사용하려면 기이한 몸놀림과 침착한 인내심은
                                          물론이고, 하나씩 완벽하게 준비해 습격하는 자세가 필요하다.
                                          잠복을 원활하게 하기 위해서는 잡음이 나지 않는 착장과 안전하게
                                          숨는 것이 가장 중요하다.경량 갑옷에 장착한다.
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
                                    <span class="title">장궁</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>안정적으로 활을 쏠 수 있는 장궁.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          활 재질은 부드럽고 튼튼하며 탁월한 신축성을 지녔다. 반면 화살대는
                                          평평하고 화살촉은 잎사귀 같다.백 보 밖에 있는 적을 저격할 수
                                          있으며 원거리 전투에 적합하다.힘과 민첩함을 갖춘 사람만이 장궁의
                                          진정한 위력을 발휘할 수 있다.
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
                                    <span class="title">관도</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>묵직한 힘을 발휘하는 관도.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          약간 휘어진 칼날에 길고 곧은 딱딱한 나무 자루로 만들어진 아주
                                          예리한 긴 병기다.관도의 진정한 가치는 크게 휘둘러 베는 데
                                          있다. 적군에게 자연스럽게 엄청난 충격을 가할 수 있다.강한 힘이
                                          필요한 명장들에게 사랑받는 무기이다.
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
                                    <span class="title">도순</span>
                                    <span class="sub-title"></span>
                                    <span class="line"></span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-item intro-item1">
                                      <h3 class="intro-title">무기특성</h3>
                                      <div class="text">
                                        <p>동쪽 전장에서 이름난 무기인 도순.</p>
                                      </div>
                                      <span class="line"></span>
                                    </div>
                                    <div class="intro-item intro-item2">
                                      <h3 class="intro-title">역사근원</h3>
                                      <div class="text">
                                        <p>
                                          예리한 칼과 튼튼한 방패는 전장에서 아주 실용적인 조합이다.도보전에
                                          적합하며, 여기에 중갑까지 갖춘다면 전장에서 생존률은 더 높아질
                                          것이다.인상적인 무기 형상은 전사의 상징이 되었다.
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
                          <div class="swiper-pagination-bullet swiper-pagination-bullet-active">
                            <span>작은 방패류 부대</span>
                          </div>
                          <div class="swiper-pagination-bullet">
                            <span>긴 자루류 부대</span>
                          </div>
                          <div class="swiper-pagination-bullet">
                            <span>투창류 부대</span>
                          </div>
                          <div class="swiper-pagination-bullet">
                            <span>원거리 부대</span>
                          </div>
                          <div class="swiper-pagination-bullet">
                            <span>기병 계열 부대</span>
                          </div>
                          <div class="swiper-pagination-bullet">
                            <span>등갑 계열 부대</span>
                          </div>
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
                                    <span class="title">백월 산민</span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-left">
                                      <div class="intro-item intro-item-1">
                                        <h3 class="intro-title">주요 행동</h3>
                                        <div class="text-wrap">
                                          <em>
                                            목패 비석과 땔나무용 칼을 사용하여 전투에
                                            참여합니다.
                                          </em>
                                          <p>
                                            갑옷을 입지 않았거나 경갑을 입은 적에게는 유효한 피해를
                                            입힐 수 있으나 중등 이상의 갑옷 상대시 역부족합니다.
                                          </p>
                                          <p>칼을 마구 휘두르며 쳬계적인 공격형식이 없습니다.</p>
                                          <p>전체 목표를 선정하지 못하며 전술 구사 불가.</p>
                                        </div>
                                      </div>
                                      <div class="intro-item intro-item-2">
                                        <h3 class="intro-title">부대 특성</h3>
                                        <div class="text-wrap">
                                          <em>채집 숙련가：</em>
                                          <p>
                                            민병은 주로 전투 시에 자원을 제공하기 위한 농사와 채집을
                                            합니다.
                                          </p>
                                          <em>총알받이：</em>
                                          <p>
                                            모집 편성 비용이 비교적 저렴하지만 전투력이 비교적 낮아
                                            대부분 총알받이로 사용됩니다.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="intro-right">
                                      <div class="intro-item intro-item-3">
                                        <h3 class="intro-title">스킬</h3>
                                        <div class="text-wrap">
                                          <em>약초:</em>
                                          <p>약초를 사용하여 일정 시간 HP를 느리게 회복합니다.</p>
                                        </div>
                                      </div>
                                      <div class="intro-item intro-item-4">
                                        <h3 class="intro-title">진형</h3>
                                        <div class="text-wrap">
                                          <em>산개진</em>
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
                                    <span class="title">낭산소 도순병</span>
                                  </div>
                                  <div class="intro">
                                    <div class="intro-left">
                                      <div class="intro-item intro-item-1">
                                        <h3 class="intro-title">주요 행동</h3>
                                        <div class="text-wrap">
                                          <em>
                                            단거리 돌격을 수차례 진행함으로써 적의 진형을 무너뜨리는데
                                            유능합니다.
                                            <p></p>
                                            <p>돌격의 쿨타임 및 거리가 짧으며 속도가 빠릅니다.</p>
                                            <p>
                                              진형을 짜서 단체 돌격은 뛰어나지만 각개 전투는
                                              비교적으로 취약합니다.
                                            </p>
                                          </em>
                                        </div>
                                        <em></em>
                                      </div>
                                      <div class="intro-item intro-item-2">
                                        <em>
                                          <h3 class="intro-title">부대 특성</h3>
                                          <div class="text-wrap">
                                            <em>승승장구:</em>
                                            <p>돌격 효과가 뛰어난 부대입니다.</p>
                                            <em>
                                              함락
                                              무쌍:
                                            </em>
                                            <p>
                                              적진에 돌격하여 전투의 최전선에서 적을 공격하는 것에
                                              능합니다.
                                            </p>
                                          </div>
                                        </em>
                                      </div>
                                      <em></em>
                                    </div>
                                    <em>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">스킬</h3>
                                          <div class="text-wrap">
                                            <em>돌격:</em>
                                            <p>
                                              거리가 멀지는 않지만 돌격 위력이 강력합니다.쿨타임이
                                              짧습니다.
                                            </p>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">진형</h3>
                                          <div class="text-wrap">
                                            <em>산개진 충시진 순장진</em>
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
                                      <span class="title">척가군 돌격대</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">주요 행동</h3>
                                          <div class="text-wrap">
                                            <em>
                                              빠르게 적진으로 돌격해 적을 격추하는 것에
                                              능합니다.
                                            </em>
                                            <p>돌격 시 방패로 원거리 공격을 막는 것에 능숙합니다.</p>
                                            <p>반신찰갑으로 상반신을 잘 보호할 수 있습니다.</p>
                                            <em>
                                              공격으로 다수의 적에게 피해를 입힐 수
                                              있습니다.
                                            </em>
                                            <em>
                                              속도가
                                              빠릅니다.
                                            </em>
                                            <em>
                                              적 선정 시 원거리 공격과
                                              장군을 우선으로 선정하는 전술을
                                              구사합니다.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">부대 특성</h3>
                                          <div class="text-wrap">
                                            <em>척가 도법：</em>
                                            <p>척가 도법으로 적에게 피해를 입힐 수 있습니다.</p>
                                            <em>모락 무쌍：</em>
                                            <p>
                                              적진으로 돌격하여 전투의 최전선에서 적을 공격하는
                                              것에 능합니다.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">스킬</h3>
                                          <div class="text-wrap">
                                            <em>돌격：</em>
                                            <p>
                                              돌격 위력이 강력하며 돌격 가능한 거리가
                                              깁니다.쿨타임 보통.
                                              <em>척가 도법：</em>
                                            </p>
                                            <p>
                                              발동 후 일정 시간내 AOE 피해를 입힐 수
                                              있습니다.
                                            </p>
                                            <em>장군 보호</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">진형</h3>
                                          <div class="text-wrap">
                                            <em>산개진 장군 보호진</em>
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
                                      data-name1="백월 산민"
                                      data-name2="낭산소 도순병"
                                      data-name3="척가군 돌격대"
                                    ></div>
                                    <div class="switch-button-wrap">
                                      <div class="switch-button" data-thumb="2">
                                        <p class="kv-name">낭산소 도순병</p>
                                      </div>
                                      <div class="switch-button" data-thumb="3">
                                        <p class="kv-name">척가군 돌격대</p>
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
                                      <span class="title">감주 변경 주민</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">주요 행동</h3>
                                          <div class="text-wrap">
                                            <em>임시로 소집한 용병입니다.</em>
                                            <em>
                                              날카롭게
                                              깎은 나무막대를 들고 싸웁니다.
                                            </em>
                                            <p>
                                              그들의 창은 갑옷을 입지 않았거나 경갑을 입은
                                              병사에게는 유효하나, 중등 이상의 방어구에는 통하지
                                              않습니다.
                                            </p>
                                            <p>
                                              싸움 방식은 체계 없이 앞에 보이는 적을 마구
                                              찌릅니다.
                                            </p>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">부대 특성</h3>
                                          <div class="text-wrap">
                                            <em>특성 설명이 없습니다.</em>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">스킬</h3>
                                          <div class="text-wrap">
                                            <em>스킬 없음 X</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">진형</h3>
                                          <div class="text-wrap">
                                            <em>산개진</em>
                                            <div class="img">
                                              <i class="dot-2-1-1"></i>
                                            </div>
                                            <p>
                                              중기까지 내부 성장한 후 밀집한 횡렬진을 구사
                                              가능합니다.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="intro-wrap corps-intro-2">
                                    <div class="title-wrap">
                                      <span class="title">청서 창병 부대</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">주요 행동</h3>
                                          <div class="text-wrap">
                                            <em>
                                              비교적 많은 진형을 구사할 수 있으며 진형을
                                              구축하여 바리케이드로 작전하는 것에
                                              능합니다.
                                            </em>
                                            <p>진형을 구축한 상태에서 작전 능력이 뛰어납니다.</p>
                                            <p>진형을 구축 속도가 빠릅니다.</p>
                                            <p>
                                              바리케이드 진형이 안정도가 높아 잘 부서지지
                                              않습니다.
                                            </p>
                                            <em>
                                              각개 병사의 전투 실력이
                                              부족하여 진형이 부서지면 작전 능력이
                                              떨어집니다.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">부대 특성</h3>
                                          <div class="text-wrap">
                                            <em>다양한 발전：</em>
                                            <p>
                                              각종의 전술을 훈련할 수 있으며, 발전 방향이
                                              다양합니다.
                                            </p>
                                            <em>총알받이：</em>
                                            <p>
                                              모집 편성 비용이 비교적 저렴하지만 전투력이 비교적
                                              낮아 대부분 총알받이로 사용됩니다.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">스킬</h3>
                                          <div class="text-wrap">
                                            <em>바리케이드</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">진형</h3>
                                          <div class="text-wrap">
                                            <em>산개진 힁렬진</em>
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
                                      <span class="title">스위스 할버드병 부대</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">주요 행동</h3>
                                          <div class="text-wrap">
                                            <em>
                                              창 끝으로는 찌르기, 도끼로는 베기 등 장창 활용
                                              전술로 적을 공격하는 데에 능합니다.
                                            </em>
                                            <p>
                                              진형이 비교적 완화하여 장창병이 각개 격투 능력을
                                              발휘하는데 편합니다.
                                            </p>
                                            <p>근거리 격투에 능합니다.</p>
                                            <em>
                                              중갑 유닛에
                                              피해를 입힐 수 있습니다.
                                            </em>
                                            <em>
                                              기병과
                                              조우 시 비교적 밀집한 방진을 펼쳐 바리케이트를
                                              치며 대항하나 장창보다 효과가 뒤떨어집니다.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">부대 특성</h3>
                                          <div class="text-wrap">
                                            <em>반 기병 선봉대：</em>
                                            <p>
                                              기병에 잘 대항하여 기병 병종에게 비교적 큰 피해를
                                              입힙니다.
                                            </p>
                                            <em>폭렬 관통：</em>
                                            <p>
                                              적의 장갑을 관통해 방어도가 높은 적에게 유효한
                                              피해를 입힙니다.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">스킬</h3>
                                          <div class="text-wrap">
                                            <em>돌격</em>
                                            <em>바리케이드</em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">진형</h3>
                                          <div class="text-wrap">
                                            <em>산개진 방진</em>
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
                                        <p class="kv-name">청서 창병 부대</p>
                                      </div>
                                      <div class="switch-button" data-thumb="3">
                                        <p class="kv-name">스위스 할버드병 부대</p>
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
                                      <span class="title">하황 향군</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">주요 행동</h3>
                                          <div class="text-wrap">
                                            <em>
                                              원거리 공격과 근거리 격투에 모두 능하나 근거리
                                              격투에 특히 월등합니다.
                                            </em>
                                            <p>
                                              보유한 투창의 수가 적습니다. (2-3 개)투창
                                              장사의 투척 사거리가 멀지는 않지만 강력한 위력
                                              때문에 중량 갑옷을 꿰뚫을 수 있습니다.
                                            </p>
                                            <p>
                                              방패와 단창으로 작전하여 근거리 격투 능력이
                                              도순보다는 조금 뒤떨어집니다.
                                            </p>
                                            <em>
                                              투창
                                              과정에서 적이 접근하면 근거리 격투 상태로 육탄전을
                                              벌입니다.
                                            </em>
                                            <em>
                                              투창에 목적성이 없어 가장
                                              가까이 있는 적에게 공격합니다.
                                            </em>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <h3 class="intro-title">부대 특성</h3>
                                          <div class="text-wrap">
                                            <em>용맹한 근접전:</em>
                                            <p>근거리 격투 능력이 비교적 뛰어납니다.</p>
                                            <em>한정 수량 중형 창:</em>
                                            <p>
                                              투창 위력이 비교적 높지만 창의 수량이 매우
                                              적습니다.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="intro-right">
                                        <div class="intro-item intro-item-3">
                                          <h3 class="intro-title">스킬</h3>
                                          <div class="text-wrap">
                                            <em>투창:</em>
                                            <p>앞에 있는 적에게 투창합니다.</p>
                                          </div>
                                        </div>
                                        <div class="intro-item intro-item-4">
                                          <h3 class="intro-title">진형</h3>
                                          <div class="text-wrap">
                                            <em>산개진 횡렬진</em>
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
                                      <span class="title">귀향 패수</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-left">
                                        <div class="intro-item intro-item-1">
                                          <h3 class="intro-title">주요 행동</h3>
                                          <div class="text-wrap">
                                            <em>
                                              쉬운 횡렬진으로 정면을 봉쇄하고 대원들을
                                              엄호합니다.
                                            </em>
                                            <em>
                                              산개진 상태에서는 매우
                                              취약하고 작전 능력 기능을
                                              상실합니다.
                                            </em>
                                            <em>
                                              방패가 파괴된 후 방어
                                              구사 능력이 현저히 떨어집니다.
                                            </em>
                                            <em>
                                              대열
                                              정렬 속도가 비교적
                                              느립니다.
                                            </em>
                                            <em>
                                              뒤쪽에서 공격당하는 것에
                                              취약합니다.
                                            </em>
                                            <em>
                                              공격 능력이 매우
                                              떨어집니다./em&gt;
                                            </em>
                                          </div>
                                          <em></em>
                                        </div>
                                        <div class="intro-item intro-item-2">
                                          <em>
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>정면 방어:</em>
                                              <p>
                                                정면 방패의 방어력이 뛰어나지만 뒤쪽 방어는
                                                비교적 취약합니다.
                                              </p>
                                              <em>
                                                백어택
                                                약점:
                                              </em>
                                              <p>
                                                뒤쪽 공격을 당할 시 더 많은 피해를
                                                받습니다.
                                              </p>
                                            </div>
                                          </em>
                                        </div>
                                        <em></em>
                                      </div>
                                      <em>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>스킬이 없습니다</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>순장진</em>
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
                                        <span class="title">백산흑수 철부도</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                분산하여 적군에게 돌격해 AOE 데미지
                                                피해를 입히는 데
                                                능합니다.
                                              </em>
                                              <em>
                                                삼단진을 쳐서
                                                충돌능력을 강화하여 방어진을 치고 있는
                                                적군부대의 돌파구를
                                                만듭니다.
                                              </em>
                                              <em>
                                                진형을 구사하여
                                                진형 방어 작전에 능합니다.
                                              </em>
                                              <p>
                                                회원진, 횡렬진 등 다양한 방어 진형을 구사
                                                가능하며, 방어진을 유지합니다.
                                              </p>
                                              <em>
                                                도리깨로 적을 넉백시키며, 데미지 피해를
                                                입힙니다.
                                              </em>
                                              <em>
                                                장검으로 적에게
                                                관통 및 막대한 피해를 입힙니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>양용 무기:</em>
                                              <p>
                                                두 가지 무기를 가지고 있으며, 상황에 맞게
                                                사용합니다.
                                              </p>
                                              <em>둔기 충격</em>
                                              <p>둔기로 적을 강타하여 데미지 피해를 입힙니다.</p>
                                              <em>특제 중갑:</em>
                                              <p>
                                                두꺼운 갑옷을 입어 방어능력이 비교적
                                                높습니다.
                                              </p>
                                              <em>신중하게 진군:</em>
                                              <p>
                                                기동성이 비교적 낮아 빠르게 진입할 수
                                                없습니다.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>스킬이 없습니다.</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 횡렬진 충시진</em>
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
                                        data-name1="하황 향군"
                                        data-name2="귀향 패수"
                                        data-name3="백산흑수 철부도"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">귀향 패수</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">백산흑수 철부도</p>
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
                                        <span class="title">노르만 석궁수</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                손으로 석궁을 다루기 때문에 석궁의 위력은
                                                낮은 편입니다.
                                              </em>
                                              <p>사거리가 짧습니다.</p>
                                              <p>
                                                관통 능력이 나쁘지 않고 종갑 적군에게 위협이
                                                됩니다.
                                              </p>
                                              <em>
                                                장전 속도가 비교적
                                                빠릅니다.
                                              </em>
                                              <em>
                                                정확도가 비교적
                                                낮습니다.
                                              </em>
                                              <em>
                                                근거리 격투 능력을
                                                가지고 있지 않습니다.
                                              </em>
                                              <em>
                                                높은
                                                곳에서 아래를 향해 사격할 시 사격 능력은
                                                상당히 출중하나 포물선 사격 능력은 갖추지
                                                못하고 있습니다..
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>직선 사격:</em>
                                              <p>포물선 사격능력 부족.</p>
                                              <em>
                                                산란
                                                사격:
                                              </em>
                                              <p>사격 정확도가 비교적 낮습니다.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>지정 사격</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 삼단진 일제 사격진</em>
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
                                        <span class="title">전서 단련 궁수</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>사격 훈련을 얼마 받지 못했습니다.</em>
                                              <p>사거리가 짧고 정확도가 낮습니다.</p>
                                              <p>
                                                화살을 마구 사격할 줄만 알고 정확히 사격하는
                                                능력은 부족합니다.
                                              </p>
                                              <p>
                                                조준할 필요가 없어서 사격 속도가 비교적
                                                빠릅니다.
                                              </p>
                                              <p>
                                                근거리 격투는 불가능하며 적과 근접 전투시
                                                도망칩니다.
                                              </p>
                                              <em>
                                                인원수가 비교적
                                                많습니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>집단 작전:</em>
                                              <p>편제 인원수가 비교적 많습니다.</p>
                                              <em>미약한 관통:</em>
                                              <p>
                                                관통 능력이 비교적 낮으며, 경갑 유닛에게만
                                                유효 피해를 입힐 수 있습니다.
                                              </p>
                                              <em>운명적 사격:</em>
                                              <p>사격 정확도가 매우 낮습니다.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>스킬이 없습니다.</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 어린진 익진</em>
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
                                        <span class="title">천웅 신궁영</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                무거운 콤파운드 리커브 궁을
                                                사용합니다.
                                              </em>
                                              <p>사격 빈도가 비교적 낮습니다.</p>
                                              <p>
                                                삼각뿔로 이루어진 날카로운 화살의 관통력이
                                                매우 높고 피해량도 높습니다.
                                              </p>
                                              <p>
                                                무거운 화살로 인하여 사거리가 비교적
                                                짧습니다.
                                              </p>
                                              <em>
                                                근거리 전투 능력을
                                                가지고 있지 않습니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>정확한 사격:</em>
                                              <p>사격 정확도가 비교적 높습니다.</p>
                                              <em>관통 화살:</em>
                                              <p>
                                                특제의 관통 화살이 중갑을 꿰뚫고 피해를 입힐
                                                수 있습니다.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>지정 사격</em>
                                              <em>관통 화살</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 어린진</em>
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
                                        data-name2="전서 단련 궁수"
                                        data-name3="천웅 신궁영"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">전서 단련 궁수</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">천웅 신궁영</p>
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
                                        <span class="title">고밀 궁마대</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                안전 구역까지 진행한 후 보조적인 사격을
                                                발동합니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>기동 유격</em>
                                              <em>
                                                빠른
                                                기동성
                                              </em>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>스킬이 없습니다</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>완화 방진 학익진</em>
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
                                        <span class="title">유림 표기장군영</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                삼단진(3줄)으로 밀집한 돌격을 진행하고
                                                기병창으로 적을 찌르고
                                                넉백시킵니다.
                                              </em>
                                              <em>
                                                적에게 접근한
                                                후 진형을 흐트리는것을 주요 목적으로
                                                합니다.
                                              </em>
                                              <em>
                                                돌격 후 방향을
                                                돌리는 것에 비교적 긴 시간이 걸립니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>혈전 기병:</em>
                                              <p>
                                                돌격 외에도 무기를 사용하여 적과 육탄전을
                                                벌일 수 있는 기병입니다.
                                              </p>
                                              <em>빠른 기동성：</em>
                                              <p>
                                                돌격 거리가 비교적 짧으며, 지속 시간이
                                                짧습니다.
                                              </p>
                                              <em>화기 방어:</em>
                                              <p>화승총 병종류에 대한 저항성이 높습니다.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>돌격(쿨타임이 짧습니다)</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>완화 방진 설형진 횡렬진</em>
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
                                        <span class="title">관녕 철기병</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                사격 돌격을 이용하여 적을 살상한 후 근거리
                                                격투를 발동하는 데
                                                능합니다.
                                              </em>
                                              <em>
                                                설형진을 이용하여
                                                적군 진형을 부숴 데미지 피해를 입힙니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>사격 돌격:</em>
                                              <p>돌격 시 삼안총으로 사격을 할 수 있습니다.</p>
                                              <em>둔기 충격:</em>
                                              <p>둔기로 적을 공격하여 데미지 피해를 입힙니다.</p>
                                              <em>중갑:</em>
                                              <p>두꺼운 갑옷을 입어 방어력이 비교적 높습니다.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>돌격</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 구형진 충시진</em>
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
                                        data-name1="고밀 궁마대"
                                        data-name2="유림 표기장군영"
                                        data-name3="관녕 철기병"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">유림 표기장군영</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">관녕 철기병</p>
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
                                        <span class="title">호위 등갑대</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                장착한 등갑은 철갑과 비슷한 방어 능력을
                                                가지면서도 매우 가볍고 기동성이
                                                뛰어납니다.
                                              </em>
                                              <p>찌르기와 휘두르기를 막을 수 있습니다.</p>
                                              <p>
                                                불 공격에 약합니다. 불 공격을 당한 경우
                                                높은 확률로 와해됩니다.
                                              </p>
                                              <em>
                                                가볍고
                                                편한 등갑은 경량 무기는 막을 수 있지만
                                                중공격에 약합니다.
                                              </em>
                                              <p>공격 시 일정한 방패 방어가 가능합니다.</p>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>등갑:</em>
                                              <p>
                                                등갑은 가볍고 편하면서 찌르기와 휘두르기
                                                공격에 강하나 불에 약합니다.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>돌격</em>
                                              <p>
                                                돌격 위력은 보통 수준이나 돌격 거리가 길며
                                                속도가 빠릅니다.
                                              </p>
                                              <p>쿨타임은 보통.</p>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 횡렬진 충시진</em>
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
                                        <span class="title">파주 장창영</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                주로 진형을 이용한 전투 훈련을 받았으며
                                                바리케이드 진형을 구사할 수 있으나 각개
                                                전투는 비교적
                                                약합니다.
                                              </em>
                                              <em>
                                                착용한 등갑의
                                                방어력은 찰갑과 비슷하지만 가벼운 무게를
                                                자랑합니다.
                                              </em>
                                              <p>
                                                찌르기와 휘두르기를 막을 수 있습니다.불
                                                공격에 약합니다. 불 공격을 당하면 높은
                                                확률로 와해됩니다.
                                              </p>
                                              <p>
                                                경량 무기는 막을 수 있지만 중공격에
                                                약합니다.
                                              </p>
                                              <p>
                                                우수한 기동성을 가지고 있어서 산지에서의
                                                전투에 유리합니다.
                                              </p>
                                              <em>
                                                창 끝을
                                                금탕에 끓여 적에게 투사하여 맞출 시 적을
                                                중독시켜 허약하게 만듭니다.
                                              </em>
                                              <p>적의 공격 속도와 피해를 낮춥니다.</p>
                                              <p>
                                                금탕의 끓인 창 끝은 녹슬기 쉽고 관통 능력이
                                                좋지 않으나, 피해량은 표준 수치에
                                                속합니다.
                                              </p>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>등갑：</em>
                                              <p>
                                                등갑은 가볍고 편하면서 찌르기와 휘두르기
                                                공격에 강하나 불에 약합니다.
                                              </p>
                                              <em>금탕 독:</em>
                                              <p>
                                                무기에 금탕을 발라 적을 허약하게 만들고
                                                지속적 피해를 입힙니다.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>스킬이 없습니다.</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진</em>
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
                                        <span class="title">파주 연노영</span>
                                      </div>
                                      <div class="intro">
                                        <div class="intro-left">
                                          <div class="intro-item intro-item-1">
                                            <h3 class="intro-title">주요 행동</h3>
                                            <div class="text-wrap">
                                              <em>
                                                비교적 긴 시간(3-5 초)을 걸려 여러
                                                개의 화살을 장전한 후 한 번에
                                                쏩니다.
                                              </em>
                                              <p>
                                                연노는 위력이 비교적 낮은 편이라 관통 능력이
                                                비교적 떨어집니다. 경갑 유닛을 공격하기에
                                                적합하나 중형 갑옷을 상대하기에는 무리가
                                                있습니다.
                                              </p>
                                              <p>사격 범위가 넓고 폭발적인 공격이 가능합니다.</p>
                                              <em>
                                                착용한 등갑은 방어력이 찰갑에
                                                가까우며 매우 가볍고 편리합니다.
                                              </em>
                                              <p>찌르기와 휘두르기를 막을 수 있습니다.</p>
                                              <p>
                                                불 공격에 약합니다. 불 공격을 당하면 높은
                                                확률로 와해됩니다.
                                              </p>
                                              <p>
                                                경량 무기는 막을 수 있지만 중공격에는
                                                약합니다.
                                              </p>
                                              <em>
                                                근거리 격투 능력을
                                                갖추지 않고 있습니다.
                                              </em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-2">
                                            <h3 class="intro-title">부대 특성</h3>
                                            <div class="text-wrap">
                                              <em>등갑:</em>
                                              <p>
                                                등갑은 가볍고 편하면서 찌르기와 휘드르기
                                                공격에 강하나 불에 약합니다.
                                              </p>
                                              <em>연발 쇠뇌틀:</em>
                                              <p>
                                                한 번에 여러 개의 화살 발사하여 화살비로
                                                적에게 피해를 입힙니다.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="intro-right">
                                          <div class="intro-item intro-item-3">
                                            <h3 class="intro-title">스킬</h3>
                                            <div class="text-wrap">
                                              <em>지정 공격</em>
                                            </div>
                                          </div>
                                          <div class="intro-item intro-item-4">
                                            <h3 class="intro-title">진형</h3>
                                            <div class="text-wrap">
                                              <em>산개진 궁형진</em>
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
                                        data-name1="호위 등갑대"
                                        data-name2="파주 장창영"
                                        data-name3="파주 연노영"
                                      ></div>
                                      <div class="switch-button-wrap">
                                        <div class="switch-button" data-thumb="2">
                                          <p class="kv-name">파주 장창영</p>
                                        </div>
                                        <div class="switch-button" data-thumb="3">
                                          <p class="kv-name">파주 연노영</p>
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
                                class="swiper-pagination pagination-apparatus swiper-pagination-clickable swiper-pagination-bullets"
                              >
                                <div
                                  class="swiper-pagination-bullet swiper-pagination-bullet-active"
                                  style="top: 277.93px; left: 215.758px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 127.64px; left: 394.868px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 32.5402px; left: 608.465px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 0px; left: 840px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 32.5402px; left: 1071.54px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 127.64px; left: 1285.13px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 277.93px; left: 1464.24px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 471.768px; left: 1594.99px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 694.136px; left: 1667.24px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 927.804px; left: 1675.4px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 1154.67px; left: 1618.83px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 1357.16px; left: 1501.93px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 1519.57px; left: 1333.74px;"
                                >
                                  <span></span>
                                </div>
                                <div
                                  class="swiper-pagination-bullet"
                                  style="top: 1629.34px; left: 1127.3px;"
                                >
                                  <span></span>
                                </div>
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
                                      <span class="title">공성탑</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            성 밖에 가설해 부대를 이용해 전진시킨다. 성벽에 접촉한 후
                                            칸막이가 자동으로 내려오는데, 병사들은 그것을 이용해 성벽
                                            위로 올라갈 수 있다. 하지만 공성탑은 전진 중에 화포에
                                            의해 파괴될 수 있다.
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
                                      <span class="title">충차</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            거대한 원목으로 만들었으며, 사병의 미는 힘으로 성문을
                                            부순다. 볏집 등으로 만든 천장으로 적의 화살 공격을 막을
                                            수 있다.
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
                                      <span class="title">일와봉총</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            중국 송나라 때에 이미 화약을 동력원으로 한 활과 화살이
                                            나타났으며, 명나라 때에는 한 층 더 발전했다.
                                            '무비지'에 따르면 사격 시 마치 벌떼가 벌집에서 나오는
                                            것처럼 끝없이 이어진다하여 유명해졌다고 한다.
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
                                      <span class="title">우르반 대포</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            1453년 콘스탄티노폴리스 공성전 중, 오스만 제국이 사용한
                                            거대한 화포로, 길이는 5.2미터, 무게는 17톤, 직경은
                                            760mm에 달한다. 이 무기는 설계자의 이름에서
                                            비롯되었으며, 우르반은 대포가 발사되었을 때 뜻하지 않은
                                            사고로 죽음을 맞이했다.
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
                                      <span class="title">투석노</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            투석노는 상노와 투석기를 결합해 만든 것으로, 거대한
                                            활시위의 회전력을 이용해 석괴를 발사한다. 정교하고
                                            편리하며 유산탄으로 낙하 지점 근처의 적에게 넓은 면적의
                                            살상 피해를 입힐 수 있다.
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
                                      <span class="title">사철 화포</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            명나라 화포의 일종으로 포관이 비교적 짧으며 화염, 자갈,
                                            사철 등을 장전한다. 사거리는 비교적 짧지만 상당히 넓은
                                            범위 내의 목표에게 피해를 입힐 수 있으며, 경갑 근접전
                                            유닛의 천적이다.
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
                                      <span class="title">연소관 투척기</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            신성 로마 시대 용수철 회전력을 이용한 투석노를 발전시킨
                                            것으로, 유조 탱크가 던져진 곳의 수십 미터를 태워 적군을
                                            불태운다. 구조가 작고 정교해 방어력은 비교적 약하지만
                                            장전 속도는 상당히 빠르다.
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
                                      <span class="title">콩그리브 로켓</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            초반에는 해전에 자주 사용되었으며, 전투함 시대의 '바다
                                            위의 사신'으로 대형 함선을 불태울 수 있었다. 발사대의
                                            로켓을 순서대로 발사하여, 포물선을 그리며 날아간 로켓은
                                            적을 완전히 불태울 수 있었다.
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
                                      <span class="title">피렌체 허리케인 쇠뇌</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            다빈치의 설계대로 만들었으며 강력한 활대 하나를 가진 차형
                                            활대 쇠뇌이다. 발사 시 화살의 거대한 운동 에너지로 적군
                                            부대의 방어 진형과 일반 병기를 관통할 수 있다.
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
                                      <span class="title">오스만 구포</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            석탄을 발사하는 고사포로 앞부분에는 여러 개의 쇠막대를 두른
                                            포신이 있고, 뒷부분에는 연철로 만든 약실이 있으며,
                                            포탄은 특수한 손잡이 고리를 사용해 넣어야 한다. 포탄은
                                            높은 탄도로 발사해 성 내부를 공격할 수 있다.
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
                                      <span class="title">상노</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            전국 시대에 이미 출현했다. 송나라 때에는 3개 심지어 그
                                            이상의 활을 사용해 힘을 합쳐 화살을 발사했다. 사거리는
                                            500미터 이상이며, 사용하기가 쉽고, 사격 범위나 장전에
                                            있어 모두 매우 우수하다.
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
                                      <span class="title">포석기</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            공성전에서 널리 쓰이며, 거대한 바위를 투척해 적군과 성벽을
                                            공격한다. 위력은 엄청나지만 정확도가 떨어져 여러 대를
                                            동시에 배치해 공격하는 것이 좋다.
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
                                      <span class="title">홍의대포</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            16세기에 유럽이 먼저 중량 활강총포를 사용했으며, 명나라
                                            후기에 중국에 전해졌다. 포신을 붉은 천으로 덮는 일이
                                            많아 '홍의 대포'라고도 불렸다. 개량과 복제를 거쳐 연해
                                            포대와 주요한 관문에 소량 배치되었다.
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
                                      <span class="title">프랑스 야포</span>
                                    </div>
                                    <div class="intro">
                                      <div class="intro-item">
                                        <div class="text">
                                          <p>
                                            서양의 직사식 활강총포의 야포로, 실심탄을 사용해 적을
                                            공격하며, 정확도가 비교적 높다. 하지만 살상 인원에
                                            한계가 있다.
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
                        <div class="num">01</div>
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
                <div class="num">02</div>
                <h2 class="title">애니메이션 영상</h2>
                <h3 class="sub-title">영웅의 탄생</h3>
              </div>
              <div class="video">
                <swiper
                  id="J-video"
                  :options="video.options"
                  class="swiper-container swiper-container-video swiper-container-coverflow swiper-container-3d swiper-container-horizontal"
                >
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-mp4="N6hH6fGTwdY"
                      data-swiper-slide-index="0"
                      style="transition-duration: 0ms; transform: translate3d(1000px, 0px, -1200px) rotateX(0deg) rotateY(0deg); z-index: -3;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img1"></div>
                        <span class="btn-play" data-mp4="N6hH6fGTwdY"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-mp4="NRGLSWvmJs8"
                      data-swiper-slide-index="1"
                      style="transition-duration: 0ms; transform: translate3d(750px, 0px, -900px) rotateX(0deg) rotateY(0deg); z-index: -2;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img2"></div>
                        <span class="btn-play" data-mp4="NRGLSWvmJs8"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-mp4="2MjO8WKFFWE"
                      data-swiper-slide-index="2"
                      style="transition-duration: 0ms; transform: translate3d(500px, 0px, -600px) rotateX(0deg) rotateY(0deg); z-index: -1;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img3"></div>
                        <span class="btn-play" data-mp4="2MjO8WKFFWE"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-prev"
                      data-mp4="N6hH6fGTwdY"
                      data-swiper-slide-index="0"
                      style="transition-duration: 0ms; transform: translate3d(250px, 0px, -300px) rotateX(0deg) rotateY(0deg); z-index: 0;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img1"></div>
                        <span class="btn-play" data-mp4="N6hH6fGTwdY"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-active"
                      data-mp4="NRGLSWvmJs8"
                      data-swiper-slide-index="1"
                      style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg); z-index: 1;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img2"></div>
                        <span class="btn-play" data-mp4="NRGLSWvmJs8"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-next"
                      data-mp4="2MjO8WKFFWE"
                      data-swiper-slide-index="2"
                      style="transition-duration: 0ms; transform: translate3d(-250px, 0px, -300px) rotateX(0deg) rotateY(0deg); z-index: 0;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img3"></div>
                        <span class="btn-play" data-mp4="2MjO8WKFFWE"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-duplicate swiper-slide-duplicate-prev"
                      data-mp4="N6hH6fGTwdY"
                      data-swiper-slide-index="0"
                      style="transition-duration: 0ms; transform: translate3d(-500px, 0px, -600px) rotateX(0deg) rotateY(0deg); z-index: -1;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img1"></div>
                        <span class="btn-play" data-mp4="N6hH6fGTwdY"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-mp4="NRGLSWvmJs8"
                      data-swiper-slide-index="1"
                      style="transition-duration: 0ms; transform: translate3d(-750px, 0px, -900px) rotateX(0deg) rotateY(0deg); z-index: -2;"
                    >
                      <div class="img-wrap" data-mp4>
                        <div class="img img2"></div>
                        <span class="btn-play" data-mp4="NRGLSWvmJs8"></span>
                      </div>
                    </swiper-slide>
                    <swiper-slide
                      class="swiper-slide slide-video swiper-slide-duplicate swiper-slide-duplicate-next"
                      data-mp4="2MjO8WKFFWE"
                      data-swiper-slide-index="2"
                      style="transition-duration: 0ms; transform: translate3d(-1000px, 0px, -1200px) rotateX(0deg) rotateY(0deg); z-index: -3;"
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
const gameArray = [{
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
}]
export default {
  name: 'index',
  data () {
    const _this = this
    return {
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
              return '<div class="' + t + '"><span>' + gameArray[e].tab + '</span></div>'
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
        corpsTabArray: ['작은 방패류 부대222', '긴 자루류 부대', '투창류 부대', '원거리 부대', '기병 계열 부대', '등갑 계열 부대'],
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
          //   pagination: {
          //     el: '#J-pagination-apparatus',
          //     clickable: !0,
          //     renderBullet: function (e, t) {
          //       return '<div class="' + t + '"><span></span></div>'
          //     }
          //   },
          navigation: {
            nextEl: '.pagination-apparatus-wrap .button-next',
            prevEl: '.pagination-apparatus-wrap .button-prev'
          },
          on: {
            init: function () {},
            slidePrevTransitionStart: function () {
            //   var e = this.activeIndex
            //   e === 6 && $('#J-pagination-apparatus').css('transform', 'rotate(0deg)')
            },
            slideNextTransitionStart: function () {
            //   var e = this.activeIndex
            //   e === 7 && $('#J-pagination-apparatus').css('transform', 'rotate(-112deg)')
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
            //   var e = this.realIndex
            //   var t = n.videoArray[e]
            //   $('.slide-video .title-wrap .title').text(t.title), $('.slide-video .title-wrap .sub-title').text(t.subTitle), $('.slide-video').find('.num').text('0' + (e + 1))
            }
          }
        }
      }
    }
  },
  methods: {
    ...mapActions(['showLoginAction']),
    setLeft () {
      for (var e = 0; e < 14; e++) {
        // var t = 840 * (1 + Math.cos(c)) + 'px'
        // var i = 840 * (1 + Math.sin(c)) + 'px'
        // $('#J-pagination-apparatus .swiper-pagination-bullet').eq(e).css({
        //   top: i,
        //   left: t
        // }), c += 16 * Math.PI / 180
      }
    }
  }
}
</script>
