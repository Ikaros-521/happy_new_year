import { serve } from "https://deno.land/std/http/server.ts";
import { serveDir } from "https://deno.land/std/http/file_server.ts";

const port = 8000;

console.log(`HTTP服务器运行在 http://localhost:${port}`);

serve(async (req) => {
  // 提供静态文件服务
  const response = await serveDir(req, {
    fsRoot: ".", // 当前目录作为根目录
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });
  return response;
}, { port }); 