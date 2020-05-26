!(function (e) {
  function t (t) {
    for (var a, s, p = t[0], l = t[1], r = t[2], c = 0, m = []; c < p.length; c++) s = p[c], n[s] && m.push(n[s][0]), n[s] = 0
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a])
    for (d && d(t); m.length;) m.shift()()
    return o.push.apply(o, r || []), i()
  }
  function i () {
    for (var e, t = 0; t < o.length; t++) {
      for (var i = o[t], a = !0, p = 1; p < i.length; p++) {
        var l = i[p]
        n[l] !== 0 && (a = !1)
      }
      a && (o.splice(t--, 1), e = s(s.s = i[0]))
    }
    return e
  }
  var a = {}
  var n = {
    4: 0
  }
  var o = []

  function s (t) {
    if (a[t]) return a[t].exports
    var i = a[t] = {
      i: t,
      l: !1,
      exports: {}
    }
    return e[t].call(i.exports, i, i.exports, s), i.l = !0, i.exports
  }
  s.m = e, s.c = a, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, s.r = function (e) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: 'Module'
    }), Object.defineProperty(e, '__esModule', {
      value: !0
    })
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e
    var i = Object.create(null)
    if (s.r(i), Object.defineProperty(i, 'default', {
      enumerable: !0,
      value: e
    }), 2 & t && typeof e !== 'string') {
      for (var a in e) {
        s.d(i, a, function (t) {
          return e[t]
        }.bind(null, a))
      }
    }
    return i
  }, s.n = function (e) {
    var t = e && e.__esModule
      ? function () {
        return e
          .default
      } : function () {
        return e
      }
    return s.d(t, 'a', t), t
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, s.p = 'https://www.conquerorsblade.co.kr/pc/gw/20200320120956/'
  var p = window.leihuoJsonp_kloc4n29 = window.leihuoJsonp_kloc4n29 || []
  var l = p.push.bind(p)
  p.push = t, p = p.slice()
  for (var r = 0; r < p.length; r++) t(p[r])
  var d = l
  o.push(['0imc', 5]), i()
}({
  '0imc': function (e, t, i) {
    'use strict'
    i('bQYj'), i('UxGy')
  },
  '1Plc': function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    })
    t.apparatusArray = [{
      title: '공성탑',
      intro: {
        text: '<p>성 밖에 가설해 부대를 이용해 전진시킨다. 성벽에 접촉한 후 칸막이가 자동으로 내려오는데, 병사들은 그것을 이용해 성벽 위로 올라갈 수 있다. 하지만 공성탑은 전진 중에 화포에 의해 파괴될 수 있다.</p>'
      }
    }, {
      title: '충차',
      intro: {
        text: '<p>거대한 원목으로 만들었으며, 사병의 미는 힘으로 성문을 부순다. 볏집 등으로 만든 천장으로 적의 화살 공격을 막을 수 있다.</p>'
      }
    }, {
      title: '일와봉총',
      intro: {
        text: "<p>중국 송나라 때에 이미 화약을 동력원으로 한 활과 화살이 나타났으며, 명나라 때에는 한 층 더 발전했다. '무비지'에 따르면 사격 시 마치 벌떼가 벌집에서 나오는 것처럼 끝없이 이어진다하여 유명해졌다고 한다.</p>"
      }
    }, {
      title: '우르반 대포',
      intro: {
        text: '<p>1453년 콘스탄티노폴리스 공성전 중, 오스만 제국이 사용한 거대한 화포로, 길이는 5.2미터, 무게는 17톤, 직경은 760mm에 달한다. 이 무기는 설계자의 이름에서 비롯되었으며, 우르반은 대포가 발사되었을 때 뜻하지 않은 사고로 죽음을 맞이했다.</p>'
      }
    }, {
      title: '투석노',
      intro: {
        text: '<p>투석노는 상노와 투석기를 결합해 만든 것으로, 거대한 활시위의 회전력을 이용해 석괴를 발사한다. 정교하고 편리하며 유산탄으로 낙하 지점 근처의 적에게 넓은 면적의 살상 피해를 입힐 수 있다.</p>'
      }
    }, {
      title: '사철 화포',
      intro: {
        text: '<p>명나라 화포의 일종으로 포관이 비교적 짧으며 화염, 자갈, 사철 등을 장전한다. 사거리는 비교적 짧지만 상당히 넓은 범위 내의 목표에게 피해를 입힐 수 있으며, 경갑 근접전 유닛의 천적이다.</p>'
      }
    }, {
      title: '연소관 투척기',
      intro: {
        text: '<p>신성 로마 시대 용수철 회전력을 이용한 투석노를 발전시킨 것으로, 유조 탱크가 던져진 곳의 수십 미터를 태워 적군을 불태운다. 구조가 작고 정교해 방어력은 비교적 약하지만 장전 속도는 상당히 빠르다.</p>'
      }
    }, {
      title: '콩그리브 로켓',
      intro: {
        text: "<p>초반에는 해전에 자주 사용되었으며, 전투함 시대의 '바다 위의 사신'으로 대형 함선을 불태울 수 있었다. 발사대의 로켓을 순서대로 발사하여, 포물선을 그리며 날아간 로켓은 적을 완전히 불태울 수 있었다.</p>"
      }
    }, {
      title: '피렌체 허리케인 쇠뇌',
      intro: {
        text: '<p>다빈치의 설계대로 만들었으며 강력한 활대 하나를 가진 차형 활대 쇠뇌이다. 발사 시 화살의 거대한 운동 에너지로 적군 부대의 방어 진형과 일반 병기를 관통할 수 있다.</p>'
      }
    }, {
      title: '오스만 구포',
      intro: {
        text: '<p>석탄을 발사하는 고사포로 앞부분에는 여러 개의 쇠막대를 두른 포신이 있고, 뒷부분에는 연철로 만든 약실이 있으며, 포탄은 특수한 손잡이 고리를 사용해 넣어야 한다. 포탄은 높은 탄도로 발사해 성 내부를 공격할 수 있다.</p>'
      }
    }, {
      title: '상노',
      intro: {
        text: '<p>전국 시대에 이미 출현했다. 송나라 때에는 3개 심지어 그 이상의 활을 사용해 힘을 합쳐 화살을 발사했다. 사거리는 500미터 이상이며, 사용하기가 쉽고, 사격 범위나 장전에 있어 모두 매우 우수하다.</p>'
      }
    }, {
      title: '포석기',
      intro: {
        text: '<p>공성전에서 널리 쓰이며, 거대한 바위를 투척해 적군과 성벽을 공격한다. 위력은 엄청나지만 정확도가 떨어져 여러 대를 동시에 배치해 공격하는 것이 좋다.</p>'
      }
    }, {
      title: '홍의대포',
      intro: {
        text: "<p>16세기에 유럽이 먼저 중량 활강총포를 사용했으며, 명나라 후기에 중국에 전해졌다. 포신을 붉은 천으로 덮는 일이 많아 '홍의 대포'라고도 불렸다. 개량과 복제를 거쳐 연해 포대와 주요한 관문에 소량 배치되었다.</p>"
      }
    }, {
      title: '프랑스 야포',
      intro: {
        text: '<p>서양의 직사식 활강총포의 야포로, 실심탄을 사용해 적을 공격하며, 정확도가 비교적 높다. 하지만 살상 인원에 한계가 있다.</p>'
      }
    }]
  },
  '7PJ6': function (e, t, i) {
    'use strict'
    nie.define('copyRight', function () {
      nie.require('util.bjTime').bjTime.getDate(function (e) {
        $('#copyright-year').text(e.year)
      })
    })
  },
  Cc23: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    })
    t.weaponIntroArray = [{
      title: '검방패',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/jd1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/jd2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>서쪽의 표준인 검방패.</p>',
        text2: '<p>검 전체 평형성이 좋고, 방패에 방어 효과가 있으며, 중앙선의 안정성이 뛰어나다.주요 공격 방식은 방패를 들고 적을 찌르는 것이며 다양한 방식으로 기술을 변용해 사용할 수 있다.유랑 기사들이 좋아하는 전투 장비다.</p>'
      }
    }, {
      title: '긴 자루 도끼',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/zf1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/zf2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>잔인한 긴 자루 도끼.</p>',
        text2: '<p>길이는 대략 6~10인치이며 도끼와 창, 가시를 하나로 합쳤다.공격 시 적군을 쉽게 날려버릴 수 있으며.점차 전장에서 기사들이 사랑하는 전쟁 병기가 되었다.</p>'
      }
    }, {
      title: '창',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/zm1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/zm2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>독특한 형태의 창.</p>',
        text2: '<p>기존 장창에 비해 디자인이 복잡하다. 곡선 형태의 창끝 뒤에 날카로운 가시들이 박혀 있다.창끝으로 찌르고 창자루로 타격할 수 있으며 기술 응용 방식이 다양하다.돌격과 격투에서 모두 뛰어난 활약을 한다.</p>'
      }
    }, {
      title: '단궁',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/dg1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/dg2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>제작할 때 위력에 중점을 두는 장궁과 달리 단궁은 휴대성과 출격 속도를 중시한다. </p>',
        text2: '<p>이러한 이유로 단궁은 장궁보다 훨씬 더 간편하며 화살도 더 가볍다. 장궁은 초장거리 공격에 적합하지만 단궁은 비교적 가까운 곳을 끊임없이 지속적으로 공격하는 경향이 있다.경량 갑옷에 장착한다.</p>'
      }
    }, {
      title: '야칼',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/td1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/td2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>야성이 넘치는 야칼.</p>',
        text2: '<p>4척~7척 길이에 활처럼 휘어진 칼 몸을 지녔으며 주로 도공 마스터들이 제작한다.야칼을 크게 휘두를 때면 그 모습이 마치 사신이 춤을 추는 것과 같아 적들이 숨을 죽인다.검술에 정통한 무사나 휘두를 수 있는 병기다.</p>'
      }
    }, {
      title: '화승총',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/hc1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/hc2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>사나운 열병기 화승총</p>',
        text2: '<p>철제보다 구리제가 더 많으며 대부분 파이프 형태를 띈다.엄청난 위력을 자랑하며 철사를 넣으면 유산탄을 발사할 수 있다.안정성은 높지 않지만 살상력만큼은 견줄 만한 무기가 없다.</p>'
      }
    }, {
      title: '쌍도',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/sd1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/sd2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>단도는 가볍고 사용하기에 편리할 뿐더러 다양한 기술을 펼치는 데 용이하지만 교활하고 위력이 부족하다.</p>',
        text2: '<p>쌍단도를 무기로 사용하려면 기이한 몸놀림과 침착한 인내심은 물론이고, 하나씩 완벽하게 준비해 습격하는 자세가 필요하다. 잠복을 원활하게 하기 위해서는 잡음이 나지 않는 착장과 안전하게 숨는 것이 가장 중요하다.경량 갑옷에 장착한다.</p>'
      }
    }, {
      title: '장궁',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/cg1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/cg2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>안정적으로 활을 쏠 수 있는 장궁.</p>',
        text2: '<p>활 재질은 부드럽고 튼튼하며 탁월한 신축성을 지녔다. 반면 화살대는 평평하고 화살촉은 잎사귀 같다.백 보 밖에 있는 적을 저격할 수 있으며 원거리 전투에 적합하다.힘과 민첩함을 갖춘 사람만이 장궁의 진정한 위력을 발휘할 수 있다.</p>'
      }
    }, {
      title: '관도',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/gd1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/gd2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>묵직한 힘을 발휘하는 관도.</p>',
        text2: '<p>약간 휘어진 칼날에 길고 곧은 딱딱한 나무 자루로 만들어진 아주 예리한 긴 병기다.관도의 진정한 가치는 크게 휘둘러 베는 데 있다. 적군에게 자연스럽게 엄청난 충격을 가할 수 있다.강한 힘이 필요한 명장들에게 사랑받는 무기이다.</p>'
      }
    }, {
      title: '도순',
      subTitle: '',
      skill: {
        video: {
          video1: 'https://www.conquerorsblade.co.kr/video/2020/0323/dd1.mp4',
          video2: 'https://www.conquerorsblade.co.kr/video/2020/0323/dd2.mp4'
        },
        desc: '<p></p>'
      },
      intro: {
        text1: '<p>동쪽 전장에서 이름난 무기인 도순.</p>',
        text2: '<p>예리한 칼과 튼튼한 방패는 전장에서 아주 실용적인 조합이다.도보전에 적합하며, 여기에 중갑까지 갖춘다면 전장에서 생존률은 더 높아질 것이다.인상적인 무기 형상은 전사의 상징이 되었다.</p>'
      }
    }]
  },
  E5O4: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    })
    t.navArray = ['Trang Chủ', 'Tin Tức', 'Thế Giới Quan', 'Giới Thiệu', 'Media'], t.gameArray = [{
      tab: '중세 전장의 개막',
      title: '중세 전장의 개막',
      subTitle: '개발진의 2년간 자체적 연구로 개발된 카오스 엔진, 실제 전장을 그려낸 초고화 화질',
      video: {
        webm: 'https://z.v.netease.com/2019/1203/ae90b9cfbde10ca0a7f5ad8500f4e766.webm',
        mp4: 'https://z.v.netease.com/2019/1203/4ad53615f4fc2c603e593884fe041466qt.mp4'
      }
    }, {
      tab: '대규모 공성전',
      title: '대규모 공성전',
      subTitle: '직접 고대 병사들을 지휘하며, 아군들과 적의 성을 함락하십시오',
      video: {
        webm: 'https://z.v.netease.com/2019/1203/2212238ad8dfa27ee5696ce6a2cfc4d3.webm',
        mp4: 'https://z.v.netease.com/2019/1203/3e69f33ec52e71539111d337757f13d2qt.mp4'
      }
    }, {
      tab: '월드 정벌',
      title: '월드 정벌',
      subTitle: '실제 동서양 지형 속에서 가문을 이끌어 자원을 독점하여 월드를 정복하십시오',
      video: {
        webm: 'https://z.v.netease.com/2019/1203/141c179d238d40e9b676ab26d09232d2.webm',
        mp4: 'https://z.v.netease.com/2019/1203/e807521e73479cafac88b9e3ca091459qt.mp4'
      }
    }, {
      tab: '육상병기 운용',
      title: '육상병기 운용',
      subTitle: '포석기, 야포, 공성차 등을 활용해 적의 성을 점령하십시오',
      video: {
        webm: 'https://z.v.netease.com/2019/1203/9c7f6e3ffe5d17ce59a2edeb900aa5a5.webm',
        mp4: 'https://z.v.netease.com/2019/1203/bbd2bdf592ec721a02bcc268d777cc0eqt.mp4'
      }
    }], t.videoArray = [{
      title: '시네마틱 영상',
      subTitle: '출정준비완료',
      mp4: 'N6hH6fGTwdY'
    }, {
      title: '애니메이션 영상',
      subTitle: '영웅의 탄생',
      mp4: 'NRGLSWvmJs8'
    }, {
      title: '시네마틱 영상',
      subTitle: '전쟁의 서막',
      mp4: '2MjO8WKFFWE'
    }]
  },
  EHqQ: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    }), t.arms = void 0
    var a = i('mymI')
    var n = i('Cc23')
    var o = i('1Plc')
    var s = {
      tabArray: ['무기', '병단', '병기'],
      weapon: {
        labels: ['무기특성', '역사근원'],
        weaponIntroArray: n.weaponIntroArray
      },
      corps: {
        corpsTabArray: ['작은 방패류 부대', '긴 자루류 부대', '투창류 부대', '원거리 부대', '기병 계열 부대', '등갑 계열 부대'],
        corpsLabelArray: ['주요 행동', '부대 특성', '스킬', '진형'],
        corpsArray: a.corpsArray
      },
      apparatusArray: o.apparatusArray
    }
    t.arms = s
  },
  UxGy: function (e, t, i) {
    'use strict'
    var a = i('7ibs')
    var n = i('E5O4')
    var o = i('qdpH')
    var s = i('grJT')
    var p = i('nt4k')
    i('7PJ6'), $(function () {
      var e; var t; var i = null
      i = new window.Swiper('#J-page', {
        allowTouchMove: !1,
        direction: 'vertical',
        simulateTouch: !1,
        mousewheel: !0,
        observer: !0,
        observeParents: !0,
        hashNavigation: !0,
        loop: !1,
        pagination: {
          el: '#J-pagination-out',
          clickable: !0,
          renderBullet: function (e, t) {
            return '<div class="' + t + '"><span>' + n.navArray[e] + '</span></div>'
          }
        },
        on: {
          slideChangeTransitionStart: function () {
            var e = this.activeIndex
            e === 0 ? $('.nav-top .logo').hide() : $('.nav-top .logo').show(), $('.nav-top').hide()
          },
          slideChangeTransitionEnd: function () {
            $('.nav-top').show()
          }
        }
      }), $('.flag-wrap .btn-open').on('click', function () {
        $('#flag').show('slow', function () {
          $('.flag-wrap').removeClass('flag-close')
        })
      }), $('.flag-wrap .btn-close').on('click', function () {
        $('#flag').hide('slow', function () {
          $('.flag-wrap').addClass('flag-close')
        })
      }), $('.flag-wrap .btn-cancle').on('click', function () {
        $('#flag').hide('slow', function () {
          $('.flag-wrap').addClass('flag-close')
        })
        var e = new window.Date()
        var t = e.getDate()
        window.localStorage.setItem('flag', t)
      }), e = (new window.Date()).getDate(), t = window.localStorage.getItem('flag'), e === t >> 0 ? ($('#flag').hide(), $('.flag-wrap').addClass('flag-close')) : $('.flag-wrap').removeClass('flag-close'), window.setTimeout(function () {
        !(function () {
          for (var e = '', t = 0, i = n.gameArray.length; t < i; t++) {
            var a = n.gameArray[t]
            e += '<div class="swiper-slide  slide-game">\n                   <div class="video-wrap">\n                           <video autobuffer autoplay loop class="video-loop" id="J-video-' + t + '" preload="auto" muted>\n                               <source src="' + a.video.webm + '" type="video/webm">\n                               <source src="' + a.video.mp4 + '" type="video/mp4">\n                           </video>\n                       </div>\n                   <div class="slide-content">\n                       <h2 class="title">' + a.title + '</h2>\n                       <h3 class="sub-title">' + a.subTitle + '</h3>\n                   </div>\n                </div>'
          }
          $('#J-game').find('.swiper-wrapper').html(e), new window.Swiper('#J-game', {
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
                return '<div class="' + t + '"><span>' + n.gameArray[e].tab + '</span></div>'
              }
            },
            on: {
              slideChangeTransitionStart: function () {
                var e = this.activeIndex
                $('.pagination-game-num').find('.num').text('0' + (e + 1))
              }
            }
          })
        }()), o.armsPage.init(), (function () {
          for (var e = '', t = 0, i = n.videoArray.length; t < i; t++) {
            var a = n.videoArray[t]
            e += '<div class="swiper-slide  slide-video" data-mp4="' + a.mp4 + '">                  \n                   <div class="img-wrap" data-mp4="">                      \n                      <div class="img img' + (t + 1) + '"></div>\n                      <span class="btn-play" data-mp4="' + a.mp4 + '"></span>\n                   </div>\n                </div>'
          }
          $('#J-video').find('.swiper-wrapper').html(e), new window.Swiper('#J-video', {
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
                var e = n.videoArray[0]
                $('.slide-video .title-wrap .title').text(e.title), $('.slide-video .title-wrap .sub-title').text(e.subTitle)
              },
              slideChangeTransitionStart: function () {
                var e = this.realIndex
                var t = n.videoArray[e]
                $('.slide-video .title-wrap .title').text(t.title), $('.slide-video .title-wrap .sub-title').text(t.subTitle), $('.slide-video').find('.num').text('0' + (e + 1))
              }
            }
          })
        }()), $('.nav-wrap .nav-item').on('click', function () {
          var e = $(this).index()
          $('.nav-item').removeClass('nav-active').eq(e).addClass('nav-active'), i.slideTo(e)
        }), $('#J-video').on('click', '.swiper-slide-active .btn-play', function () {
          var e = $(this).data('mp4')
          var t = '<iframe src="https://www.youtube.com/embed/' + e + '?autoplay=1" frameborder="0" allowfullscreen=""></iframe>'
          $(t).prependTo('.pop-video .video-box'), $('.pop-video').show()
        }), $('.pop-video .close, .pop-video .mask').on('click', function () {
          $(this).closest('.pop').hide(), $('.pop-video .video-box').empty()
        }), $('.btn-side').on('click', function () {
          $('.share-wrap').toggleClass('share-show')
        }), (0, s.videoInit)(), (0, p.loadNews)(), [{
          el: '.btn-yuyue',
          action: 'btn-link',
          name: '首页按钮点击数据'
        }, {
          el: '.flag-link',
          action: 'flag-link',
          name: '首页旗帜社区'
        }, {
          el: '.facebook',
          action: 'facebook-link',
          name: '侧边脸书'
        }, {
          el: '.youtube',
          action: 'youtube-link',
          name: '侧边油管'
        }, {
          el: '.navercafe',
          action: 'navercafe-link',
          name: '侧边咖啡'
        }, {
          el: '.activity-link',
          action: 'activity-link',
          name: '二页咖啡社区'
        }].forEach(function (e) {
          $(e.el).on('click', function () {
            nie.config.stats.url.add(window.location.host + window.location.pathname + '?action=' + e.action, e.name)
          })
        }), a.util.getUrlParams(window.location.href).from === 'inven' && nie.config.stats.url.add(window.location.host + window.location.pathname + '?action=inven-pc', 'inven PC')
      }, 100)
    })
  },
  bQYj: function (e, t, i) {},
  grJT: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    }), t.videoInit = function () {
      $('body').on('click', '.player', function (e) {
        e.preventDefault()
        var t = $(this).attr('mp4')
        $('<div class="pop pop-player" style="display: block"><div class="mask"></div><div class="pop-wrap">\n        <div class="close"></div><div class="pop-content"><div class="video-box"><video id="js-video-player" src=" ' + t + '"></video></div></div></div></div>').appendTo($('body')), $('.pop-player').show('fast', function () {
          $('#js-video-player')[0].play()
        })
      }), $('body').delegate('.pop-player .mask,.pop-player .close', 'click', function () {
        var e = $('.pop-player')
        e.fadeIn(function () {
          e.remove()
        })
      })
    }
  },
  mymI: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    })
    t.corpsArray = [{
      group: [{
        title: '백월 산민',
        intro: [
          ['<em>목패 비석과 땔나무용 칼을 사용하여 전투에 참여합니다.</em><p>갑옷을 입지 않았거나 경갑을 입은 적에게는 유효한 피해를 입힐 수 있으나 중등 이상의 갑옷 상대시 역부족합니다.</p><p>칼을 마구 휘두르며 쳬계적인 공격형식이 없습니다.</p><p>전체 목표를 선정하지 못하며 전술 구사 불가.</p>'],
          ['<em>채집 숙련가：</em><p>민병은 주로  전투 시에 자원을 제공하기 위한 농사와 채집을 합니다.</p><em>총알받이：</em><p>모집 편성 비용이 비교적 저렴하지만 전투력이 비교적 낮아 대부분 총알받이로 사용됩니다.</p>'],
          ['<em>약초:</em><p>약초를 사용하여 일정 시간 HP를 느리게 회복합니다.</p>'],
          ['<em>산개진</em><div class="img"><i class="dot-1-1-1"></i></div>']
        ]
      }, {
        title: '낭산소 도순병',
        intro: [
          ['<em>단거리 돌격을 수차례 진행함으로써 적의 진형을 무너뜨리는데 유능합니다.</p><p>돌격의 쿨타임 및 거리가 짧으며 속도가 빠릅니다.</p><p>진형을 짜서 단체 돌격은 뛰어나지만 각개 전투는 비교적으로 취약합니다.</p>'],
          ['<em>승승장구:</em><p>돌격 효과가 뛰어난 부대입니다.</p><em>함락 무쌍:</em><p>적진에 돌격하여 전투의 최전선에서 적을 공격하는 것에 능합니다.</p>'],
          ['<em>돌격:</em><p>거리가 멀지는 않지만 돌격 위력이 강력합니다.쿨타임이 짧습니다.</p>'],
          ['<em>산개진  충시진  순장진</em><div class="img"><i class="dot-1-2-1"></i><i class="dot-1-2-2"></i><i class="dot-1-2-3"></i></div>']
        ]
      }, {
        title: '척가군 돌격대',
        intro: [
          ['<em>빠르게 적진으로 돌격해 적을 격추하는 것에 능합니다.</em><p>돌격 시 방패로 원거리 공격을 막는 것에 능숙합니다.</p><p>반신찰갑으로 상반신을 잘 보호할 수 있습니다.</p><em>공격으로 다수의 적에게 피해를 입힐 수 있습니다.</em><em>속도가 빠릅니다.</em><em>적 선정 시 원거리 공격과 장군을 우선으로 선정하는 전술을 구사합니다.</em>'],
          ['<em>척가 도법：</em><p>척가 도법으로 적에게 피해를 입힐 수 있습니다.</p><em>모락 무쌍：</em><p>적진으로 돌격하여 전투의 최전선에서 적을 공격하는 것에 능합니다.</p>'],
          ['<em>돌격：</em><p>돌격 위력이 강력하며 돌격 가능한 거리가 깁니다.쿨타임 보통.<em>척가 도법：</em><p>발동 후 일정 시간내 AOE 피해를 입힐 수 있습니다.</p><em>장군 보호</em>'],
          ['<em>산개진  장군 보호진 </em><div class="img"><i class="dot-1-3-1"></i><i class="dot-1-3-2"></i></div>']
        ]
      }]
    }, {
      group: [{
        title: '감주 변경 주민',
        intro: [
          ['<em>임시로 소집한 용병입니다.</em><em>날카롭게 깎은 나무막대를 들고 싸웁니다.</em><p>그들의 창은 갑옷을 입지 않았거나 경갑을 입은 병사에게는 유효하나, 중등 이상의 방어구에는 통하지 않습니다.</p><p>싸움 방식은 체계 없이 앞에 보이는 적을 마구 찌릅니다.</p>'],
          ['<em>특성 설명이 없습니다. </em>'],
          ['<em>스킬 없음 X</em>'],
          ['<em>산개진</em><div class="img"><i class="dot-2-1-1"></i></div><p>중기까지 내부 성장한 후 밀집한 횡렬진을 구사 가능합니다.</p>']
        ]
      }, {
        title: '청서 창병 부대',
        intro: [
          ['<em>비교적 많은 진형을 구사할 수 있으며 진형을 구축하여 바리케이드로 작전하는 것에 능합니다.</em><p>진형을 구축한 상태에서 작전 능력이 뛰어납니다.</p><p>진형을 구축 속도가 빠릅니다.</p><p>바리케이드 진형이 안정도가 높아 잘 부서지지 않습니다. </p><em>각개 병사의 전투 실력이 부족하여 진형이 부서지면 작전 능력이 떨어집니다.</em>'],
          ['<em>다양한 발전：</em><p>각종의 전술을 훈련할 수 있으며, 발전 방향이 다양합니다. </p><em>총알받이：</em><p>모집 편성 비용이 비교적 저렴하지만 전투력이 비교적 낮아 대부분 총알받이로 사용됩니다.</p>'],
          ['<em>바리케이드</em>'],
          ['<em>산개진   힁렬진</em><div class="img"><i class="dot-2-2-1"></i><i class="dot-2-2-2"></i></div>']
        ]
      }, {
        title: '스위스 할버드병 부대',
        intro: [
          ['<em>창 끝으로는 찌르기, 도끼로는 베기 등 장창 활용 전술로 적을 공격하는 데에 능합니다. </em><p>진형이 비교적 완화하여 장창병이 각개 격투 능력을 발휘하는데 편합니다.</p><p>근거리 격투에 능합니다.</p><em>중갑 유닛에 피해를 입힐 수 있습니다. </em><em>기병과 조우 시 비교적 밀집한 방진을 펼쳐 바리케이트를 치며 대항하나 장창보다 효과가 뒤떨어집니다. </em>'],
          ['<em>반 기병 선봉대：</em><p>기병에 잘 대항하여 기병 병종에게 비교적 큰 피해를 입힙니다.</p><em>폭렬 관통：</em><p>적의 장갑을 관통해 방어도가 높은 적에게 유효한 피해를 입힙니다.</p>'],
          ['<em>돌격</em><em>바리케이드</em>'],
          ['<em>산개진   방진</em><div class="img"><i class="dot-2-3-1"></i><i class="dot-3-2-2"></i></div>']
        ]
      }]
    }, {
      group: [{
        title: '하황 향군',
        intro: [
          ['<em>원거리 공격과 근거리 격투에 모두 능하나 근거리 격투에 특히 월등합니다.</em><p>보유한 투창의 수가 적습니다. (2-3 개)투창 장사의 투척 사거리가 멀지는 않지만 강력한 위력 때문에 중량 갑옷을 꿰뚫을 수 있습니다.</p><p>방패와 단창으로 작전하여 근거리 격투 능력이 도순보다는 조금 뒤떨어집니다.</p><em>투창 과정에서 적이 접근하면 근거리 격투 상태로 육탄전을 벌입니다.</em><em>투창에 목적성이 없어 가장 가까이 있는 적에게 공격합니다.</em>'],
          ['<em>용맹한 근접전: </em><p>근거리 격투 능력이 비교적 뛰어납니다. </p><em>한정 수량 중형 창: </em><p>투창 위력이 비교적 높지만 창의 수량이 매우 적습니다.</p>'],
          ['<em>투창:</em><p>앞에 있는 적에게 투창합니다. </p>'],
          ['<em>산개진   횡렬진</em><div class="img"><i class="dot-3-1-1"></i><i class="dot-3-1-2"></i><i class="dot-1-2-3"></i></div>']
        ]
      }, {
        title: '귀향 패수',
        intro: [
          ['<em>쉬운 횡렬진으로 정면을 봉쇄하고 대원들을 엄호합니다.</em><em>산개진 상태에서는 매우 취약하고 작전 능력 기능을 상실합니다.</em><em>방패가 파괴된 후 방어 구사 능력이 현저히 떨어집니다.</em><em>대열 정렬 속도가 비교적 느립니다.</em><em>뒤쪽에서 공격당하는 것에 취약합니다.</em><em>공격 능력이 매우 떨어집니다./em>'],
          ['<em>정면 방어:</em><p>정면 방패의 방어력이 뛰어나지만 뒤쪽 방어는 비교적 취약합니다. </p><em>백어택 약점: </em><p>뒤쪽 공격을 당할 시 더 많은 피해를 받습니다. </p>'],
          ['<em>스킬이 없습니다</em>'],
          ['<em>순장진</em><div class="img"><i class="dot-3-2-1"></i></div>']
        ]
      }, {
        title: '백산흑수 철부도',
        intro: [
          ['<em>분산하여 적군에게 돌격해 AOE 데미지 피해를 입히는 데 능합니다.</em><em>삼단진을 쳐서 충돌능력을 강화하여 방어진을 치고 있는 적군부대의 돌파구를 만듭니다.</em><em>진형을 구사하여 진형 방어 작전에 능합니다. </em><p>회원진, 횡렬진 등 다양한 방어 진형을 구사 가능하며, 방어진을 유지합니다. </p><em>도리깨로 적을 넉백시키며, 데미지 피해를 입힙니다.</em><em>장검으로 적에게 관통 및 막대한 피해를 입힙니다.</em>'],
          ['<em>양용 무기: </em><p>두 가지 무기를 가지고 있으며, 상황에 맞게 사용합니다.</p><em>둔기 충격</em><p>둔기로 적을 강타하여 데미지 피해를 입힙니다. </p><em>특제 중갑: </em><p>두꺼운 갑옷을 입어 방어능력이 비교적 높습니다. </p><em>신중하게 진군: </em><p>기동성이 비교적 낮아 빠르게 진입할 수 없습니다. </p>'],
          ['<em>스킬이 없습니다.</em>'],
          ['<em>산개진   횡렬진   충시진</em><div class="img"><i class="dot-3-3-1"></i><i class="dot-3-3-2"></i><i class="dot-3-3-3"></i></div>']
        ]
      }]
    }, {
      group: [{
        title: '노르만 석궁수',
        intro: [
          ['<em>손으로 석궁을 다루기 때문에 석궁의 위력은 낮은 편입니다.</em><p>사거리가 짧습니다.</p><p>관통 능력이 나쁘지 않고 종갑 적군에게 위협이 됩니다.</p><em>장전 속도가 비교적 빠릅니다.</em><em>정확도가 비교적 낮습니다.</em><em>근거리 격투 능력을 가지고 있지 않습니다.</em><em>높은 곳에서 아래를 향해 사격할 시 사격 능력은 상당히 출중하나 포물선 사격 능력은 갖추지 못하고 있습니다..</em>'],
          ['<em>직선 사격: </em><p>포물선 사격능력 부족.</p><em>산란 사격: </em><p>사격 정확도가 비교적 낮습니다.</p>'],
          ['<em>지정 사격</em>'],
          ['<em>산개진 삼단진 일제 사격진</em><div class="img"><i class="dot-4-1-1"></i><i class="dot-4-1-2"></i><i class="dot-4-1-3"></i></div>']
        ]
      }, {
        title: '전서 단련 궁수',
        intro: [
          ['<em>사격 훈련을 얼마 받지 못했습니다.</em><p>사거리가 짧고 정확도가 낮습니다. </p><p>화살을 마구 사격할 줄만 알고 정확히 사격하는 능력은 부족합니다.</p><p>조준할 필요가 없어서 사격 속도가 비교적 빠릅니다.</p><p>근거리 격투는 불가능하며 적과 근접 전투시 도망칩니다. </p><em>인원수가 비교적 많습니다. </em>'],
          ['<em>집단 작전:</em><p>편제 인원수가 비교적 많습니다. </p><em>미약한 관통: </em><p>관통 능력이 비교적 낮으며, 경갑 유닛에게만 유효 피해를 입힐 수 있습니다.</p><em>운명적 사격:</em><p>사격 정확도가 매우 낮습니다. </p>'],
          ['<em>스킬이 없습니다.</em>'],
          ['<em>산개진 어린진 익진</em><div class="img"><i class="dot-4-2-1"></i><i class="dot-4-2-2"></i><i class="dot-4-2-3"></i></div>']
        ]
      }, {
        title: '천웅 신궁영',
        intro: [
          ['<em>무거운 콤파운드 리커브 궁을 사용합니다.</em><p>사격 빈도가 비교적 낮습니다. </p><p>삼각뿔로 이루어진 날카로운 화살의 관통력이 매우 높고 피해량도 높습니다.</p><p>무거운 화살로 인하여 사거리가 비교적 짧습니다. </p><em>근거리 전투 능력을 가지고 있지 않습니다.  </em>'],
          ['<em>정확한 사격: </em><p>사격 정확도가 비교적 높습니다.</p><em>관통 화살: </em><p>특제의 관통 화살이 중갑을 꿰뚫고 피해를 입힐 수 있습니다.</p>'],
          ['<em>지정 사격</em><em>관통 화살</em>'],
          ['<em>산개진   어린진</em><div class="img"><i class="dot-4-3-1"></i><i class="dot-4-3-2"></i></div>']
        ]
      }]
    }, {
      group: [{
        title: '고밀 궁마대',
        intro: [
          ['<em>안전 구역까지 진행한 후 보조적인 사격을 발동합니다.</em>'],
          ['<em>기동 유격</em><em>빠른 기동성</em>'],
          ['<em>스킬이 없습니다</em>'],
          ['<em>완화 방진   학익진</em><div class="img"><i class="dot-5-1-1"></i><i class="dot-5-1-2"></i></div>']
        ]
      }, {
        title: '유림 표기장군영',
        intro: [
          ['<em>삼단진(3줄)으로 밀집한 돌격을 진행하고 기병창으로 적을 찌르고 넉백시킵니다.</em><em>적에게 접근한 후 진형을 흐트리는것을 주요 목적으로 합니다.</em><em>돌격 후 방향을 돌리는 것에 비교적 긴 시간이 걸립니다. </em>'],
          ['<em>혈전 기병: </em><p>돌격 외에도 무기를 사용하여 적과 육탄전을 벌일 수 있는 기병입니다. </p><em>빠른 기동성：</em><p>돌격 거리가 비교적 짧으며, 지속 시간이 짧습니다.</p><em>화기 방어: </em><p>화승총 병종류에 대한 저항성이 높습니다. </p>'],
          ['<em>돌격(쿨타임이 짧습니다)</em>'],
          ['<em>완화 방진    설형진    횡렬진</em><div class="img"><i class="dot-5-2-1"></i><i class="dot-5-2-2"></i><i class="dot-5-2-3"></i></div>']
        ]
      }, {
        title: '관녕 철기병',
        intro: [
          ['<em>사격 돌격을 이용하여 적을 살상한 후 근거리 격투를 발동하는 데 능합니다.</em><em>설형진을 이용하여 적군 진형을 부숴 데미지 피해를 입힙니다. </em>'],
          ['<em>사격 돌격:</em><p>돌격 시 삼안총으로 사격을 할 수 있습니다.</p><em>둔기 충격: </em><p>둔기로 적을 공격하여 데미지 피해를 입힙니다.</p><em>중갑:</em><p>두꺼운 갑옷을 입어 방어력이 비교적 높습니다.</p>'],
          ['<em>돌격</em>'],
          ['<em>산개진 구형진 충시진</em><div class="img"><i class="dot-5-3-1"></i><i class="dot-5-3-2"></i><i class="dot-5-3-3"></i></div>']
        ]
      }]
    }, {
      group: [{
        title: '호위 등갑대',
        intro: [
          ['<em>장착한 등갑은 철갑과 비슷한 방어 능력을 가지면서도  매우 가볍고 기동성이 뛰어납니다.</em><p>찌르기와 휘두르기를 막을 수 있습니다.</p><p>불 공격에 약합니다. 불 공격을 당한 경우 높은 확률로 와해됩니다.</p><em>가볍고 편한 등갑은 경량 무기는 막을 수 있지만 중공격에 약합니다. </em><p>공격 시 일정한 방패 방어가 가능합니다.  </p>'],
          ['<em>등갑: </em><p>등갑은 가볍고 편하면서 찌르기와 휘두르기 공격에 강하나 불에 약합니다. </p>'],
          ['<em>돌격</em><p>돌격 위력은 보통 수준이나 돌격 거리가 길며 속도가 빠릅니다.</p><p>쿨타임은 보통.</p>'],
          ['<em>산개진   횡렬진   충시진</em><div class="img"><i class="dot-6-1-1"></i><i class="dot-6-1-2"></i><i class="dot-6-1-3"></i></div>']
        ]
      }, {
        title: '파주 장창영',
        intro: [
          ['<em>주로 진형을 이용한 전투 훈련을 받았으며 바리케이드 진형을 구사할 수 있으나 각개 전투는 비교적 약합니다.</em><em>착용한 등갑의 방어력은 찰갑과 비슷하지만 가벼운 무게를 자랑합니다.</em><p>찌르기와 휘두르기를 막을 수 있습니다.불 공격에 약합니다. 불 공격을 당하면 높은 확률로 와해됩니다.</p><p>경량 무기는 막을 수 있지만 중공격에 약합니다. </p><p>우수한 기동성을 가지고 있어서 산지에서의 전투에 유리합니다.</p><em>창 끝을 금탕에 끓여 적에게 투사하여 맞출 시 적을 중독시켜 허약하게 만듭니다.</em><p>적의 공격 속도와 피해를 낮춥니다.</p><p>금탕의 끓인 창 끝은 녹슬기 쉽고 관통 능력이 좋지 않으나, 피해량은 표준 수치에 속합니다.</p>'],
          ['<em>등갑：</em><p>등갑은 가볍고 편하면서 찌르기와 휘두르기 공격에 강하나 불에 약합니다. </p><em>금탕 독: </em><p>무기에 금탕을 발라 적을 허약하게 만들고 지속적 피해를 입힙니다.</p>'],
          ['<em>스킬이 없습니다.</em>'],
          ['<em>산개진</em><div class="img"><i class="dot-6-2-1"></i></div>']
        ]
      }, {
        title: '파주 연노영',
        intro: [
          ['<em>비교적 긴 시간(3-5 초)을 걸려 여러 개의 화살을 장전한 후 한 번에 쏩니다.</em><p>연노는 위력이 비교적 낮은 편이라 관통 능력이 비교적 떨어집니다. 경갑 유닛을 공격하기에 적합하나 중형 갑옷을 상대하기에는 무리가 있습니다.</p><p>사격 범위가 넓고 폭발적인 공격이 가능합니다.</p><em>착용한 등갑은 방어력이 찰갑에 가까우며 매우 가볍고 편리합니다.</em><p>찌르기와 휘두르기를 막을 수 있습니다.</p><p>불 공격에 약합니다. 불 공격을 당하면 높은 확률로 와해됩니다.</p><p>경량 무기는 막을 수 있지만 중공격에는 약합니다.</p><em>근거리 격투 능력을 갖추지 않고 있습니다.</em>'],
          ['<em>등갑: </em><p>등갑은 가볍고 편하면서 찌르기와 휘드르기 공격에 강하나 불에 약합니다. </p><em>연발 쇠뇌틀: </em><p>한 번에 여러 개의 화살 발사하여 화살비로 적에게 피해를 입힙니다. </p>'],
          ['<em>지정 공격</em>'],
          ['<em>산개진   궁형진</em><div class="img"><i class="dot-6-3-1"></i><i class="dot-6-3-2"></i></div>']
        ]
      }]
    }]
  },
  nt4k: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    }), t.loadNews = function (e, t) {
      var i = window.document.getElementById('js-iframe')

      function a (e) {
        $(i).attr('src', e) /* ,i.onload=function(){var e=i.contentWindow.document;$("#js-news-list").empty().append($(e).find("body").html())} */
      }
      a(n), $('.news-wrap').delegate('.page-btn', 'click', function () {
        a($(this).attr('data-href'))
      }), $('.slide-news .tab-wrap .tab-item').on('click', function () {
        var e = $(this).index()
        $('.slide-news .tab-wrap .tab-item').removeClass('tab-active'), $('.slide-news .tab-wrap .tab-item').eq(e).addClass('tab-active'), e === 0 ? a(n) : e === 1 ? a(o) : e === 2 && a(s)
      })
    }
    var a = window.location.origin
    var n = a + '/inline/20v1/news/index.html'
    var o = a + '/inline/20v1/update/index.html'
    var s = a + '/inline/20v1/official/index.html'
  },
  qdpH: function (e, t, i) {
    'use strict'
    Object.defineProperty(t, '__esModule', {
      value: !0
    }), t.armsPage = void 0
    var a = i('EHqQ')
    var n = a.arms.tabArray
    var o = a.arms.weapon.weaponIntroArray
    var s = a.arms.weapon.labels
    var p = a.arms.corps.corpsLabelArray
    var l = a.arms.corps.corpsArray
    var r = a.arms.corps.corpsTabArray
    var d = a.arms.apparatusArray
    var c = -138 * Math.PI / 180
    var m = {
      init: function () {
        new window.Swiper('#J-arms', {
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
              return '<div class="' + t + '"><span>' + n[e] + '</span></div>'
            }
          },
          on: {
            slideChangeTransitionStart: function () {}
          }
        }), (function () {
          for (var e = '', t = o, i = 0, a = t.length; i < a; i++) {
            var n = t[i]
            var p = ''
            i === 9 && (p = '<div class="btn-switch-wrap">\n                      <span class="btn-switch switch-active" data-gender="m" data-text="男"></span>\n                      <span class="btn-switch" data-gender="f" data-text="女"></span>\n                  </div> '), e += '<div class="swiper-slide">\n                    <div class="slide-content">\n                        <div class="intro-wrap">\n                            <div class="title-wrap">\n                                <span class="title">' + n.title + '</span>\n                                <span class="sub-title">' + n.subTitle + '</span>\n                                <span class="line"></span>\n                            </div>\n                            <div class="intro">\n                                <div class="intro-item intro-item1">\n                                    <h3 class="intro-title">' + s[0] + '</h3>\n                                    <div class="text">\n                                        ' + n.intro.text1 + '\n                                    </div>\n                                    <span class="line"></span>\n                                </div>\n                                <div class="intro-item intro-item2">\n                                    <h3 class="intro-title">' + s[1] + '</h3>\n                                    <div class="text">\n                                        ' + n.intro.text2 + '\n                                    </div>\n                                    <span class="line"></span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="skill-wrap">\n                            <div class="skill-video">\n                                <div class="btn-video player" mp4="' + n.skill.video.video1 + '"><span></span></div>\n                                <div class="btn-video player" mp4="' + n.skill.video.video2 + '"><span></span></div>\n                            </div>\n                        </div>\n                        <div class="kv-wrap">\n                            <span class="circle"></span>\n                            <div class="kv kv' + (i + 1) + '">\n                            </div>\n                        </div>\n                        ' + p + '\n                    </div>\n                </div>'
          }
          $('#J-weapon').find('.swiper-wrapper').html(e), new window.Swiper('#J-weapon', {
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
                var e = this.realIndex
                var t = e + 1
                e < 9 && (t = '0' + t), $('#J-weapon').find('.num').text(t)
              }
            }
          })
        }()), (function () {
          for (var e = '', t = l, i = 0, a = t.length; i < a; i++) {
            for (var n = t[i].group, o = '', s = 0, d = n.length; s < d; s++) {
              for (var c = '', m = '', v = n[s], u = 0, w = v.intro.length; u < w; u++) {
                var f = '<div class="intro-item intro-item-' + (u + 1) + '">\n                                    <h3 class="intro-title">' + p[u] + '</h3>\n                                    <div class="text-wrap">\n                                        ' + v.intro[u] + '\n                                    </div>\n                                </div>'
                u < 2 ? c += f : m += f
              }
              var h = ''
              s === 0 && (h = 'corps-intro-show'), o += ' <div class="intro-wrap corps-intro-' + (s + 1) + ' ' + h + '">\n                            <div class="title-wrap">\n                                <span class="title">' + v.title + '</span>                         \n                            </div>\n                            <div class="intro">\n                                <div class="intro-left">\n                                    ' + c + '\n                                </div>\n                                 <div class="intro-right">\n                                    ' + m + '\n                                </div>\n                            </div>\n                        </div>'
            }
            e += '<div class="swiper-slide corps-slide">\n                    <div class="slide-content">\n                        ' + o + '             \n                        <div class="kv-wrap">\n                            <div class="kv kv' + (i + 1) + '" data-kv="1" data-name1="' + n[0].title + '" data-name2="' + n[1].title + '" data-name3="' + n[2].title + '">\n                                \n                            </div>\n                            <div class="switch-button-wrap">\n                                <div class="switch-button" data-thumb="2">\n                                    <p class="kv-name">' + n[1].title + '</p>\n                                </div>\n                                <div class="switch-button" data-thumb="3">\n                                    <p class="kv-name">' + n[2].title + '</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>'
          }
          $('#J-corps').find('.swiper-wrapper').html(e), new window.Swiper('#J-corps', {
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
                return '<div class="' + t + '"><span>' + r[e] + '</span></div>'
              }
            },
            on: {
              init: function () {},
              slideChangeTransitionStart: function () {
                var e = this.activeIndex
                $('#J-corps').find('.num').text('0' + (e + 1))
              }
            }
          })
        }()), (function () {
          for (var e = '', t = d, i = 0, a = t.length; i < a; i++) {
            var n = t[i]
            e += '<div class="swiper-slide">\n                    <div class="slide-content">\n                        <div class="intro-wrap">\n                            <div class="title-wrap">\n                                <span class="title">' + n.title + '</span>\n                            </div>\n                            <div class="intro">\n                                <div class="intro-item">\n                                    <div class="text">\n                                        ' + n.intro.text + '\n                                    </div>\n                                </div>\n                            </div>\n                        </div>                   \n                        <div class="img-wrap">\n                            <div class="img img' + (i + 1) + '">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>'
          }
          $('#J-apparatus').find('.swiper-wrapper').html(e), new window.Swiper('#J-apparatus', {
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
              slidePrevTransitionStart: function () {
                var e = this.activeIndex
                e === 6 && $('#J-pagination-apparatus').css('transform', 'rotate(0deg)')
              },
              slideNextTransitionStart: function () {
                var e = this.activeIndex
                e === 7 && $('#J-pagination-apparatus').css('transform', 'rotate(-112deg)')
              },
              slideChangeTransitionStart: function () {
                var e = this.activeIndex + 1
                var t = e
                e < 10 && (t = '0' + t), $('.section-apparatus').find('.num').text(t)
              }
            }
          })
        }()), (function () {
          for (var e = 0; e < 14; e++) {
            var t = 840 * (1 + Math.cos(c)) + 'px'
            var i = 840 * (1 + Math.sin(c)) + 'px'
            $('#J-pagination-apparatus .swiper-pagination-bullet').eq(e).css({
              top: i,
              left: t
            }), c += 16 * Math.PI / 180
          }
        }()), $('#J-weapon .btn-switch').on('click', function () {
          var e = $(this).data('gender')
          $('#J-weapon .btn-switch').removeClass('switch-active'), $(this).addClass('switch-active'), $(this).closest('.slide-content').find('.kv').removeClass('kv-f kv-m').addClass('kv-' + e)
        }), $('#J-corps').on('click', '.switch-button-wrap .switch-button', function () {
          var e = $(this).attr('data-thumb')
          var t = $(this).closest('.kv-wrap').find('.kv')
          var i = t.attr('data-kv')
          var a = t.data('name' + i)
          $(this).attr('data-thumb', i).find('.kv-name').text(a), t.attr('data-kv', e), $(this).closest('.slide-content').find('.intro-wrap').removeClass('corps-intro-show').eq(e - 1).addClass('corps-intro-show')
        })
      }
    }
    t.armsPage = m
  }
}));

