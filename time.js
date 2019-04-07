const moment = require("moment");
require("moment-timezone");

moment.tz.setDefault("Asia/Seoul");

const nowD = moment().format("DD");
const nowH = moment().format("HH");
const nowm = moment().format("mm");
const day = moment().format("E");

const testdata = {
  _id: "5ca82a1d3cbaa743a4363f5f",
  Monday: {
    date: "4월 8일 (월)",
    moning: [
      "메밀전병",
      "쌀밥",
      "북어채무국",
      "알어묵조림",
      "콩나물무침",
      "배추김치"
    ],
    lunch: [
      "<일품식>",
      "철판)치즈닭갈비",
      "쌀밥",
      "무다시마국",
      "도토리묵&양념장",
      "배추김치",
      "요구르트"
    ],
    dinner: [
      "돈육숙주굴소스볶음",
      "쌀밥",
      "콩나물맑은국",
      "치커리사과생채",
      "콩자반",
      "배추김치"
    ]
  },
  Tuesday: {
    date: "4월 9일 (화)",
    moning: [
      "<일품식>",
      "달걀마요토스트",
      "모닝빵/잼",
      "방울토마토",
      "그린샐러드&사우젼D",
      "시리얼",
      "우유"
    ],
    lunch: [
      "뚝)설렁탕&소면",
      "쌀밥",
      "옥수수맛살전",
      "알감자조림",
      "마늘종지무침",
      "깍두기"
    ],
    dinner: [
      "<일품식>",
      "어묵우동",
      "참치야채주먹밥",
      "매콤떡볶이",
      "김말이튀김",
      "치자단무지&락교",
      "쥬시쿨"
    ]
  },
  Wensday: {
    date: "4월 10일 (수)",
    moning: [
      "쇠고기버섯죽",
      "쌀밥",
      "흑임자연두부샐러드",
      "파래김&양념장",
      "참나물유자초생채",
      "배추김치"
    ],
    lunch: [
      "<일품식>",
      "카레라이스",
      "팽이미소국",
      "치즈핫도그",
      "야채초절임",
      "배추김치",
      "망고쥬스"
    ],
    dinner: [
      "뚝)냉이된장찌개",
      "쌀밥",
      "오징어까스&칠리S",
      "우엉채조림",
      "숙주나물",
      "배추김치"
    ]
  },
  Friday: {
    date: "4월 12일 (금)",
    moning: [
      "<일품식>",
      "크로와상샌드위치",
      "토스트/잼/버터",
      "춘권튀김",
      "오렌지",
      "카누,모카골드커피",
      "요플레"
    ],
    lunch: [
      "<일품식>",
      "전주비빔밥&달걀F",
      "유부맑은국",
      "야채튀김&초간장",
      "양념고추지",
      "배추김치"
    ],
    dinner: [
      "고등어무조림",
      "쌀밥",
      "콩나물김치국",
      "게맛살케찹조림",
      "오이생채",
      "배추김치",
      "포도쥬스"
    ]
  },
  Saturday: {
    date: "4월 13일 (토)",
    moning: [
      "떡만두국",
      "잡곡밥",
      "미트볼데리야끼조림",
      "멸치아몬드조림",
      "무말랭이무침",
      "열무김치"
    ],
    lunch: [
      "뚝)순두부찌개",
      "쌀밥",
      "한식잡채",
      "참나물전",
      "고춧잎지무침",
      "깍두기"
    ],
    dinner: [
      "<일품식>",
      "파채돈까스&오리엔탈D",
      "김치볶음밥",
      "덴까스우동국물",
      "후르츠칵테일",
      "야채초절임"
    ]
  },
  Sunday: {
    date: "4월 14일 (일)",
    moning: [
      "<일품식>",
      "즉석)라면",
      "쌀밥",
      "미니해쉬포테이토",
      "단무지무침",
      "배추김치"
    ],
    lunch: [
      "<일품식>",
      "파인애플볶음밥",
      "어묵곤약국",
      "사모사튀김",
      "야채초절임",
      "마카로니콘샐러드"
    ],
    dinner: [
      "<일품식>",
      "버섯제육덮밥",
      "무순미소국",
      "야채크로켓&케찹",
      "짜샤이볶음",
      "배추김치"
    ]
  },
  __v: 0
};

