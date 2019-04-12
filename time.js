const moment = require("moment");
require("moment-timezone");

moment.tz.setDefault("Asia/Seoul");

const nowD = moment().format("DD");
const nowH = moment().format("HH");
const nowm = moment().format("mm");
const day = moment().format("E");

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
