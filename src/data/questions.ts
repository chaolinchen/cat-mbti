import { QuizQuestion } from '../types/quiz';

export const questions: QuizQuestion[] = [
  {
    question: "當家裡來訪客人時，你家貓咪最常出現的行為是？",
    options: [
      { value: "A", label: "一聽到聲響就跑到門口，主動蹭客人", score: { E: 2 } },
      { value: "B", label: "稍微觀望一下，但還是慢慢走到客人面前", score: { E: 1 } },
      { value: "C", label: "躲在沙發後方，等氣氛安靜才出來", score: { I: 1 } },
      { value: "D", label: "直接跑進房間，直到客人離開都不出現", score: { I: 2 } }
    ]
  },
  {
    question: "飼主準備好逗貓棒邀貓咪玩耍，貓咪通常怎麼反應？",
    options: [
      { value: "A", label: "極度興奮，一秒就撲向逗貓棒", score: { E: 2 } },
      { value: "B", label: "觀望幾秒才加入，但仍顯得開心", score: { E: 1 } },
      { value: "C", label: "偶爾揮幾下，興致不算太高", score: { I: 1 } },
      { value: "D", label: "幾乎不理睬，寧可自己待在角落", score: { I: 2 } }
    ]
  },
  {
    question: "若家中突然出現另一隻陌生貓，貓咪最常怎麼做？",
    options: [
      { value: "A", label: "馬上跑去嗅聞、打招呼，顯示出極大好奇心", score: { E: 2 } },
      { value: "B", label: "先保持一點距離，再嘗試互動", score: { E: 1 } },
      { value: "C", label: "遠遠觀察，不想太快靠近", score: { I: 1 } },
      { value: "D", label: "乾脆直接離開，似乎懶得理會", score: { I: 2 } }
    ]
  },
  {
    question: "家中新增了一個高高的貓跳台，貓咪的第一次探索行為？",
    options: [
      { value: "A", label: "小心翼翼地試踩每個階層，確定穩固度", score: { S: 2 } },
      { value: "B", label: "先聞一聞材質，然後再決定要不要往上跳", score: { S: 1 } },
      { value: "C", label: "稍微測量一下高度，還是很快就跳到頂樓", score: { N: 1 } },
      { value: "D", label: "幾乎不考慮安全性，衝上去並四處張望", score: { N: 2 } }
    ]
  },
  {
    question: "貓咪聽到窗外的鳥叫或奇怪聲響時，通常怎樣？",
    options: [
      { value: "A", label: "先停住動作，想精準定位聲音來源", score: { S: 2 } },
      { value: "B", label: "慢慢移動靠近窗邊，觀察實際情況", score: { S: 1 } },
      { value: "C", label: "直接跳到高處，憑直覺找聲音", score: { N: 1 } },
      { value: "D", label: "顯得特別興奮，像在幻想「有獵物！」", score: { N: 2 } }
    ]
  },
  {
    question: "你買了一個設計特殊的玩具，貓咪初次接觸時會？",
    options: [
      { value: "A", label: "細細嗅聞，檢查材質與氣味", score: { S: 2 } },
      { value: "B", label: "用爪子輕拍兩下，測試能否撕咬", score: { S: 1 } },
      { value: "C", label: "馬上撲上去，沒在管細節", score: { N: 1 } },
      { value: "D", label: "看起來把玩具想像成「神祕生物」，瘋狂追打", score: { N: 2 } }
    ]
  },
  {
    question: "飼主表現出情緒低落或哭泣，貓咪多半的反應是？",
    options: [
      { value: "A", label: "在一旁觀察，不立即靠近", score: { T: 2 } },
      { value: "B", label: "走過來看看你，但不做明顯安撫動作", score: { T: 1 } },
      { value: "C", label: "輕聲喵喵並靠近，像在試圖安慰", score: { F: 1 } },
      { value: "D", label: "直接黏到你身上，喵叫不斷示意關懷", score: { F: 2 } }
    ]
  },
  {
    question: "如果貓咪想要的零食被暫時收起來，牠通常…",
    options: [
      { value: "A", label: "坐在原地注視，似乎在想怎麼自己拿到", score: { T: 2 } },
      { value: "B", label: "盯著你一會兒，但沒有太大動靜", score: { T: 1 } },
      { value: "C", label: "喵喵撒嬌，試圖讓你心軟拿出來", score: { F: 1 } },
      { value: "D", label: "乾脆貼著你腳邊，不停用可憐表情要你給", score: { F: 2 } }
    ]
  },
  {
    question: "給貓咪嘗試一件可愛小衣服，若牠不喜歡時會…",
    options: [
      { value: "A", label: "不聲不響想把衣服脫掉，不發多餘聲音", score: { T: 2 } },
      { value: "B", label: "可能露出嫌棄表情，但仍保持安靜", score: { T: 1 } },
      { value: "C", label: "發出不耐煩的喵聲，想抗議", score: { F: 1 } },
      { value: "D", label: "劇烈掙扎或大聲抗議「喵～」", score: { F: 2 } }
    ]
  },
  {
    question: "貓咪在日常飲食與睡覺上，是否固定時間？",
    options: [
      { value: "A", label: "幾乎每天精準到同一時刻就要吃飯、睡覺", score: { J: 2 } },
      { value: "B", label: "大致固定，但偶爾會小亂一下", score: { J: 1 } },
      { value: "C", label: "常常不定時，想吃就鬧，想睡就鑽被窩", score: { P: 1 } },
      { value: "D", label: "完全隨心所欲，毫無規律可言", score: { P: 2 } }
    ]
  },
  {
    question: "飼主把貓砂盆移到不同的房間，貓咪多半？",
    options: [
      { value: "A", label: "顯出強烈抗拒，似乎不願接受改變", score: { J: 2 } },
      { value: "B", label: "雖然猶豫，但最後還是能接受新位置", score: { J: 1 } },
      { value: "C", label: "無所謂，反正到哪裡上廁所都行", score: { P: 1 } },
      { value: "D", label: "反而變得很興奮，覺得是新奇冒險", score: { P: 2 } }
    ]
  },
  {
    question: "帶貓咪到陌生環境(如寵物旅館)，牠的探索模式？",
    options: [
      { value: "A", label: "衝到每個角落，還跟人/其他貓互動", score: { E: 2, N: 1 } },
      { value: "B", label: "想看看新環境但會先禮貌性觀望", score: { E: 1, S: 1 } },
      { value: "C", label: "先找地方藏起來，不想與陌生人接觸", score: { I: 2, S: 1 } },
      { value: "D", label: "暗中觀察一會兒，卻對各種新鮮事物充滿想像", score: { I: 1, N: 2 } }
    ]
  },
  {
    question: "家中添購了新家具(如大沙發)，貓咪第一次反應？",
    options: [
      { value: "A", label: "很快跳上去翻滾，也不怕生", score: { E: 2, N: 1 } },
      { value: "B", label: "小心摸索一會兒，然後慢慢放鬆", score: { E: 1, S: 1 } },
      { value: "C", label: "繞圈觀察，不輕易爬上去", score: { I: 2, S: 1 } },
      { value: "D", label: "表面看似排斥，但其實暗中好奇新玩法", score: { I: 1, N: 2 } }
    ]
  },
  {
    question: "飼主定時餵食，但貓咪偶爾提前餓了，牠會？",
    options: [
      { value: "A", label: "乖乖等到時間，頂多默默盯著飼料櫃", score: { T: 1, J: 2 } },
      { value: "B", label: "看你一眼，好像不爽但仍守規矩", score: { T: 2, J: 1 } },
      { value: "C", label: "喵喵撒嬌，試圖打破規定提前拿到食物", score: { F: 1, P: 1 } },
      { value: "D", label: "各種騷擾行為，要你立即打破定時", score: { F: 2, P: 2 } }
    ]
  },
  {
    question: "玩到一半，飼主突然停下逗貓，貓咪常見舉動是？",
    options: [
      { value: "A", label: "自己去做別的事，不跟你計較", score: { T: 1, J: 2 } },
      { value: "B", label: "看你一下，雖然不解但也不追究", score: { T: 2, J: 1 } },
      { value: "C", label: "用小聲喵喵叫你，像在說「再陪我一下」", score: { F: 1, P: 1 } },
      { value: "D", label: "抗議式喵叫或扯你衣服，要你繼續玩", score: { F: 2, P: 2 } }
    ]
  },
  {
    question: "貓咪生氣時，最常見的表現是？",
    options: [
      { value: "A", label: "沉默且疏遠，不太威嚇", score: { T: 2 } },
      { value: "B", label: "保持冷靜姿態，但眼神略微不悅", score: { T: 1 } },
      { value: "C", label: "用低鳴或小聲咆哮來表達不爽", score: { F: 1 } },
      { value: "D", label: "直接炸毛、嘶吼，毫不掩飾", score: { F: 2 } }
    ]
  },
  {
    question: "飼主回家時，貓咪的迎接方式？",
    options: [
      { value: "A", label: "衝到門口，熱情繞腳或跳到你懷裡", score: { E: 2 } },
      { value: "B", label: "等你進家門一會兒才出現，但還會蹭你", score: { E: 1 } },
      { value: "C", label: "只是在遠處看一眼，好像懶得理", score: { I: 1 } },
      { value: "D", label: "完全懶得出現，可能繼續睡覺", score: { I: 2 } }
    ]
  },
  {
    question: "貓咪在玩雷射筆紅點時，你觀察到牠…",
    options: [
      { value: "A", label: "很專注追著那個點，像想搞清楚那是什麼", score: { S: 2 } },
      { value: "B", label: "偶爾停下來聞地板，想找出實體", score: { S: 1 } },
      { value: "C", label: "不停嘗試撲抓，雖然抓不到也不放棄", score: { N: 1 } },
      { value: "D", label: "似乎把那個點想像成活物，整個陷入瘋狂", score: { N: 2 } }
    ]
  },
  {
    question: "飼主打掃房間後，搬動家具佈局，貓咪的反應…",
    options: [
      { value: "A", label: "顯得很不安，像被迫改變熟悉環境", score: { J: 2 } },
      { value: "B", label: "起初不適應，但勉強順從", score: { J: 1 } },
      { value: "C", label: "好奇新擺設，可能小心試探新路線", score: { P: 1 } },
      { value: "D", label: "超興奮，覺得是全新冒險場", score: { P: 2 } }
    ]
  },
  {
    question: "家裡突發狀況（例如打雷或煙霧警報誤響），貓咪反應？",
    options: [
      { value: "A", label: "先冷靜判斷聲音來源，不大依賴主人安撫", score: { I: 1, T: 2 } },
      { value: "B", label: "躲到角落但持續觀察你是否會處理", score: { I: 2, T: 1 } },
      { value: "C", label: "急著找你求安慰或抱抱，表現焦慮", score: { E: 1, F: 1 } },
      { value: "D", label: "大聲喵叫拉注意力，要你來救牠", score: { E: 2, F: 2 } }
    ]
  }
]; 