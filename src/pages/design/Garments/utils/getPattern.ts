export function getPattern(url: string | null): string {
    if (url && url !== "http://localhost:3000/default/not-found.webp") {
        const baseUrl = "http://localhost:3000/";
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        return baseUrl + "patterns/" + fileName;
    }
    return "";
}