/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */
 import dayjs, { weekToday } from '../../../utils/dayjs'


 

export const textTemplate = (data: TextTemplateProps) => {
  const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish,weather } = data

  const week = weekToday()
  var date=null;
  let yy = new Date().getFullYear();
    let mm = new Date().getMonth()+1;
    let dd = new Date().getDate();
    let hh = new Date().getHours();
    let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    date = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
    let text = '丹丹小闹钟为您推送\n'+`今天是${date}`
   
 

  // 工作日/休息日，需要排除节假日

  if (['星期六', '星期日'].includes(week)) {
    text += `
 丹丹小闹钟为您推送\n

嗯哼哼~今天可是${week}哦，上班别迟到了哦~`
  }
  else {
    text += `
     早啊，小丹丹，
今儿个是${week}，
又是一个辛苦的一天，加油打票人😝\n `
  }
  text+=weather;
  // 添加笑话
  if (caiHongpi) {
    
    //     text += `
    // 彩虹屁：
    text += `
${caiHongpi.content}\n`
  }

  if (sayLove) {
    text += `
${sayLove.content}\n`
  }

  // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }

  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  }

  // 添加一句一言
  if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  }

  // 每日英语
  if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  }


  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
