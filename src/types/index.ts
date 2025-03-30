export interface CatInfo {
  name: string;
  breed?: string;
  age?: string;
}

export interface CatBreed {
  name: string;
  description: string;
  characteristics: string[];
  image: string;
  detailedInfo: {
    origin: string;
    history: string;
    personality: string;
    care: {
      grooming: string;
      exercise: string;
      diet: string;
      health: string;
    };
  };
}

export interface Personality {
  description: string;
  traits: string[];
  tips: string[];
  dialogue: string[];
}

export type PersonalityType = 
  | 'ESTJ' | 'ISTJ' | 'ENTJ' | 'INTJ'
  | 'ESTP' | 'ISTP' | 'ENTP' | 'INTP'
  | 'ESFJ' | 'ISFJ' | 'ENFJ' | 'INFJ'
  | 'ESFP' | 'ISFP' | 'ENFP' | 'INFP';

export interface MBTIType {
  type: string;
  name: string;
  description: string;
  traits: string[];
  suggestions: string[];
  dialogues: string[];
}

export const personalityTypeNames: { [key: string]: string } = {
  ISTJ: "謹慎守序貓",
  ISFJ: "溫柔守護貓",
  INFJ: "神秘哲思貓",
  INTJ: "獨立思考貓",
  ISTP: "靈活探索貓",
  ISFP: "優雅藝術貓",
  INFP: "夢想家貓",
  INTP: "邏輯思考貓",
  ESTP: "活力探險貓",
  ESFP: "歡樂表演貓",
  ENFP: "創意夢想貓",
  ENTP: "創新智慧貓",
  ESTJ: "效率管理貓",
  ESFJ: "和諧關懷貓",
  ENFJ: "溫暖領袖貓",
  ENTJ: "領導者貓"
};

export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    scores: {
      [key: string]: number;
    };
  }[];
} 