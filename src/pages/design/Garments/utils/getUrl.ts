export function getURL(url: string | null | undefined): string {
    return url == null ? 
    "http://localhost:3000/default/not-found.webp" 
    : processURL(url);
}
  function processURL(url: string): string {
    const defaultUrl = "http://localhost:3000/default/not-found.webp";
    
    if (url !== defaultUrl) {
      const baseUrl = "http://localhost:3000/";
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      return baseUrl + "images/" + fileName;
    }
  
    return url;
  }