(window.leihuoJsonp_kloc4n29 = window.leihuoJsonp_kloc4n29 || []).push([
  [5],
  {
    '7ibs': function (i, e, g) {
      'use strict'
      g.r(e), g.d(e, 'browser', function () {
        return n
      }), g.d(e, 'util', function () {
        return f
      })
      var f = Object.freeze({
        __proto__: null,
        formatTime: function (i) {
          if (i) {
            var e = new Date(i)
            return e.getFullYear() + '-' + (e.getMonth() + 1 < 10 ? '0' + (e.getMonth() + 1) : e.getMonth() + 1) + '-' + (e.getDate() < 10 ? '0' + e.getDate() : e.getDate()) + ' ' + (e.getHours() < 10 ? '0' + e.getHours() : e.getHours()) + ':' + (e.getMinutes() < 10 ? '0' + e.getMinutes() : e.getMinutes()) + ':' + (e.getSeconds() < 10 ? '0' + e.getSeconds() : e.getSeconds())
          }
        },
        throttle: function (i) {
          var e; var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300
          var g = new Date()
          return function () {
            var f = arguments
            var n = new Date()
            clearTimeout(e), n - g >= t ? (i.apply(this, f), g = n) : e = setTimeout(i, t)
          }
        },
        debounce: function (i, e) {
          var t
          return function (g) {
            clearTimeout(t)
            var f = this
            var n = arguments
            t = setTimeout(function () {
              i.apply(f, n)
            }, e)
          }
        },
        getUrlParams: function (i) {
          if (i && typeof i === 'string') {
            for (var e = i.slice(i.search(/\?/) + 1).split('&'), t = {}, g = 0, f = e.length; g < f; g++) {
              var n = e[g].split('=')
              t[n[0]] = n[1]
            }
            return t
          }
        },
        checkEmail: function (i) {
          return /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/.test($.trim(i))
        },
        filterXss: function (i) {
          return new filterXSS.FilterXSS({
            whiteList: {
              img: ['src', 'title']
            }
          }).process(i + '')
        },
        checkPhone: function (i) {
          return /^[1]([3-9])[0-9]{9}$/.test($.trim(i))
        },
        getStrLength: function (i) {
          return String(i).replace(/(?:[\u0100-\u017E\u0180-\u039B\u039D-\u1E9D\u1E9F-\u2129\u212C-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/gi, 'aa').length
        },
        hasEmoji: function (i) {
          return /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/gi.test(String(i))
        },
        scaleImage: function (i, e, t, g, f, n) {
          var o = new RegExp('^(http://|https://|//)nos.netease.com/')
          var r = new RegExp('nosdn.127.net')
          var a = new RegExp('^data:image/')
          var s = ''

          function u (i) {
            return !(!r.test(i) && !o.test(i))
          }
          return i && !a.test(i) && u(i) ? (s = i = i.replace(/^(http:|https:)/, ''), (e || t || g) && (r.test(s) || o.test(s)) && (s = (function (i, e, t, g) {
            var n; var o; var r; var a = ''
            if (e && t && (a = '&thumbnail=' + e + (f || 'y') + t), o = (i.split('?') || [])[0], (n = i.split('?')[1] || '') && n.indexOf('imageView') == -1) o = i + (n ? '&' : '?') + 'imageView' + a + '&quality=100'
            else {
              r = n ? n.split('&') : []
              for (var s = 0; s < r.length; s++) r[s].indexOf('thumbnail') == -1 && r[s].indexOf('imageView') == -1 && r[s].indexOf('quality') == -1 || (r.splice(s, 1), s -= 1)
              o = o + '?imageView&quality=100' + (r.length > 0 ? '&' + r.join('&') : '') + a
            }
            return g && (o += '&' + g), o
          }(s, e, t, g))), n && (s = (function (i) {
            var e, t
            return u(i) ? (t = i.substring(i.lastIndexOf('.')), e = new RegExp(/^\.gif/), !(function () {
              var i
              try {
                i = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0
              } catch (e) {
                i = !1
              }
              return function () {
                return i
              }
            }()) || e.test(t) ? i : i.indexOf('imageView') != -1 ? i + '&type=webp' : i + 'imageView&type=webp') : i
          }(s))), s) : i
        }
      })
      var n = Object.freeze({
        __proto__: null,
        initScreen: function (i) {
          var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || window.screen.width
          var t = $('html')
          t.width() > 0 ? t.css('font-size', t.width() / i * 625 + '%') : e > 0 && t.css('font-size', e / i * 625 + '%'), $(window).resize(function () {
            t.css('font-size', t.width() / i * 625 + '%')
          })
        },
        orientation: function (i) {
          var e = $(i || '#forhorview')
          window.orientation !== 90 && window.orientation !== -90 || e.show(), $(window).bind('orientationchange', function () {
            return window.orientation === 0 || window.orientation === 180 ? (e.hide(), !1) : window.orientation === 90 || window.orientation === -90 ? (e.show(), !1) : void 0
          })
        },
        trueload: function (i) {
          var e = i.imgList
          var t = i.customAnimation
          var g = i.completeCallback
          e instanceof Array && (e.length < 1 || Loader.show({
            iFileData: e,
            defaultAnimation: !0,
            customAnimation: function (i) {
              t && t(i)
            },
            completeCallback: function () {
              g && g()
            }
          }))
        },
        isAndroid: function () {
          return /android/i.test(navigator.userAgent.toLowerCase())
        },
        isIOS: function () {
          return /iphone|ipad|ios/i.test(navigator.userAgent.toLowerCase())
        },
        isL10WebView: function () {
          return /l10webview/i.test(window.navigator.userAgent.toLowerCase())
        },
        isL12WebView: function () {
          return /l12webview/i.test(window.navigator.userAgent.toLowerCase())
        },
        isL17WebView: function () {
          return /l17webview/i.test(window.navigator.userAgent.toLowerCase())
        },
        isL20WebView: function () {
          return /l20webview/i.test(window.navigator.userAgent.toLowerCase())
        },
        isNshwebView: function () {
          return /nshwebview/i.test(window.navigator.userAgent.toLowerCase())
        },
        isDashen: function () {
          return /godlike/i.test(window.navigator.userAgent.toLowerCase())
        },
        isPad: function () {
          var i = window.navigator.userAgent
          var e = /(?:Android)/.test(i)
          var t = /(?:Firefox)/.test(i)
          return /(?:iPad|PlayBook)/.test(i) || e && !/(?:Mobile)/.test(i) || t && /(?:Tablet)/.test(i)
        },
        detectBrowser: function () {
          var i; var e; var g = window.navigator.userAgent.toLowerCase()
          var f = r(/version\/(\d+(\.\d+)?)/i)
          var n = r(/edge\/(\d+(\.\d+)?)/i)
          var o = (!/tablet/i.test(g) && /[^-]mobi/i.test(g), {})

          function r (i) {
            var e = g.match(i)
            return e && e.length > 1 && e[1] || ''
          }
          return /opera|opr/i.test(g) ? o = {
            name: 'Opera',
            opera: !0,
            version: f || r(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
          } : /msie|trident/i.test(g) ? o = {
            name: 'Internet Explorer',
            msie: !0,
            version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
          } : /chrome.+? edge/i.test(g) ? o = {
            name: 'Microsoft Edge',
            msedge: !0,
            version: n
          } : /metasr|se 2.x|sogoumobilebrowser/i.test(g) ? o = {
            name: 'sogou',
            sougou: !0,
            version: f
          } : /tencenttraveler|qqbrowser/i.test(g) ? o = {
            name: 'qqbrower',
            qqbrower: !0,
            version: f
          } : /baidubrowser/i.test(g) ? o = {
            name: 'baidubrowser',
            baidubrowser: !0,
            version: f
          } : /ubrowser|ucbrowser/i.test(g) ? o = {
            name: 'ucbrowser',
            ucbrowser: !0,
            version: f
          } : /chrome|crios|crmo/i.test(g) ? o = {
            name: 'Chrome',
            chrome: !0,
            version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
          } : /firefox|iceweasel/i.test(g) ? (o = {
            name: 'Firefox',
            firefox: !0,
            version: r(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
          }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(g) && (o.firefoxos = t)) : o = /safari/i.test(g) ? {
            name: 'Safari',
            safari: !0,
            version: f
          } : {
            name: r(/^(.*)\/(.*) /),
            version: (i = /^(.*)\/(.*) /, e = g.match(i), e && e.length > 1 && e[2] || '')
          }, !o.msedge && /(apple)?webkit/i.test(g) ? (o.name = o.name || 'Webkit', o.webkit = !0, !o.version && f && (o.version = f)) : !o.opera && /gecko\//i.test(g) && (o.name = o.name || 'Gecko', o.gecko = !0, o.version = o.version || r(/gecko\/(\d+(\.\d+)?)/i)), o
        },
        initUnoWebviewScreen: function i (e) {
          var t = 0
          var g = $('body').width()
          g > 0 ? (t = g / e * 625, t += '%', $('html').css('font-size', t)) : ((function () {
            for (var i = 0, e = ['webkit', 'moz'], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + 'RequestAnimationFrame'], window.cancelAnimationFrame = window[e[t] + 'CancelAnimationFrame'] || window[e[t] + 'CancelRequestAnimationFrame']
            window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {
              var g = (new Date()).getTime()
              var f = Math.max(0, 16.7 - (g - i))
              var n = window.setTimeout(function () {
                typeof e === 'function' && e(g + f)
              }, f)
              return i = g + f, n
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (i) {
              clearTimeout(i)
            })
          }()), window.requestAnimationFrame(function () {
            i(e)
          }))
        }
      })
    }
  }])
