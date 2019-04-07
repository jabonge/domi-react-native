import WeekPresenter from "./WeekPresenter";
import React from "react";
//import { Api } from "../../api";
import { today_data } from "../../time";

export default class extends React.Component {
  state = {
    loading: true,
    data: []
  };
  async componentDidMount() {
    try {
      // const data = await Api.get("/");
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

      this.setState({ data: testdata, loading: false });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { loading, data } = this.state;

    return <WeekPresenter data={data} loading={loading} />;
  }
}
