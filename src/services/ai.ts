import { HfInference } from '@huggingface/inference';

export class AIService {
  private hf: HfInference;
  private static instance: AIService;

  private constructor() {
    const token = process.env.HUGGING_FACE_TOKEN || '';
    if (!token) {
      console.warn('未設置 Hugging Face token，某些功能可能受限');
    }
    this.hf = new HfInference(token);
  }

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  public async analyzeText(text: string): Promise<string> {
    try {
      if (!this.hf) {
        return '未配置 Hugging Face token';
      }
      const result = await this.hf.textClassification({
        model: 'distilbert-base-uncased-finetuned-sst-2-english',
        inputs: text,
      });

      const sentiment = Array.isArray(result) ? result[0] : result;
      return `分析結果：${sentiment.label}，置信度：${Math.round(sentiment.score * 100)}%`;
    } catch (error) {
      console.error('文本分析失敗:', error);
      return '抱歉，分析過程中出現錯誤';
    }
  }

  public async chat(message: string, context: string[] = []): Promise<string> {
    try {
      if (!this.hf) {
        return '未配置 Hugging Face token';
      }
      const result = await this.hf.textGeneration({
        model: 'gpt2',
        inputs: context.length > 0 ? `${context.join('\n')}\n${message}` : message,
        parameters: {
          max_length: 100,
          temperature: 0.7,
        }
      });

      return result.generated_text;
    } catch (error) {
      console.error('聊天請求失敗:', error);
      return '抱歉，我現在無法回應，請稍後再試';
    }
  }

  public async summarize(text: string): Promise<string> {
    try {
      if (!this.hf) {
        return '未配置 Hugging Face token';
      }
      const result = await this.hf.summarization({
        model: 'facebook/bart-large-cnn',
        inputs: text,
        parameters: {
          max_length: 130,
          min_length: 30,
        },
      });

      return result.summary_text;
    } catch (error) {
      console.error('摘要生成失敗:', error);
      return '抱歉，無法生成摘要';
    }
  }
} 