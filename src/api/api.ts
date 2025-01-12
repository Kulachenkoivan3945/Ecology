import axios from 'axios';

const getBaseUrl = () => import.meta.env.REST_URL ?? 'https://marysiahandmade.ru/rest_api/';

class Api {
  private axios = axios.create({
    baseURL: `${getBaseUrl()}`,
  });

  public async uploadForm(formData): Promise<string> {
    const res = await this.axios.post<FormData, string>('send_mail.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  }
}

const api = new Api();

export default api;
