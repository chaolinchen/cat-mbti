import axios from 'axios';
import * as cheerio from 'cheerio';

export interface ScrapingResult {
  title: string;
  content: string;
  url: string;
}

export class WebScraper {
  async scrapeWebsite(url: string): Promise<ScrapingResult> {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      
      const title = $('title').text();
      const content = $('body').text().trim();
      
      return {
        title,
        content: content.substring(0, 1000), // 限制內容長度
        url
      };
    } catch (error) {
      console.error('Scraping error:', error);
      throw new Error('Failed to scrape website');
    }
  }
} 