export const now_data = data => {
  let mon = data.Monday;
  let Tue = data.Tuesday;
  let Wen = data.Wensday;
  let Thr = data.Thursday;
  let Fri = data.Friday;
  let Sat = data.Saturday;
  let Sun = data.Sunday;
  if (day == 1) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [mon.moning, "moning", mon.date];
      } else {
        return [mon.lunch, "lunch", mon.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [mon.moning, "moning", mon.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [Tue.moning, "moning", Tue.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [mon.lunch, "lunch", mon.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [mon.lunch, "lunch", mon.date];
      } else {
        return [mon.dinner, "dinner", mon.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [mon.dinner, "dinner", mon.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 40) {
        return [mon.dinner, "dinner", mon.date];
      } else {
        return [Tue.moning, "moning", Tue.date];
      }
    }
  }
  if (day == 2) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [Tue.moning, "moning", Tue.date];
      } else {
        return [Tue.lunch, "lunch", Tue.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [Tue.moning, "moning", Tue.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [Wen.moning, "moning", Wen.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [Tue.lunch, "lunch", Tue.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [Tue.lunch, "lunch", Tue.date];
      } else {
        return [Tue.dinner, "dinner", Tue.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [Tue.dinner, "dinner", Tue.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 40) {
        return [Tue.dinner, "dinner", Tue.date];
      } else {
        return [Wen.moning, "moning", Wen.date];
      }
    }
  }
  if (day == 3) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [Wen.moning, "moning", Wen.date];
      } else {
        return [Wen.lunch, "lunch", Wen.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [Wen.moning, "moning", Wen.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [Thr.moning, "moning", Thr.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [Wen.lunch, "lunch", Wen.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [Wen.lunch, "lunch", Wen.date];
      } else {
        return [Wen.dinner, "dinner", Wen.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [Wen.dinner, "dinner", Wen.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 40) {
        return [Wen.dinner, "dinner", Wen.date];
      } else {
        return [Thr.moning, "moning", Thr.date];
      }
    }
  }
  if (day == 4) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [Thr.moning, "moning", Thr.date];
      } else {
        return [Thr.lunch, "lunch", Thr.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [Thr.moning, "moning", Thr.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [Fri.moning, "moning", Fri.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [Thr.lunch, "lunch", Thr.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [Thr.lunch, "lunch", Thr.date];
      } else {
        return [Thr.dinner, "dinner", Thr.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [Thr.dinner, "dinner", Thr.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 40) {
        return [Thr.dinner, "dinner", Thr.date];
      } else {
        return [Fri.moning, "moning", Fri.date];
      }
    }
  }
  if (day == 5) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [Fri.moning, "moning", Fri.date];
      } else {
        return [Fri.lunch, "lunch", Fri.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [Fri.moning, "moning", Fri.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [Sat.moning, "moning", Sat.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [Fri.lunch, "lunch", Fri.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [Fri.lunch, "lunch", Fri.date];
      } else {
        return [Fri.dinner, "dinner", Fri.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [Fri.dinner, "dinner", Fri.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 40) {
        return [Fri.dinner, "dinner", Fri.date];
      } else {
        return [Sat.moning, "moning", Sat.date];
      }
    }
  }
  if (day == 6) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [Sat.moning, "moning", Sat.date];
      } else {
        return [Sat.lunch, "lunch", Sat.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [Sat.moning, "moning", Sat.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [Sun.moning, "moning", Sun.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [Sat.lunch, "lunch", Sat.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [Sat.lunch, "lunch", Sat.date];
      } else {
        return [Sat.dinner, "dinner", Sat.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [Sat.dinner, "dinner", Sat.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 40) {
        return [Sat.dinner, "dinner", Sat.date];
      } else {
        return [Sun.moning, "moning", Sun.date];
      }
    }
  }
  if (day == 7) {
    if (nowH == 9) {
      if (nowm <= 30 && nowm >= 0) {
        return [Sun.moning, "moning", Sun.date];
      } else {
        return [Sun.lunch, "lunch", Sun.date];
      }
    } else if (nowH >= 0 && nowH <= 8) {
      return [Sun.moning, "moning", Sun.date];
    } else if (nowH <= 23 && nowH >= 20) {
      return [mon.moning, "moning", mon.date];
    } else if (nowH <= 12 && nowH >= 10) {
      return [Sun.lunch, "lunch", Sun.date];
    } else if (nowH == 13) {
      if (nowm >= 0 && nowm <= 40) {
        return [Sun.lunch, "lunch", Sun.date];
      } else {
        return [Sun.dinner, "dinner", Sun.date];
      }
    } else if (nowH <= 18 && nowH >= 14) {
      return [Sun.dinner, "dinner", Sun.date];
    } else if (nowH == 19) {
      if (nowm >= 0 && nowm <= 39) {
        return [Sun.dinner, "dinner", Sun.date];
      } else {
        return [mon.moning, "moning", mon.date];
      }
    }
  }
};

export const today_data = data => {
  let mon = data.Monday;
  let Tue = data.Tuesday;
  let Wen = data.Wensday;
  let Thr = data.Thursday;
  let Fri = data.Friday;
  let Sat = data.Saturday;
  let Sun = data.Sunday;
  if (day == 1) {
    return mon;
  }
  if (day == 2) {
    return Tue;
  }
  if (day == 3) {
    return Wen;
  }
  if (day == 4) {
    return Thr;
  }
  if (day == 5) {
    return Fri;
  }
  if (day == 6) {
    return Sat;
  }
  if (day == 7) {
    if (nowH == 19) {
      if (nowm >= 40) {
        return Mon;
      } else {
        return Sun;
      }
    } else if (nowH > 19) {
      return Mon;
    } else {
      return Sun;
    }
  }
};

//console.log(now_data(testdata));
