var mon8am = document.getElementById('8first'),
    tues8am = document.getElementById('8second'),
    weds8am = document.getElementById('8third'),
    thurs8am = document.getElementById('8fourth'),
    fri8am = document.getElementById('8fifth'),
    mon9am = document.getElementById('9first'),
    tues9am = document.getElementById('9second'),
    weds9am = document.getElementById('9third'),
    thurs9am = document.getElementById('9fourth'),
    fri9am = document.getElementById('9fifth'),
    mon10am = document.getElementById('10first'),
    tues10am = document.getElementById('10second'),
    weds10am = document.getElementById('10third'),
    thurs10am = document.getElementById('10fourth'),
    fri10am = document.getElementById('10fifth'),
    mon11am = document.getElementById('11first'),
    tues11am = document.getElementById('11second'),
    weds11am = document.getElementById('11third'),
    thurs11am = document.getElementById('11fourth'),
    fri11am = document.getElementById('11fifth'),
    mon1pm = document.getElementById('1first'),
    tues1pm = document.getElementById('1second'),
    weds1pm = document.getElementById('1third'),
    thurs1pm = document.getElementById('1fourth'),
    fri1pm = document.getElementById('1fifth'),
    mon2pm = document.getElementById('2first'),
    tues2pm = document.getElementById('2second'),
    weds2pm = document.getElementById('2third'),
    thurs2pm = document.getElementById('2fourth'),
    fri2pm = document.getElementById('2fifth'),
    mon3pm = document.getElementById('3first'),
    tues3pm = document.getElementById('3second'),
    weds3pm = document.getElementById('3third'),
    thurs3pm = document.getElementById('3fourth'),
    fri3pm = document.getElementById('3fifth'),
    mon4pm = document.getElementById('4first'),
    tues4pm = document.getElementById('4second'),
    weds4pm = document.getElementById('4third'),
    thurs4pm = document.getElementById('4fourth'),
    fri4pm = document.getElementById('4fifth');

let sched = {
  s11: null,
  s12: null,
  s13: null,
  s14: null,
  s15: null,
  s21: null,
  s22: null,
  s23: null,
  s24: null,
  s25: null,
  s31: null,
  s32: null,
  s33: null,
  s34: null,
  s35: null,
  s41: null,
  s42: null,
  s43: null,
  s44: null,
  s45: null,
  s51: null,
  s52: null,
  s53: null,    
  s54: null,
  s55: null,
  s61: null,
  s62: null,
  s63: null,
  s64: null,
  s65: null,
  s71: null,
  s72: null,
  s73: null,
  s74: null,
  s75: null,
  s81: null,
  s82: null,
  s83: null,
  s84: null,
  s85: null 
}


saveMe = () => {
  // const mon8am = document.getElementById('8first').innerText;
  // console.log(mon8am)
  const mon8am = document.getElementById('8first'),
    tues8am = document.getElementById('8second'),
    weds8am = document.getElementById('8third'),
    thurs8am = document.getElementById('8fourth'),
    fri8am = document.getElementById('8fifth'),
    mon9am = document.getElementById('9first'),
    tues9am = document.getElementById('9second'),
    weds9am = document.getElementById('9third'),
    thurs9am = document.getElementById('9fourth'),
    fri9am = document.getElementById('9fifth'),
    mon10am = document.getElementById('10first'),
    tues10am = document.getElementById('10second'),
    weds10am = document.getElementById('10third'),
    thurs10am = document.getElementById('10fourth'),
    fri10am = document.getElementById('10fifth'),
    mon11am = document.getElementById('11first'),
    tues11am = document.getElementById('11second'),
    weds11am = document.getElementById('11third'),
    thurs11am = document.getElementById('11fourth'),
    fri11am = document.getElementById('11fifth'),
    mon1pm = document.getElementById('1first'),
    tues1pm = document.getElementById('1second'),
    weds1pm = document.getElementById('1third'),
    thurs1pm = document.getElementById('1fourth'),
    fri1pm = document.getElementById('1fifth'),
    mon2pm = document.getElementById('2first'),
    tues2pm = document.getElementById('2second'),
    weds2pm = document.getElementById('2third'),
    thurs2pm = document.getElementById('2fourth'),
    fri2pm = document.getElementById('2fifth'),
    mon3pm = document.getElementById('3first'),
    tues3pm = document.getElementById('3second'),
    weds3pm = document.getElementById('3third'),
    thurs3pm = document.getElementById('3fourth'),
    fri3pm = document.getElementById('3fifth'),
    mon4pm = document.getElementById('4first'),
    tues4pm = document.getElementById('4second'),
    weds4pm = document.getElementById('4third'),
    thurs4pm = document.getElementById('4fourth'),
    fri4pm = document.getElementById('4fifth');

  // same thing here all to values defined above
  let sched = {
    s11: mon8am.innerText,
    s12: tues8am.innerText,
    s13: weds8am.innerText,
    s14: thurs8am.innerText,
    s15: fri8am.innerText,
    s21: mon9am.innerText,
    s22: tues9am.innerText,
    s23: weds9am.innerText,
    s24: thurs9am.innerText,
    s25: fri9am.innerText,
    s31: mon10am.innerText,
    s32: tues10am.innerText,
    s33: weds10am.innerText,
    s34: thurs10am.innerText,
    s35: fri10am.innerText,
    s41: mon11am.innerText,
    s42: tues11am.innerText,
    s43: weds11am.innerText,
    s44: thurs11am.innerText,
    s45: fri11am.innerText,
    s51: mon1pm.innerText,
    s52: tues1pm.innerText,
    s53: weds1pm.innerText,
    s54: thurs1pm.innerText,
    s55: fri1pm.innerText,
    s61: mon2pm.innerText,
    s62: tues2pm.innerText,
    s63: weds2pm.innerText,
    s64: thurs2pm.innerText,
    s65: fri2pm.innerText,
    s71: mon3pm.innerText,
    s72: tues3pm.innerText,
    s73: weds3pm.innerText,
    s74: thurs3pm.innerText,
    s75: fri3pm.innerText,
    s81: mon4pm.innerText,
    s82: tues4pm.innerText,
    s83: weds4pm.innerText,
    s84: thurs4pm.innerText,
    s85: fri4pm.innerText 
  }

  const strSched = JSON.stringify(sched);
  sessionStorage.setItem('sched', strSched);
};


