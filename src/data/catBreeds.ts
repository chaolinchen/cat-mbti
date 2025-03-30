export interface CatBreed {
  name: string;
  description: string;
  imageUrl: string;
  characteristics: string[];
  detailedInfo: {
    origin: string;
    history: string;
    personality: string;
    care: {
      grooming: string[];
      exercise: string[];
      diet: string[];
      health: string[];
    };
  };
}

export const mbtiCatBreeds: Record<string, CatBreed> = {
  'ESTJ': {
    name: '英國短毛貓',
    description: '英國短毛貓穩重、守時，喜歡按計劃行事，完全符合 ESTJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    characteristics: ['沉穩', '守時', '規律', '忠誠', '注重細節'],
    detailedInfo: {
      origin: '英國',
      history: '英國短毛貓是世界上最古老的貓品種之一，起源於古羅馬時期。',
      personality: '性格沉穩，喜歡規律的生活，對主人忠誠，做事認真負責。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '定期修剪指甲'],
        exercise: ['每天固定運動時間', '喜歡玩益智玩具', '需要適度的戶外活動'],
        diet: ['定時定量餵食', '需要高品質的貓糧', '保持充足的水分'],
        health: ['定期體檢', '注意體重控制', '預防關節問題']
      }
    }
  },
  'ISTJ': {
    name: '俄羅斯藍貓',
    description: '俄羅斯藍貓安靜、優雅，喜歡獨處，完美符合 ISTJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    characteristics: ['安靜', '優雅', '細緻', '獨立', '忠誠'],
    detailedInfo: {
      origin: '俄羅斯',
      history: '俄羅斯藍貓起源於俄羅斯的阿爾漢格爾斯克港，是自然形成的品種。',
      personality: '性格安靜，喜歡獨處，做事細緻，對主人忠誠但保持一定距離。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['適度的室內活動', '喜歡獨自玩耍', '需要安靜的環境'],
        diet: ['定時定量餵食', '需要高蛋白質的貓糧', '保持充足的水分'],
        health: ['定期體檢', '注意牙齒護理', '預防呼吸道問題']
      }
    }
  },
  'ENTJ': {
    name: '孟加拉貓',
    description: '孟加拉貓聰明、自信，具有領導才能，喜歡挑戰，完全符合 ENTJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg',
    characteristics: ['聰明', '自信', '領導力', '活力', '好奇'],
    detailedInfo: {
      origin: '美國',
      history: '孟加拉貓是亞洲豹貓和家貓的混種，起源於1960年代。',
      personality: '性格活潑，聰明自信，具有領導才能，喜歡挑戰和探索。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '定期修剪指甲'],
        exercise: ['需要大量運動', '喜歡攀爬和跳躍', '需要智力遊戲'],
        diet: ['高蛋白質飲食', '需要新鮮食物', '保持充足水分'],
        health: ['定期體檢', '注意關節健康', '預防肥胖']
      }
    }
  },
  'INTJ': {
    name: '暹羅貓',
    description: '暹羅貓聰明、獨立，喜歡思考，具有創造性，完美符合 INTJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
    characteristics: ['聰明', '獨立', '創造性', '深思熟慮', '忠誠'],
    detailedInfo: {
      origin: '泰國',
      history: '暹羅貓是世界上最古老的貓品種之一，起源於泰國。',
      personality: '性格獨立，聰明好奇，喜歡思考，對主人忠誠。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['適度運動', '喜歡智力遊戲', '需要探索空間'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防呼吸道問題']
      }
    }
  },
  'ESFJ': {
    name: '波斯貓',
    description: '波斯貓友善、優雅，喜歡與人互動，注重和諧，完全符合 ESFJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    characteristics: ['友善', '優雅', '親人', '注重和諧', '忠誠'],
    detailedInfo: {
      origin: '伊朗',
      history: '波斯貓是最受歡迎的長毛貓品種之一，起源於古波斯。',
      personality: '性格友善，優雅安靜，喜歡與人互動，注重和諧。',
      care: {
        grooming: ['每天梳理', '定期清潔眼睛', '定期修剪毛髮'],
        exercise: ['適度運動', '喜歡室內活動', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意毛球問題', '預防肥胖']
      }
    }
  },
  'ISFJ': {
    name: '布偶貓',
    description: '布偶貓溫柔、體貼，非常忠誠，喜歡照顧他人，完美符合 ISFJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    characteristics: ['溫柔', '體貼', '忠誠', '親人', '安靜'],
    detailedInfo: {
      origin: '美國',
      history: '布偶貓是1960年代在美國培育的新品種。',
      personality: '性格溫柔，體貼親人，非常忠誠，喜歡陪伴。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '定期修剪指甲'],
        exercise: ['適度運動', '喜歡室內活動', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意關節健康', '預防肥胖']
      }
    }
  },
  'ENFJ': {
    name: '緬因貓',
    description: '緬因貓友善、聰明，具有領導才能，喜歡與人互動，完全符合 ENFJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg',
    characteristics: ['友善', '聰明', '領導力', '親人', '活潑'],
    detailedInfo: {
      origin: '美國',
      history: '緬因貓是美國最古老的貓品種之一，起源於緬因州。',
      personality: '性格友善，聰明活潑，具有領導才能，喜歡與人互動。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '定期修剪指甲'],
        exercise: ['需要大量運動', '喜歡戶外活動', '需要玩具'],
        diet: ['高蛋白質飲食', '需要新鮮食物', '保持充足水分'],
        health: ['定期體檢', '注意關節健康', '預防肥胖']
      }
    }
  },
  'INFJ': {
    name: '挪威森林貓',
    description: '挪威森林貓聰明、獨立，具有洞察力，喜歡獨處，完美符合 INFJ 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
    characteristics: ['聰明', '獨立', '洞察力', '忠誠', '安靜'],
    detailedInfo: {
      origin: '挪威',
      history: '挪威森林貓是北歐最古老的貓品種之一。',
      personality: '性格獨立，聰明安靜，具有洞察力，對主人忠誠。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '定期修剪指甲'],
        exercise: ['適度運動', '喜歡攀爬', '需要戶外活動'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意關節健康', '預防肥胖']
      }
    }
  },
  'ESTP': {
    name: '阿比西尼亞貓',
    description: '阿比西尼亞貓活潑、好動，喜歡冒險，適應力強，完全符合 ESTP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    characteristics: ['活潑', '好動', '聰明', '好奇', '適應力強'],
    detailedInfo: {
      origin: '埃塞俄比亞',
      history: '阿比西尼亞貓是最古老的貓品種之一，起源於古埃及。',
      personality: '性格活潑，好動聰明，喜歡冒險，適應力強。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['需要大量運動', '喜歡攀爬和跳躍', '需要玩具'],
        diet: ['高蛋白質飲食', '需要新鮮食物', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  },
  'ISTP': {
    name: '埃及貓',
    description: '埃及貓優雅、獨立，喜歡探索，具有分析能力，完美符合 ISTP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    characteristics: ['優雅', '獨立', '聰明', '好奇', '安靜'],
    detailedInfo: {
      origin: '埃及',
      history: '埃及貓是世界上最古老的貓品種之一，起源於古埃及。',
      personality: '性格優雅，獨立安靜，喜歡探索，具有分析能力。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['適度運動', '喜歡探索', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  },
  'ENTP': {
    name: '德文雷克斯貓',
    description: '德文雷克斯貓聰明、活潑，喜歡創新，具有創造力，完全符合 ENTP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg',
    characteristics: ['聰明', '活潑', '創造力', '好奇', '親人'],
    detailedInfo: {
      origin: '英國',
      history: '德文雷克斯貓是1960年代在英國發現的新品種。',
      personality: '性格活潑，聰明好奇，喜歡創新，具有創造力。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['需要大量運動', '喜歡玩耍', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意皮膚護理', '預防肥胖']
      }
    }
  },
  'INTP': {
    name: '科拉特貓',
    description: '科拉特貓聰明、獨立，喜歡思考，具有分析能力，完美符合 INTP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
    characteristics: ['聰明', '獨立', '分析能力', '安靜', '忠誠'],
    detailedInfo: {
      origin: '泰國',
      history: '科拉特貓是泰國最古老的貓品種之一。',
      personality: '性格獨立，聰明安靜，喜歡思考，具有分析能力。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['適度運動', '喜歡智力遊戲', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  },
  'ESFP': {
    name: '美國短毛貓',
    description: '美國短毛貓活潑、友善，喜歡與人互動，享受當下，完全符合 ESFP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    characteristics: ['活潑', '友善', '親人', '好奇', '適應力強'],
    detailedInfo: {
      origin: '美國',
      history: '美國短毛貓是美國最受歡迎的貓品種之一。',
      personality: '性格活潑，友善親人，喜歡與人互動，享受當下。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['需要適度運動', '喜歡玩耍', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  },
  'ISFP': {
    name: '伯曼貓',
    description: '伯曼貓溫柔、優雅，喜歡美感和創意，具有藝術氣質，完美符合 ISFP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg',
    characteristics: ['溫柔', '優雅', '藝術氣質', '安靜', '忠誠'],
    detailedInfo: {
      origin: '緬甸',
      history: '伯曼貓是緬甸最古老的貓品種之一。',
      personality: '性格溫柔，優雅安靜，喜歡美感和創意。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['適度運動', '喜歡安靜活動', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  },
  'ENFP': {
    name: '奧西貓',
    description: '奧西貓活潑、聰明，喜歡創新，具有創造力，完全符合 ENFP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg',
    characteristics: ['活潑', '聰明', '創造力', '好奇', '親人'],
    detailedInfo: {
      origin: '美國',
      history: '奧西貓是1960年代在美國培育的新品種。',
      personality: '性格活潑，聰明好奇，喜歡創新，具有創造力。',
      care: {
        grooming: ['每週梳理1-2次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['需要大量運動', '喜歡玩耍', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  },
  'INFP': {
    name: '土耳其安哥拉貓',
    description: '土耳其安哥拉貓優雅、敏感，具有同理心，喜歡和諧，完美符合 INFP 的性格特徵。',
    imageUrl: 'https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg',
    characteristics: ['優雅', '敏感', '同理心', '安靜', '忠誠'],
    detailedInfo: {
      origin: '土耳其',
      history: '土耳其安哥拉貓是世界上最古老的貓品種之一。',
      personality: '性格優雅，敏感安靜，具有同理心，喜歡和諧。',
      care: {
        grooming: ['每週梳理2-3次', '定期清潔耳朵', '保持毛髮光澤'],
        exercise: ['適度運動', '喜歡安靜活動', '需要玩具'],
        diet: ['高品質貓糧', '定時定量餵食', '保持充足水分'],
        health: ['定期體檢', '注意牙齒護理', '預防肥胖']
      }
    }
  }
}; 