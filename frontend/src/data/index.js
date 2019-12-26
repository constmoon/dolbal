const accList = [
  {
    acc_id: "718620",
    occr_date: "20191123",
    occr_time: "082300",
    exp_clr_date: "20191124",
    exp_clr_time: "2200",
    acc_type: "A10",
    acc_dtype: "10B03",
    link_id: "1130017700",
    grs80tm_x: "194425.134639",
    grs80tm_y: "450860.005095",
    acc_info: "[통제안내] '연세로 차없는 거리' 행사로 연세로 연세대앞3거리에서 신촌로터리구간 양방면 전면통제되고 있으니 참고운행 바랍니다. ※ 통제시간 : 11월 22일(금) 14:00 ∼ 11월 24일(일) 22:00"
  },
  {
    acc_id: "716951",
    occr_date: "20191110",
    occr_time: "181000",
    exp_clr_date: "20191110",
    exp_clr_time: "233000",
    acc_type: "A11",
    acc_dtype: "11B01",
    link_id: "1000008300",
    grs80tm_x: "197921",
    grs80tm_y: "452679",
    acc_info: "세종대로 광화문삼거리 → 세종로사거리방향 행사관련으로 1차로 차단"
  },
  {
    acc_id: "722552",
    occr_date: "20191224",
    occr_time: "1200",
    exp_clr_date: "20191224",
    exp_clr_time: "220000",
    acc_type: "A10",
    acc_dtype: "10B02",
    link_id: "1000008400",
    grs80tm_x: "198003",
    grs80tm_y: "452557",
    acc_info: "[집회]- 17:00∼22:00 교보빌딩 앞"
  },
  {
    acc_id: "722528",
    occr_date: "20191224",
    occr_time: "145900",
    exp_clr_date: "20191224",
    exp_clr_time: "233000",
    acc_type: "A04",
    acc_dtype: "04B01",
    link_id: "1000013600",
    grs80tm_x: "199170",
    grs80tm_y: "453081",
    acc_info: "율곡로 창덕궁 → 원남동사거리방향 공사 1차로 차단"
  }
];

const accTypeList = [
  {
    acc_type: "A01",
    acc_type_nm: "교통사고"
  },
  {
    acc_type: "A02",
    acc_type_nm: "차량고장"
  },
  {
    acc_type: "A03",
    acc_type_nm: "보행사고"
  },
  {
    acc_type: "A04",
    acc_type_nm: "공사"
  },
  {
    acc_type: "A05",
    acc_type_nm: "낙하물"
  },
  {
    acc_type: "A06",
    acc_type_nm: "버스사고"
  },
  {
    acc_type: "A07",
    acc_type_nm: "지하철사고"
  },
  {
    acc_type: "A08",
    acc_type_nm: "화재"
  },
  {
    acc_type: "A09",
    acc_type_nm: "기상/재난"
  },
  {
    acc_type: "A10",
    acc_type_nm: "집회및행사"
  },
  {
    acc_type: "A11",
    acc_type_nm: "기타"
  },
  {
    acc_type: "A12",
    acc_type_nm: "제보"
  },
  {
    acc_type: "A13",
    acc_type_nm: "단순정보"
  }
];

export const getAccType = (type) => accTypeList.find(acc => acc.acc_type === type).acc_type_nm;
export default accList;