loadMe = () => {
  const sched = JSON.parse(sessionStorage.getItem('sched'))

  const mon8am = document.getElementById('8first'),
    tues8am = document.getElementById('8second'),
    weds8am = document.getElementById('8third'),
    thurs8am = document.getElementById('8fourth'),
    fri8am = document.getElementById('8fifth'),
    mon9am = document.getElementById('9first'),
    tues9am = document.getElementById('9second'),
    weds9am = document.getElementById('9third'),
    thurs9am = document.getElementById('9fourth'),
    fri9am = document.getElementById('9fifth'),
    mon10am = document.getElementById('10first'),
    tues10am = document.getElementById('10second'),
    weds10am = document.getElementById('10third'),
    thurs10am = document.getElementById('10fourth'),
    fri10am = document.getElementById('10fifth'),
    mon11am = document.getElementById('11first'),
    tues11am = document.getElementById('11second'),
    weds11am = document.getElementById('11third'),
    thurs11am = document.getElementById('11fourth'),
    fri11am = document.getElementById('11fifth'),
    mon1pm = document.getElementById('1first'),
    tues1pm = document.getElementById('1second'),
    weds1pm = document.getElementById('1third'),
    thurs1pm = document.getElementById('1fourth'),
    fri1pm = document.getElementById('1fifth'),
    mon2pm = document.getElementById('2first'),
    tues2pm = document.getElementById('2second'),
    weds2pm = document.getElementById('2third'),
    thurs2pm = document.getElementById('2fourth'),
    fri2pm = document.getElementById('2fifth'),
    mon3pm = document.getElementById('3first'),
    tues3pm = document.getElementById('3second'),
    weds3pm = document.getElementById('3third'),
    thurs3pm = document.getElementById('3fourth'),
    fri3pm = document.getElementById('3fifth'),
    mon4pm = document.getElementById('4first'),
    tues4pm = document.getElementById('4second'),
    weds4pm = document.getElementById('4third'),
    thurs4pm = document.getElementById('4fourth'),
    fri4pm = document.getElementById('4fifth');

  mon8am.innerText = sched.s11,
  tues8am.innerText = sched.s12,
  weds8am.innerText = sched.s13,
  thurs8am.innerText = sched.s14,
  fri8am.innerText = sched.s15,
  mon9am.innerText = sched.s21,
  tues9am.innerText = sched.s22,
  weds9am.innerText = sched.s23,
  thurs9am.innerText = sched.s24,
  fri9am.innerText = sched.s25,
  mon10am.innerText = sched.s31,
  tues10am.innerText = sched.s32,
  weds10am.innerText = sched.s33,
  thurs10am.innerText = sched.s34,
  fri10am.innerText = sched.s35,
  mon11am.innerText = sched.s41,
  tues11am.innerText = sched.s42,
  weds11am.innerText = sched.s43,
  thurs11am.innerText = sched.s44,
  fri11am.innerText = sched.s45,
  mon1pm.innerText = sched.s51,
  tues1pm.innerText = sched.s52,
  weds1pm.innerText = sched.s53,
  thurs1pm.innerText = sched.s54,
  fri1pm.innerText = sched.s55,
  mon2pm.innerText = sched.s61,
  tues2pm.innerText = sched.s62,
  weds2pm.innerText = sched.s63,
  thurs2pm.innerText = sched.s64,
  fri2pm.innerText = sched.s65,
  mon3pm.innerText = sched.s71,
  tues3pm.innerText = sched.s72,
  weds3pm.innerText = sched.s73,
  thurs3pm.innerText = sched.s74,
  fri3pm.innerText = sched.s75,
  mon4pm.innerText = sched.s81,
  tues4pm.innerText = sched.s82,
  weds4pm.innerText = sched.s83,
  thurs4pm.innerText = sched.s84,
  fri4pm.innerText = sched.s85
};